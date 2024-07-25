import { HowItWork } from "./Components/HowItWork";
import { ShowCase } from "./Components/Showcase";

export default function Home() {
  return (
    <main className="flex flex-col ">
      <ShowCase />
      <HowItWork />
    </main>
  );
}
