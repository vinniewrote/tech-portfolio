import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SocialConnectBlock,
  SocialConnectRow,
  SocialLinks,
} from "../styling/shared_styles";
// import LinkedIn from "../images/LinkedIn";
// import Github from "../images/Github";

export default function SocialBlock() {
  return (
    <SocialConnectBlock>
      <SocialConnectRow>
        <Link
          href="https://www.linkedin.com/in/vizentefreeman/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            aria-hidden
            src="/images/linkedin.svg"
            alt="linkedin icon"
            width={30}
            height={30}
          />
        </Link>

        <Link
          href="https://github.com/vinniewrote"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            aria-hidden
            src="/images/github.svg"
            alt="github icon"
            width={30}
            height={30}
          />
        </Link>
      </SocialConnectRow>
    </SocialConnectBlock>
  );
}
