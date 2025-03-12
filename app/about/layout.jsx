import Footer from "@/components/Footer";

export const metadata = {
	title: "Marcel | About",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
