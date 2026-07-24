import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/LandingPage";
import { LANDING_PAGES } from "@/lib/landing";

const data = LANDING_PAGES["family"];
const crumbs = [{ label: "Family Resort" }];

export const Route = createFileRoute("/family")({
  head: () => landingHead(data, "", crumbs),
  component: () => <LandingPage data={data} crumbs={crumbs} />,
});
