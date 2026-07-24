import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/LandingPage";
import { LANDING_PAGES } from "@/lib/landing";

const data = LANDING_PAGES["restaurant"];
const crumbs = [{ label: "Restaurant" }];

export const Route = createFileRoute("/restaurant")({
  head: () => landingHead(data, "", crumbs),
  component: () => <LandingPage data={data} crumbs={crumbs} />,
});
