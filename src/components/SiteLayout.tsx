import { type ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { FloatingButtons } from "./FloatingButtons";
import { TopBar } from "./TopBar";
import { RecruitmentCard } from "./RecruitmentCard";
import { AvailabilityAlert } from "./AvailabilityAlert";
import { DasaraOpening } from "./DasaraOpening";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <AvailabilityAlert />
      <TopBar />
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingButtons />
      <DasaraOpening />
      <RecruitmentCard />
    </div>
  );
}
