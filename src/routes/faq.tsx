import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/LandingPage";
import { LANDING_PAGES } from "@/lib/landing";

const data = LANDING_PAGES["faq"];
const crumbs = [{ label: "FAQ" }];

export const Route = createFileRoute("/faq")({
  head: () => landingHead(data, "", crumbs),
  component: () => <LandingPage data={data} crumbs={crumbs} />,
});
