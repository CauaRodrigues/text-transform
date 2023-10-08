"use client";

import Image from "next/image";
import { ButtonsIcons } from "../Icons";

const ICON_WIDTH = 26;
const ICON_HEIGHT = 42;

export default function ShareButton() {
  return (
    <button
      onClick={async () => {
        await navigator.share({
          title: "Text Transform",
          text: "Estilize e formate textos, converta para maiúsculo ou minúsculo, gere textos Lorem Ipsum, codifique textos e muito mais.",
          url: process.env.NEXT_PUBLIC_BASE_URL,
        });
      }}
      title="Compartilhar"
    >
      <Image
        src={ButtonsIcons.share}
        alt="Compartilhar"
        className="icon"
        width={ICON_WIDTH}
        height={ICON_HEIGHT}
      />
    </button>
  );
}
