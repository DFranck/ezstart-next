import Carousel3D from "@/components/carousel-3d";
import FeaturesList from "@/components/features-list";
import GetStarted from "@/components/get-started";
import Hero from "@/components/hero";

export default function home() {
  return (
    <>
      <Hero />
      <Carousel3D />
      <FeaturesList />
      <GetStarted />
    </>
  );
}
