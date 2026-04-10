import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for MES consulting and manufacturing IT projects.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 md:pt-32 pb-16 md:pb-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <ContactContent />
      </div>
    </div>
  );
}
