import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rohan's Github page" },
    { name: "description", content: "Rohan's Github page" },
  ];
}

export default function Home() {
  return <Welcome />;
}
