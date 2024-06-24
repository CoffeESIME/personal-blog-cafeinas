import Footer from "@/components/layout/footer";
import Header from "./header/Header";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <div className="flex-1">{children}</div>
      <Footer></Footer>
    </div>
  );
}
