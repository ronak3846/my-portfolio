"use client";

import Typewriter from "typewriter-effect";

export default function TypewriterText() {
  return (
    <Typewriter
      options={{
        strings: ["Frontend Developer", "SEO Specialist"],
        autoStart: true,
        loop: true,
      }}
    />
  );
}
