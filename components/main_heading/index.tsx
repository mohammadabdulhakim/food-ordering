import React from "react";

const index = ({ desc, title }: { desc: string; title: string }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-2">
      <p className="text-2xl text-secondary">{desc}</p>
      <h2 className="text-4xl text-primary font-semibold">{title}</h2>
    </div>
  );
};

export default index;
