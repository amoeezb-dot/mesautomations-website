"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  readonly fullName: string;
  readonly company: string;
  readonly email: string;
  readonly phone: string;
  readonly projectType: string;
  readonly message: string;
}

const INITIAL_FORM: FormData = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

const PROJECT_TYPES = [
  "MES Implementation",
  "PLC Programming",
  "Digital Twin & Simulation",
  "OEE Analytics",
  "Training & Change Management",
  "Other",
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please describe your project";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    // In production, this would send to an API endpoint
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-card border rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
        <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground max-w-sm">
          We&apos;ve received your inquiry and will get back to you within 24
          hours. Our team is looking forward to discussing your project.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setFormData(INITIAL_FORM);
            setSubmitted(false);
          }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border rounded-2xl p-8">
      <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => updateField("fullName", e.target.value)}
              placeholder="Your full name"
              className="mt-1"
            />
            {errors.fullName && (
              <p className="text-sm text-destructive mt-1">{errors.fullName}</p>
            )}
          </div>
          <div>
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => updateField("company", e.target.value)}
              placeholder="Your company"
              className="mt-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="you@company.com"
              className="mt-1"
            />
            {errors.email && (
              <p className="text-sm text-destructive mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              placeholder="+49 ..."
              className="mt-1"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="projectType">Project Type</Label>
          <select
            id="projectType"
            value={formData.projectType}
            onChange={(e) => updateField("projectType", e.target.value)}
            className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="">Select a project type</option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="message">Message / Project Description *</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => updateField("message", e.target.value)}
            placeholder="Tell us about your project requirements..."
            rows={5}
            className="mt-1"
          />
          {errors.message && (
            <p className="text-sm text-destructive mt-1">{errors.message}</p>
          )}
        </div>

        <Button type="submit" size="lg" className="w-full">
          <Send className="mr-2 h-4 w-4" />
          Send Message
        </Button>
      </div>
    </form>
  );
}
