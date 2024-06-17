const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full h-auto relative px-6 py-4">{children}</section>
  );
};

export default Layout;
