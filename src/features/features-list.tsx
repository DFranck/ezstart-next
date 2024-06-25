import Section from "@/components/layout/section";
import { GlareCard } from "@/components/ui/glare-card";
import { features } from "@/mocks/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const FeaturesList = () => {
  return (
    <Section>
      <h2 className="text-2xl md:text-5xl font-bold text-center my-10">
        Features
      </h2>
      <p className="font-extralight text-base md:text-xl mb-20">
        list des technonologies
      </p>
      <ul className="grid grid-cols-2 max-w-7xl gap-10 justify-center ">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <li key={index} className="relative ">
              <Link
                href={feature.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlareCard className="p-10 grid grid-cols-1">
                  {typeof feature.image === "string" && feature.image !== "" ? (
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={64}
                      height={64}
                      className="w-[90%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] object-cover opacity-20"
                    />
                  ) : (
                    feature.image && (
                      <feature.image className="w-[90%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] object-cover opacity-20" />
                    )
                  )}
                  <h3 className="text-2xl text-center mb-5 font-bold">
                    {feature.title}
                  </h3>
                  <p>{feature.description}</p>
                  <span className="self-end">Read Doc</span>
                </GlareCard>
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </Section>
  );
};

export default FeaturesList;
