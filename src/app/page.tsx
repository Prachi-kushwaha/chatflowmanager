import { Button } from "@/components/ui/button";
import { AuthScreen } from "@/features/auth/components/auth-screen";

export default function Home() {
  return (
    <>
    <h1 className="bg-blue-300 border border-red-300 m-5">Hello world</h1>
    <Button>Click Me</Button>
    <AuthScreen/>
    </>
  );
}
