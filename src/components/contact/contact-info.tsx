import { SITE_CONFIG } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="bg-card border rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Address</h4>
              <p className="text-muted-foreground">{SITE_CONFIG.address}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Phone</h4>
              <p className="text-muted-foreground">{SITE_CONFIG.phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Email</h4>
              <p className="text-muted-foreground">{SITE_CONFIG.email}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Office Hours</h4>
              <p className="text-muted-foreground">{SITE_CONFIG.officeHours}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8">
        <h3 className="text-xl font-bold mb-3">Free Consultation</h3>
        <p className="text-muted-foreground leading-relaxed">
          Not sure where to start? Book a free 30-minute consultation with one
          of our automation experts. We&apos;ll assess your current setup and
          recommend the best path forward for your manufacturing operations.
        </p>
      </div>
    </div>
  );
}
