export default async function CopyToClipboard(content: string) {
  return await navigator.clipboard.writeText(content);
}
