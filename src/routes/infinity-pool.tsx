import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/LandingPage";
import { LANDING_PAGES } from "@/lib/landing";

const data = LANDING_PAGES["infinity-pool"];
const crumbs = [{ label: "Infinity Pool" }];

export const Route = createFileRoute("/infinity-pool")({
  head: () => landingHead(data, "", crumbs),
  component: () => <LandingPage data={data} crumbs={crumbs} />,
});
