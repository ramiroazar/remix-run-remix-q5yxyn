import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ButtonTwo } from "~/components/elements/ButtonTwo";

export const meta: MetaFunction = () => {
  return [
    { title: "Page Two" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Page Two</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <ButtonTwo to="/">Index</ButtonTwo>
        </li>
      </ul>
    </div>
  );
}
