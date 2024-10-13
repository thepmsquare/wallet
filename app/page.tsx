import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Wallet</CardTitle>
          <CardDescription>personal finance tracking</CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href="/register">
            <Button>Get started</Button>
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
