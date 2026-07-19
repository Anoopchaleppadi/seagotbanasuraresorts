import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, MessageCircle, ArrowRight, Car, CheckCircle2, X, Copy } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { RESORT, waLink, telLink } from "@/lib/resort";
import { VILLAS } from "@/lib/villas";
import aerial from "@/assets/aerial.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book — Seagot Banasura Resorts, Wayanad" },
      { name: "description", content: "Book your stay at Seagot Banasura Resorts. WhatsApp, phone, email and booking form. Address, map and driving directions." },
      { property: "og:title", content: "Contact & Book — Seagot Banasura" },
      { property: "og:description", content: "Reserve your lake-view villa in Wayanad." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  mobile: z.string().trim().min(6, "Enter a valid mobile number").max(20),
  whatsapp: z.string().trim().min(6).max(20),
  email: z.string().trim().email("Enter a valid email").max(120),
  address: z.string().trim().max(200).optional().or(z.literal("")),
  groupType: z.enum(["Family", "Bachelors", "Mixed Group"]),
  adults: z.number().int().min(1).max(50),
  children612: z.number().int().min(0).max(30),
  childrenU6: z.number().int().min(0).max(20),
  checkIn: z.string().min(1, "Select a check-in date"),
  checkOut: z.string().min(1, "Select a check-out date"),
  villa: z.string().max(80),
  rooms: z.number().int().min(1).max(15),
  requests: z.string().max(500).optional().or(z.literal("")),
});
type Booking = z.infer<typeof bookingSchema>;

function ContactPage() {
  return (
    <SiteLayout>
      <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
        <img src={aerial} alt="" className="absolute inset-0 h-full w-full object-cover ken-burns" width={1600} height={1100} fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-end px-6 pb-16 text-center text-white">
          <span className="divider-gold animate-fade-up">Reservations</span>
          <h1 className="mt-5 font-serif text-5xl sm:text-6xl animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Plan your stay with us
          </h1>
          <p className="mt-4 max-w-xl text-white/85 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Our reservations desk responds within minutes — by WhatsApp, phone or email.
          </p>
        </div>
      </section>

      <section className="bg-mist px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <Reveal>
            <ContactCard />
          </Reveal>
          <div className="lg:col-span-2" id="book">
            <Reveal>
              <BookingForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-glass">
              <iframe
                title="Seagot Banasura Resorts location"
                src={RESORT.mapEmbed}
                width="100%"
                height="440"
                loading="lazy"
                className="border-0"
              />
            </div>
          </Reveal>
          <Reveal>
            <div>
              <span className="divider-gold">Getting Here</span>
              <h2 className="mt-4 font-serif text-4xl text-emerald-deep">Driving directions</h2>
              <ul className="mt-6 space-y-4 text-charcoal/80">
                <li className="flex gap-3"><Car size={18} className="mt-1 text-gold" /><span><b>From Kozhikode (CCJ) Airport:</b> ~110 km · 3.5 hours via Thamarassery Ghat road.</span></li>
                <li className="flex gap-3"><Car size={18} className="mt-1 text-gold" /><span><b>From Bangalore:</b> ~280 km · 6 hours via Mysuru and Sultan Bathery.</span></li>
                <li className="flex gap-3"><Car size={18} className="mt-1 text-gold" /><span><b>From Kalpetta town:</b> 25 km · 45 minutes via Padinjarathara.</span></li>
              </ul>
              <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(RESORT.address)}`} target="_blank" rel="noreferrer" className="btn-luxe mt-8">
                Open in Google Maps <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactCard() {
  return (
    <div className="glass rounded-3xl p-8 shadow-luxe space-y-6">
      <div>
        <span className="text-xs uppercase tracking-[0.28em] text-emerald">Reach us</span>
        <h2 className="mt-2 font-serif text-3xl text-emerald-deep">Talk to a real person.</h2>
      </div>
      <a href={waLink()} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-emerald/15 bg-white/60 p-4 transition hover:border-gold">
        <span className="grid h-11 w-11 place-items-center rounded-full text-white" style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}>
          <MessageCircle size={18} />
        </span>
        <div><div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">WhatsApp</div><div className="text-emerald-deep font-medium">+91 {RESORT.whatsapp}</div></div>
      </a>
      {[
        { label: "Reception", num: RESORT.phones.reception },
        { label: "Reservations", num: RESORT.phones.reservations },
        { label: "Sales", num: RESORT.phones.sales },
      ].map((c) => (
        <a key={c.num} href={telLink(c.num)} className="flex items-center gap-3 rounded-2xl border border-emerald/15 bg-white/60 p-4 transition hover:border-gold">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-emerald text-white"><Phone size={18} /></span>
          <div><div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{c.label}</div><div className="text-emerald-deep font-medium">+91 {c.num}</div></div>
        </a>
      ))}
      <a href={`mailto:${RESORT.email}`} className="flex items-center gap-3 rounded-2xl border border-emerald/15 bg-white/60 p-4 transition hover:border-gold">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-gold text-charcoal"><Mail size={18} /></span>
        <div><div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Email</div><div className="text-emerald-deep font-medium">{RESORT.email}</div></div>
      </a>
      <div className="flex items-start gap-3 rounded-2xl border border-emerald/15 bg-white/60 p-4">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-emerald text-white"><MapPin size={18} /></span>
        <div><div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Address</div><div className="text-charcoal/85 text-sm mt-0.5">{RESORT.address}</div></div>
      </div>
    </div>
  );
}

function BookingForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    const raw: Booking = {
      name: String(fd.get("name") || ""),
      mobile: String(fd.get("mobile") || ""),
      whatsapp: String(fd.get("whatsapp") || ""),
      email: String(fd.get("email") || ""),
      address: String(fd.get("address") || ""),
      groupType: (fd.get("groupType") as Booking["groupType"]) || "Family",
      adults: Number(fd.get("adults") || 0),
      children612: Number(fd.get("children612") || 0),
      childrenU6: Number(fd.get("childrenU6") || 0),
      checkIn: String(fd.get("checkIn") || ""),
      checkOut: String(fd.get("checkOut") || ""),
      villa: String(fd.get("villa") || ""),
      rooms: Number(fd.get("rooms") || 1),
      requests: String(fd.get("requests") || ""),
    };
    const parsed = bookingSchema.safeParse(raw);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      setSending(false);
      return;
    }
    setErrors({});
    const d = parsed.data;
    const msg = `🏡 *New Booking Enquiry*

*Name:* ${d.name}
*Mobile:* ${d.mobile}
*WhatsApp:* ${d.whatsapp}
*Email:* ${d.email}
*Address:* ${d.address || "—"}
*Group Type:* ${d.groupType}
*Adults:* ${d.adults}
*Children (6–12):* ${d.children612}
*Children Below 6:* ${d.childrenU6}
*Check-in:* ${d.checkIn}
*Check-out:* ${d.checkOut}
*Preferred Villa:* ${d.villa || "Any"}
*Rooms Required:* ${d.rooms}
*Special Requirements:* ${d.requests || "—"}

Please contact me regarding availability.`;
    window.open(waLink(msg), "_blank", "noopener");
    setSending(false);
  };

  return (
    <form onSubmit={onSubmit} className="glass rounded-3xl p-8 shadow-luxe">
      <span className="text-xs uppercase tracking-[0.28em] text-emerald">Booking Enquiry</span>
      <h2 className="mt-2 font-serif text-3xl text-emerald-deep">Reserve your villa</h2>
      <p className="mt-1 text-sm text-muted-foreground">We reply personally within minutes.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" error={errors.name} required />
        <Field label="Mobile Number" name="mobile" type="tel" error={errors.mobile} required />
        <Field label="WhatsApp Number" name="whatsapp" type="tel" error={errors.whatsapp} required />
        <Field label="Email Address" name="email" type="email" error={errors.email} required />
        <Field label="Address" name="address" className="sm:col-span-2" />

        <SelectField label="Group Type" name="groupType" options={["Family", "Bachelors", "Mixed Group"]} required />
        <SelectField
          label="Preferred Villa"
          name="villa"
          options={["Any", ...VILLAS.map((v) => v.name)]}
        />

        <Field label="Adults (12+)" name="adults" type="number" defaultValue={2} min={1} error={errors.adults} required />
        <Field label="Children (6–12)" name="children612" type="number" defaultValue={0} min={0} />
        <Field label="Children (under 6, free)" name="childrenU6" type="number" defaultValue={0} min={0} />
        <Field label="Rooms Required" name="rooms" type="number" defaultValue={1} min={1} />

        <Field label="Check-in Date" name="checkIn" type="date" error={errors.checkIn} required />
        <Field label="Check-out Date" name="checkOut" type="date" error={errors.checkOut} required />

        <div className="sm:col-span-2">
          <label className="block text-xs uppercase tracking-[0.22em] text-emerald">Special Requests</label>
          <textarea name="requests" rows={3} maxLength={500} className="mt-2 w-full rounded-2xl border border-emerald/20 bg-white/70 px-4 py-3 text-sm focus:border-gold focus:outline-none" />
        </div>
      </div>

      <div className="mt-8 flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          Your enquiry opens WhatsApp with a pre-filled message to +91 {RESORT.whatsapp}.
        </p>
        <button disabled={sending} className="btn-luxe disabled:opacity-70">
          {sending ? "Preparing…" : "Send Enquiry"} <MessageCircle size={16} />
        </button>
      </div>
    </form>
  );
}

function Field({
  label, name, type = "text", error, required, className = "", defaultValue, min,
}: { label: string; name: string; type?: string; error?: string; required?: boolean; className?: string; defaultValue?: string | number; min?: number }) {
  return (
    <div className={className}>
      <label className="block text-xs uppercase tracking-[0.22em] text-emerald">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue as any}
        min={min}
        className="mt-2 w-full rounded-2xl border border-emerald/20 bg-white/70 px-4 py-3 text-sm focus:border-gold focus:outline-none"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function SelectField({
  label, name, options, required,
}: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.22em] text-emerald">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <select
        name={name}
        required={required}
        className="mt-2 w-full rounded-2xl border border-emerald/20 bg-white/70 px-4 py-3 text-sm focus:border-gold focus:outline-none"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
