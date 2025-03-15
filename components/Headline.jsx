import React from "react";
import { HeadlineBlock } from "../styling/headline_styles";
import { NameSocialWrapper } from "../styling/shared_styles";

export default function Headline() {
  return (
    <HeadlineBlock>
      <NameSocialWrapper>
        <div>
          <h1>Vizente E Freeman</h1>
          <h2>Nerd, Athlete, Artist</h2>
        </div>
      </NameSocialWrapper>
      <p>
        Born into a family of artists and craftsmen, I love to tinker and build
        (physically &amp; digitally). I am drawn to vibrant colors and the
        angular shapes of 1990s graffitti. I am a competitor, playing football
        and basketball. I take on new challenges such as learning and competing
        in Thai Kickboxing and Brazilian jiu-jitsu.
      </p>
    </HeadlineBlock>
  );
}
