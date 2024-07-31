"use client";

import { useContext } from "react";
import { Menus } from "@/components/Menu";
import { HowItWork } from "@/components/HowItWork";
import { ShowCase } from "@/components/Showcase";
import { AppContext } from "@/context/appContext";

export default function Home() {
  const { menuList } = useContext(AppContext);

  return (
    <main className="flex flex-col ">
      <ShowCase />
      <HowItWork />
      <Menus menuList={menuList} />
    </main>
  );
}
