import { PiggyBank } from "lucide-react";
import React from "react";

const Logo = () => {
  return (
    <a href="/" className="flex items-center gap-2">
      <PiggyBank className="stroke h-11 w-11 stroke-amber-500 stroke-[1.5" />
      <p className="text-3xl font-bold leading-tight tracking-tighter text-amber-500">
        BudgetTracker
      </p>
    </a>
  );
};

export const LogoMobile = () => {
  return (
    <a href="/" className="flex items-center gap-2">
      <p className="text-3xl font-bold leading-tight tracking-tighter text-amber-500">
        BudgetTracker
      </p>
    </a>
  );
};

export default Logo;
