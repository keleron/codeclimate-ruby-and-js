import React from "react";

export default function CustomButton({ flag }) {
  if (flag) return <button>Costom</button>;
  return <button>Nop</button>;
}
