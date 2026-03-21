import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with MES Automation for a free consultation or to discuss your project requirements.",
};

export default function ContactPage() {
  return (
    <div className="py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Contact Us"
          subtitle="Ready to take your manufacturing operations to the next level? Our team of automation experts is here to help. Reach out for a free initial consultation or to discuss your project requirements."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
