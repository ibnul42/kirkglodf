import React from "react";

export default function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={props.id}>{label}</label>
      <input {...props} />
    </div>
  );
}
