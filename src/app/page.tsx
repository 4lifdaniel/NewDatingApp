//import Image from "next/image";
import { Button } from "@heroui/button"; 
import Link from "next/link";
import TopNavBar from "./components/navbar/TopNav";
//import TopNavBar from "./components/navbar/TopNav";

export default function Home() {
  return (
<div className="bg-gray-300 text-neutral-900"  >
  <TopNavBar/>
  <div className="flex flex-col items-center justify-center min-h-screen">
  <h1 className="font-medium text-4xl tracking-wide">Welcome to Cupidle</h1>
  <h2 className="italic">New era of match-making</h2>
    <Button className="mt-5 font-bold bg-white"
    as={Link}
    href="/members"
    > Find your date 
    </Button>

  </div>
    
    </div>
      );
}
