"use client";
import Link from "next/link";
import { FormEventHandler, useState } from "react";

import PasswordInput from "@/components/custom/PasswordInput";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import supabase from "@/config/supabase";
import { useToast } from "@/hooks/use-toast";

export default function Register() {
  const [email, changeEmail] = useState("");
  const [password1, changePassword1] = useState("");
  const [password2, changePassword2] = useState("");
  const { toast } = useToast();
  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // validation
    if (!email) {
      toast({
        variant: "destructive",
        description: "Incorrect details.",
      });
    }
    if (!password1) {
      toast({
        variant: "destructive",
        description: "Incorrect details.",
      });
    }
    if (!password2) {
      toast({
        variant: "destructive",
        description: "Incorrect details.",
      });
    }
    if (password1 !== password2) {
      toast({
        variant: "destructive",
        description: "Incorrect details.",
      });
    }
    // main logic
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password1,
    });
    if (!data.user) {
      console.error(error);
      toast({
        variant: "destructive",
        description: error?.message,
      });
    }
  };
  return (
    <form
      className="h-screen w-screen flex flex-col justify-center items-center"
      onSubmit={handleFormSubmit}
    >
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => {
              changeEmail(e.target.value);
            }}
          />
          <PasswordInput
            placeholder="Password"
            value={password1}
            required
            onChange={(e) => {
              changePassword1(e.target.value);
            }}
          />

          <PasswordInput
            placeholder="Confirm Password"
            value={password2}
            required
            onChange={(e) => {
              changePassword2(e.target.value);
            }}
          />
        </CardContent>
        <CardFooter className="flex flex-col items-end gap-4">
          <Button type="submit">Submit</Button>
          <Link href="/login">
            <Button variant="outline" role="button">
              Already have an account?
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </form>
  );
}
