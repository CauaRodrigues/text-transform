"use client";

import Image from "next/image";

import { ButtonsIcons } from "../Icons";
import { IconSizes } from "../Icons/Sizes";

export default function ShareButton() {
  const isAllowedToShare = Object.prototype.hasOwnProperty.call(
    navigator,
    "share",
  );

  const dataToShare = {
    title: "Text Transform",
    text: "Estilize e formate textos, converta para maiúsculo ou minúsculo, gere textos Lorem Ipsum, codifique textos e muito mais.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
  };

  const shareLink = async () => {
    if (isAllowedToShare) {
      const canShare = navigator.canShare(dataToShare);
      if (canShare) {
        await navigator.share(dataToShare);
      } else {
        console.log("Você não pode compartilhar estes tipos de dados");
      }
    } else {
      console.log(
        "Infelizmente, seu navegador não dá suporte para esta funcionalidade.",
      );
    }
  };

  return (
    isAllowedToShare && (
      <button onClick={shareLink} title="Compartilhar">
        <Image
          src={ButtonsIcons.share}
          alt="Compartilhar"
          className="icon"
          width={IconSizes.large.width}
          height={IconSizes.large.height}
        />
      </button>
    )
  );
}
