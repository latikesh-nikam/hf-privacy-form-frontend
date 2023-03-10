"use client";
import { languagesMapping } from "@/constants/constants";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Home from "../page";

const Main = () => {
  const [url, setURL] = useState("");
  const router = useRouter();
  const pathName = usePathname();
  const [, currentRoute] = pathName?.split("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!Object.keys(languagesMapping).includes(currentRoute)) {
        if (pathName !== "/") {
          router.push("/en");
        }
      } else {
        setURL(currentRoute);
      }
    }
  }, []);

  return <Home lang={url} />;
};

export default Main;
