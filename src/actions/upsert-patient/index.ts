"use server";

import { db } from "@/db";
import { patientsTable } from "@/db/schema";
import { actionClient } from "@/lib/safe-action";
import { revalidatePath } from "next/cache";
import { upsertPatientSchema } from "./schema";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const upsertPatient = actionClient
  .schema(upsertPatientSchema)
  .action(async ({ parsedInput }) => {
    const session = await auth.api.getSession({ headers: await headers() });
    const clinicId = session?.user.clinic?.id;

    if (!clinicId) throw new Error("Clínica não encontrada");

    const patientId = parsedInput.id ?? crypto.randomUUID();

    await db
      .insert(patientsTable)
      .values({
        ...parsedInput,
        id: patientId,
        clinicId: clinicId,
      })
      .onConflictDoUpdate({
        target: [patientsTable.id],
        set: {
          ...parsedInput,
        },
      });
    revalidatePath("/patients");
  });
