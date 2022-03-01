export const MyHeading = ({ children }) => {
  return (
    <div className="flex h-screen justify-center">
      <h1 className="text-3xl font-bold underline">{children}</h1>
    </div>
  );
};
