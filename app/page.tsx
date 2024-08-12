"use client";

import { useContext } from "react";
import { Menus } from "@/components/Menu";
import { HowItWork } from "@/components/HowItWork";
import { ShowCase } from "@/components/Showcase";
import { AppContext } from "@/context/appContext";
import { BannerComponent } from "@/components/Banner";

export default function Home() {
  const { menuList, customers } = useContext(AppContext);

  return (
    <main className="w-full h-auto">
      <ShowCase />

      <div className="container">
        <HowItWork />
        <Menus menuList={menuList} customers={customers} />
        <BannerComponent />
      </div>
    </main>
  );
}
