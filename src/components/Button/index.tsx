"use client";

import { useState } from "react";

export default function Button() {
  const [counter, setCounter] = useState(0);

  const handlerClickButton = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <button type="button" onClick={handlerClickButton}>
      Click Here! {counter}
    </button>
  );
}
