"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignUpForm from "./components/sign-up-form";

const AuthenticationPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Tabs defaultValue="login">
        <TabsList className="mb-4 grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Criar Conta</TabsTrigger>
        </TabsList>
        <TabsContent className="min-h-[500px] min-w-[400px]" value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Faça login para continuar.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6"></CardContent>
            <CardFooter>
              <Button>Entrar</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent className="min-h-[500px] min-w-[400px]" value="register">
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthenticationPage;
