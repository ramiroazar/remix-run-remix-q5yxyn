import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import { PageTransition } from "./components/primitives/PageTransition";
import { AnimatedOutlet } from "./components/primitives/AnimatedOutlet";
import { useEffect } from "react";

const modules = import.meta.glob("../**/*.css.ts", { eager: true });

export function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log(modules);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <PageTransition>
      <AnimatedOutlet />
    </PageTransition>
  );
}
