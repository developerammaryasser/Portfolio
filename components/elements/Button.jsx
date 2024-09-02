const Button = ({ position, icon, className,onClick, children }) => {
  return (
    <button onClick={onClick} className="relative inline-flex h-12 overflow-hidden rounded-lg p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex size-full cursor-pointer items-center justify-center gap-x-4 rounded-lg bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl ${className}`}
      >
        {position === "left" && icon}
        {children}
        {position === "right" && icon}
      </span>
    </button>
  );
};
export default Button;
