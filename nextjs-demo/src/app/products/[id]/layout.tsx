export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {children}
      <div>
        <h2>Featured Product section</h2>
      </div>
    </div>
  );
}
