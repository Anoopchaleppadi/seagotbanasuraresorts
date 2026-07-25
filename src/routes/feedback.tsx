import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Star, CheckCircle2 } from "lucide-react";
import aerial from "@/assets/aerial.jpg";

function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SiteLayout>
      <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden">
        <img src={aerial} alt="Guest feedback at Seagot Banasura" className="absolute inset-0 h-full w-full object-cover ken-burns" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-14 text-white">
          <Breadcrumbs items={[{ label: "Feedback" }]} dark />
          <span className="divider-gold mt-3">Guest Feedback</span>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">Tell us how we did</h1>
        </div>
      </section>

      <section className="bg-mist px-6 py-20">
        <div className="mx-auto max-w-2xl">
          {submitted ? (
            <div className="glass rounded-3xl p-12 text-center shadow-luxe animate-fade-up">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-emerald text-white shadow-luxe animate-scale-in">
                <CheckCircle2 size={36} />
              </div>
              <h2 className="mt-6 font-serif text-3xl text-emerald-deep">Thank you</h2>
              <p className="mt-3 text-charcoal/75">Your feedback has been received. Our guest experience team will review it personally — thank you for helping us get better.</p>
            </div>
          ) : (
            <Reveal>
              <form onSubmit={onSubmit} className="glass rounded-3xl p-8 sm:p-10 shadow-luxe space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm">
                    <span className="text-emerald-deep font-medium">Name</span>
                    <input required type="text" className="mt-1.5 w-full rounded-xl border border-emerald/20 bg-white/80 px-4 py-3 text-charcoal focus:border-gold focus:outline-none" />
                  </label>
                  <label className="block text-sm">
                    <span className="text-emerald-deep font-medium">Phone</span>
                    <input required type="tel" className="mt-1.5 w-full rounded-xl border border-emerald/20 bg-white/80 px-4 py-3 text-charcoal focus:border-gold focus:outline-none" />
                  </label>
                </div>
                <label className="block text-sm">
                  <span className="text-emerald-deep font-medium">Email</span>
                  <input required type="email" className="mt-1.5 w-full rounded-xl border border-emerald/20 bg-white/80 px-4 py-3 text-charcoal focus:border-gold focus:outline-none" />
                </label>
                <div>
                  <span className="text-sm text-emerald-deep font-medium">Overall Rating</span>
                  <div className="mt-2 flex gap-1">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button key={n} type="button" onMouseEnter={() => setHover(n)} onMouseLeave={() => setHover(0)} onClick={() => setRating(n)} aria-label={`${n} star`}>
                        <Star size={30} className={`transition ${(hover || rating) >= n ? "text-gold" : "text-charcoal/25"}`} fill={(hover || rating) >= n ? "currentColor" : "none"} />
                      </button>
                    ))}
                  </div>
                </div>
                <label className="block text-sm">
                  <span className="text-emerald-deep font-medium">Your experience</span>
                  <textarea required rows={4} className="mt-1.5 w-full rounded-xl border border-emerald/20 bg-white/80 px-4 py-3 text-charcoal focus:border-gold focus:outline-none" />
                </label>
                <label className="block text-sm">
                  <span className="text-emerald-deep font-medium">Suggestions (optional)</span>
                  <textarea rows={3} className="mt-1.5 w-full rounded-xl border border-emerald/20 bg-white/80 px-4 py-3 text-charcoal focus:border-gold focus:outline-none" />
                </label>
                <button type="submit" className="btn-luxe w-full">Submit Feedback</button>
              </form>
            </Reveal>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

export const Route = createFileRoute("/feedback")({
  head: () => ({
    meta: [
      { title: "Share Feedback — Seagot Banasura Resorts, Wayanad" },
      { name: "description", content: "Share your feedback about your stay at Seagot Banasura Resorts. Your voice helps us serve you better." },
      { property: "og:title", content: "Share Feedback — Seagot Banasura" },
      { property: "og:description", content: "Tell us how your stay went at Seagot Banasura Resorts." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/feedback" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Share Feedback — Seagot Banasura" },
      { name: "twitter:description", content: "Tell us how your stay went." },
    ],
    links: [{ rel: "canonical", href: "/feedback" }],
  }),
  component: FeedbackPage,
});
