export function Container({ children }) {
  return (
    <>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          {children}
        </div>
      </div>
    </>
  );
}
