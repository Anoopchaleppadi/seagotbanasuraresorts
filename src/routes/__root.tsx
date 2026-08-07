import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Seagot Banasura Resorts — Standard Lake View Resort in Wayanad" },
      {
        name: "description",
        content:
          "Escape to Seagot Banasura Resorts — a standard lake-view resort near Banasura Sagar Dam, Wayanad. Private villas, infinity pool, adventure, and Kerala hospitality.",
      },
      { name: "author", content: "Seagot Banasura Resorts" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:site_name", content: "Seagot Banasura Resorts" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@seagotbanasura" },
      {
        name: "keywords",
        content:
          "Standard Resort Wayanad, Resort Near Banasura Sagar Dam, Lake View Resort Kerala, Family Resort Wayanad, Best Resort in Wayanad, Infinity Pool Resort Kerala, Group Stay Wayanad, Corporate Resort Wayanad, Nature Resort Kerala, Standard Villas Wayanad",
      },
      { name: "theme-color", content: "#0f3d2e" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-title", content: "Seagot Banasura" },
      { name: "format-detection", content: "telephone=yes" },
      { name: "geo.region", content: "IN-KL" },
      { name: "geo.placename", content: "Wayanad, Kerala" },
      { name: "geo.position", content: "11.6707;75.9553" },
      { name: "ICBM", content: "11.6707, 75.9553" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "alternate", type: "application/rss+xml", title: "Seagot Banasura Blog", href: "/rss.xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "#organization",
              name: "Seagot Banasura Resorts",
              url: "/",
              logo: "/favicon.png",
              sameAs: [
                "https://instagram.com/",
                "https://facebook.com/",
                "https://youtube.com/",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+919747550505",
                  contactType: "reservations",
                  areaServed: "IN",
                  availableLanguage: ["English", "Malayalam", "Hindi"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+919747330303",
                  contactType: "reception",
                  areaServed: "IN",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+919747880808",
                  contactType: "customer service",
                  contactOption: "TollFree",
                  areaServed: "IN",
                },
              ],
            },
            {
              "@type": "WebSite",
              "@id": "#website",
              url: "/",
              name: "Seagot Banasura Resorts",
              publisher: { "@id": "#organization" },
              potentialAction: {
                "@type": "SearchAction",
                target: "/blog?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": ["Resort", "LodgingBusiness", "LocalBusiness"],
              "@id": "#resort",
              name: "Seagot Banasura Resorts",
              description:
                "Standard lake-view resort near Banasura Sagar Dam in Wayanad, Kerala with private villas, infinity pool and adventure experiences.",
              url: "/",
              telephone: "+919747550505",
              priceRange: "₹₹₹",
              image: "/favicon.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Padinjarathara, Banasura Sagar Dam Road",
                addressLocality: "Wayanad",
                addressRegion: "Kerala",
                postalCode: "673575",
                addressCountry: "IN",
              },
              geo: { "@type": "GeoCoordinates", latitude: 11.6707, longitude: 75.9553 },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
              ],
              starRating: { "@type": "Rating", ratingValue: "5" },
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Infinity Pool" },
                { "@type": "LocationFeatureSpecification", name: "Lake View" },
                { "@type": "LocationFeatureSpecification", name: "Restaurant" },
                { "@type": "LocationFeatureSpecification", name: "Adventure Activities" },
                { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi" },
                { "@type": "LocationFeatureSpecification", name: "Free Parking" },
              ],
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
