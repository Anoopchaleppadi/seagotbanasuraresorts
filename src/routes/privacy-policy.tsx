import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";

const doc = LEGAL["privacy-policy"];
const crumbs = [{ label: "Privacy Policy" }];

export const Route = createFileRoute("/privacy-policy")({
  head: () => legalHead(doc, crumbs),
  component: () => <LegalPage doc={doc} crumbs={crumbs} />,
});
