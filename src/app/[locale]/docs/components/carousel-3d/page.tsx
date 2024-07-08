import Carousel3D from "@/components/carousel-3d";
import Section from "@/components/layout/section";

const page = () => {
  return (
    <Section>
      <Carousel3D imgNum={10} />
    </Section>
  );
};

export default page;
