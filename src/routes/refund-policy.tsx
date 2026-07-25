import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";

const doc = LEGAL["refund-policy"];
const crumbs = [{ label: "Refund Policy" }];

export const Route = createFileRoute("/refund-policy")({
  head: () => legalHead(doc, crumbs),
  component: () => <LegalPage doc={doc} crumbs={crumbs} />,
});
