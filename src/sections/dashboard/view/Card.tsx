import { PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="rounded-2xl shadow-card bg-white">
    <div className="py-4 px-3 md:px-8 ">
      <div className="flex flex-col items-center justify-between gap-4 ">
        {children}
      </div>
    </div>
  </div>
);
