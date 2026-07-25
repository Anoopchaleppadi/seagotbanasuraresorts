import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";

const doc = LEGAL["terms-and-conditions"];
const crumbs = [{ label: "Terms & Conditions" }];

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => legalHead(doc, crumbs),
  component: () => <LegalPage doc={doc} crumbs={crumbs} />,
});
