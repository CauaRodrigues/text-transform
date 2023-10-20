export default function Debounce(callback: () => void, wait: number) {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(callback, wait);
  };
}
