"use server";

import { db } from "@/db";
import { doctorsTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { actionClient } from "@/lib/safe-action";
import { headers } from "next/headers";
import { upsertDoctorSchema, UpsertDoctorSchema } from "./schema";

export const upsertDoctor = actionClient
  .schema(upsertDoctorSchema)
  .action(async ({ parsedInput }) => {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      throw new Error("Usuário não autenticado");
    }

    const clinicId = session?.user.clinic?.id;

    if (!clinicId) {
      throw new Error("Clínica não encontrada para o usuário");
    }

    await db
      .insert(doctorsTable)
      .values({
        id: parsedInput.id,
        clinicId: clinicId,
        ...parsedInput,
      })
      .onConflictDoUpdate({
        target: [doctorsTable.id],
        set: {
          ...parsedInput,
        },
      });
  });
