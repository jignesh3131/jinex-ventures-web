import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Send } from "lucide-react";
import JinexLogo from "./JinexLogo";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(5, "Tell us a little more").max(1000),
});

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      message: String(form.get("message") ?? ""),
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    toast.success("Inquiry sent — we'll be in touch shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-soft relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-10 right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary-glow/5 rounded-full blur-3xl" />

      <div className="container max-w-5xl relative z-10">
        <div className="rounded-[2.5rem] overflow-hidden shadow-elegant grid md:grid-cols-5 bg-card">
          <div className="md:col-span-2 p-10 bg-gradient-primary text-primary-foreground flex flex-col justify-between gap-8 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-12 -right-12 w-40 h-40 border border-white/10 rounded-full" />
            <div className="absolute -bottom-20 -left-10 w-56 h-56 border border-white/10 rounded-full" />

            <div>
              <JinexLogo
                size={56}
                className="mb-4"
              />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80">
                Company Inquiries
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 leading-tight">
                Let's talk about your order.
              </h2>
              <p className="mt-4 opacity-90 leading-relaxed">
                Wholesale, retail, or just curious — we read every message.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm opacity-90">
                <Mail size={18} />
                hello@jinexventures.com
              </div>
              <div className="h-px bg-white/20" />
              <p className="text-xs opacity-60">
                A Jinex Ventures company · Typically replies within 24 hours
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="md:col-span-3 p-10 space-y-5">
            <Field label="Name">
              <input
                name="name"
                type="text"
                required
                maxLength={100}
                placeholder="Your name"
                className="input-base"
              />
            </Field>
            <Field label="Email">
              <input
                name="email"
                type="email"
                required
                maxLength={255}
                placeholder="you@company.com"
                className="input-base"
              />
            </Field>
            <Field label="Message">
              <textarea
                name="message"
                required
                maxLength={1000}
                rows={4}
                placeholder="Tell us how we can help…"
                className="input-base resize-none"
              />
            </Field>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all disabled:opacity-60"
            >
              {loading ? "Sending…" : "Send inquiry"} <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
      {label}
    </span>
    {children}
  </label>
);

export default Contact;