import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";

const doc = LEGAL["cancellation-policy"];
const crumbs = [{ label: "Cancellation Policy" }];

export const Route = createFileRoute("/cancellation-policy")({
  head: () => legalHead(doc, crumbs),
  component: () => <LegalPage doc={doc} crumbs={crumbs} />,
});
