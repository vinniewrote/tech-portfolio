import React from "react";
import SocialBlock from "./SocialBlock";
import {
  MastHead,
  MastHeadGroup,
  MainImageWrapper,
} from "../styling/header_styles";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <MastHead>
      <MastHeadGroup>
        <MainImageWrapper>
          <Link href="/" alt="Home">
            <Image
              className="lionLogo"
              src="/images/leologo.svg"
              alt="Main Logo"
              height={100}
              width={100}
            />
          </Link>
        </MainImageWrapper>
        <SocialBlock />
      </MastHeadGroup>
    </MastHead>
  );
}
