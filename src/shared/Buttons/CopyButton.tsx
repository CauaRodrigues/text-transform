"use client";

import Image from "next/image";

import CopyToClipboard from "@/utils/CopyToClipboard";

import { ButtonsIcons } from "../Icons";
import { IconSizes } from "../Icons/Sizes";

export default function CopyButton({
  contentToCopy,
}: {
  contentToCopy: string;
}) {
  return (
    <button
      onClick={() => CopyToClipboard(contentToCopy)}
      title="Copiar para área de transferência"
    >
      <Image
        src={ButtonsIcons.copy}
        alt="Copiar Link"
        className="icon"
        width={IconSizes.large.width}
        height={IconSizes.large.height}
      />
    </button>
  );
}
