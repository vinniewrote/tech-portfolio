import React from "react";
import Image from "next/image";
import linkedinIcon from "../public/images/linkedin.svg";
import githubIcon from "../public/images/github.svg";
import {
  FooterBlock,
  FooterImg,
  ConnectPlatforms,
  FooterSlogan,
} from "../styling/footer_styles";
import { LeoAppLogo } from "../styling/shared_styles";

export default function Footer() {
  return (
    <FooterBlock>
      <ConnectPlatforms>
        <a href="https://www.linkedin.com/in/vizentefreeman/">
          <Image
            className="linkedIn"
            src={linkedinIcon}
            alt="Linkedin Logo"
            height={20}
            width={20}
          />
        </a>
        <a href="https://github.com/vinniewrote">
          <Image
            className="github"
            src={githubIcon}
            alt="github logo"
            height={20}
            width={20}
          />
        </a>
        {/* <a href="https://dribbble.com/vinniewrote">
          <Dribbble />
        </a> */}
        {/* <a href="https://uiuxdev.social/@vinniewrote">
          <Mastadon />
        </a> */}
      </ConnectPlatforms>
      <FooterSlogan>
        <p>made with ☕, 🥓 and ❤️ by me, vizente</p>
      </FooterSlogan>
      {/* <FooterImg>
        <TopLogo alt="footer-logo" />
      </FooterImg> */}
    </FooterBlock>
  );
}
