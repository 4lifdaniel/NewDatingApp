//import Image from "next/image";
import { Button } from "@heroui/button"; 
import Link from "next/link";
import TopNavBar from "./components/navbar/TopNav";
//import TopNavBar from "./components/navbar/TopNav";

export default function Home() {
  return (
<div >
  <TopNavBar/>
  <div className="flex flex-col items-center justify-center min-h-screen">
  <p className="font-bold text-4xl tracking-wide">Hi, Welcome to MatchMe!</p>
    <Button className="mt-5 font-bold"
    as={Link}
    href="/members"
    > Click to Start 
    </Button>

  </div>
    
    </div>
      );
}
