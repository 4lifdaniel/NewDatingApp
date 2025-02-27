import React from "react";
import Link from "next/link";
import TopNavBar from "../components/navbar/TopNav";

export default function AlifMembersPage() {
  return (
    <div>
        <TopNavBar></TopNavBar>
      <h3>alif is testing</h3>
      <Link href="/"> Please click me if you wish to come back home</Link>
    </div>
  );
}
