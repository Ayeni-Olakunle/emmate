import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/footer";
import FormInput from "@/components/FormInput/FormInput";
import Features from "@/components/Features/feature";

export default function Home() {
  return (
    <section>
      <Navbar />
      <FormInput />
      <Features />
      <Footer />
    </section>
  );
}
