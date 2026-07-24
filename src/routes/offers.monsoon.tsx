import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/LandingPage";
import { LANDING_PAGES } from "@/lib/landing";

const data = LANDING_PAGES["offers-monsoon"];
const crumbs = [{ label: "Offers", to: "/offers/monsoon" }, { label: "Monsoon" }];

export const Route = createFileRoute("/offers/monsoon")({
  head: () => landingHead(data, "", crumbs),
  component: () => <LandingPage data={data} crumbs={crumbs} />,
});
