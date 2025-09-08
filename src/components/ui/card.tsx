import type { ReactNode } from "react";

export const Card = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`rounded-lg border border-gray-700 bg-black/40 text-white shadow ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children }: { children: ReactNode }) => (
  <div className="border-b border-gray-700 p-3">{children}</div>
);

export const CardTitle = ({ children }: { children: ReactNode }) => (
  <h3 className="text-lg font-semibold">{children}</h3>
);

export const CardDescription = ({ children }: { children: ReactNode }) => (
  <p className="text-sm text-gray-400">{children}</p>
);

export const CardContent = ({ children }: { children: ReactNode }) => (
  <div className="p-3">{children}</div>
);
