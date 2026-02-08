"use client";

const DotLoader = () => {
  return (
    <span className="ml-4 inline-flex items-center gap-1">
      <span className="h-2 w-2 animate-[pulse_1.6s_ease-in-out_infinite] rounded-full bg-white/70 [animation-delay:-0.3s]" />
      <span className="h-2 w-2 animate-[pulse_1.6s_ease-in-out_infinite] rounded-full bg-white/65 [animation-delay:-0.15s]" />
      <span className="h-2 w-2 animate-[pulse_1.6s_ease-in-out_infinite] rounded-full bg-white/60" />
    </span>
  );
};

export default DotLoader;
