import React from "react";

export default function CustomButton({ flag }) {
  if (flag) return <button>CustomButton</button>;
  return <button>Nop</button>;
}
