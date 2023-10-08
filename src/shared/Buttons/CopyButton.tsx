"use client";

import Image from "next/image";
import CopyLinkIcon from "@/assets/icons/utils/link.svg";
import CopyToClipboard from "@/utils/CopyToClipboard";

const ICON_WIDTH = 26;
const ICON_HEIGHT = 42;

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
        src={CopyLinkIcon}
        alt="Copiar Link"
        className="icon"
        width={ICON_WIDTH}
        height={ICON_HEIGHT}
      />
    </button>
  );
}
