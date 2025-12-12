import React from "react";

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background font-sans dark:bg-background">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-12 px-6 sm:py-32 sm:px-16 sm:items-start">
        {children}
      </main>
    </div>
  );
};

export default MainWrapper;
