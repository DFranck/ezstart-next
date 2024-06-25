import FeaturesList from "@/features/features-list";
import GetStarted from "@/features/get-started";
import Hero from "@/features/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesList variant="bg" />
      <GetStarted />
    </>
  );
}
