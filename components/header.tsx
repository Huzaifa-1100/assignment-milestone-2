import Image from "next/image";
import logo from "../public/assets/image/logo.png"
import NavBar from "./navBar";
import { Button } from "@/components/ui/button";
export default function Header() {
  return (
    <header className="bg-red-300 flex justify-between items-center h-20">
      <Image  src={logo} alt="logo" height={100} width={100} className="rounded-full p-5"  />
      <NavBar />
      <Button className="hidden md:flex gap-3 mx-5" variant={"destructive"}>
        Download CV
      </Button>

    </header>
  );
}
