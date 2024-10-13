import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Login() {
  return (
    <form className="h-screen w-screen flex flex-col justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </CardContent>
        <CardFooter className="flex flex-col items-end gap-4">
          <Button type="submit">Submit</Button>
          <Link href="/register">
            <Button variant="outline" role="button">
              Create new account?
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </form>
  );
}
