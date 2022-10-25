import React from "react";

export default function CustomButton({ flag }) {
  if (flag) return <button>costom</button>;
  return <button>Nop</button>;
}
