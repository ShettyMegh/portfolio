const MainWrapper = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`${
        className ? className : ""
      } flex min-h-screen items-center justify-center bg-background font-sans  py-16 px-6 sm:py-32 sm:px-16`}
    >
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between sm:items-start mt-4">
        {children}
      </main>
    </div>
  );
};

export default MainWrapper;
