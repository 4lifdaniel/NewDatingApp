//import Image from "next/image";
import { Button } from "@heroui/button"; 
import Link from "next/link";
import TopNavBar from "./components/navbar/TopNav";

export default function Home() {
  return (
<div>
  {/* <TopNavBar></TopNavBar> */}
    <h1>This is homepage</h1>
    <Button
    as={Link}
    href="/members"
    > CLick me 
    </Button>
    </div>
      );
}
