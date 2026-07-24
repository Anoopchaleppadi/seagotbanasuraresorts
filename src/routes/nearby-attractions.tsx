import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/LandingPage";
import { LANDING_PAGES } from "@/lib/landing";

const data = LANDING_PAGES["nearby-attractions"];
const crumbs = [{ label: "Nearby Attractions" }];

export const Route = createFileRoute("/nearby-attractions")({
  head: () => landingHead(data, "", crumbs),
  component: () => <LandingPage data={data} crumbs={crumbs} />,
});
