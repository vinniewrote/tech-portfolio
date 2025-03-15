import React from "react";
import SocialBlock from "./SocialBlock";
import { MastHead, MastHeadGroup } from "../styling/header_styles";
import Image from "next/image";

export default function Header() {
  return (
    <MastHead>
      <MastHeadGroup>
        <Image
          className="lionLogo"
          src="/images/leologo.svg"
          alt="Main Logo"
          height={100}
          width={100}
        />
        <SocialBlock />
      </MastHeadGroup>
    </MastHead>
  );
}
