import Section from "@/components/layout/section";
import { GlareCard } from "@/components/ui/glare-card";
import { features } from "@/mocks/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturesList = ({ variant = "default" }: { variant?: string }) => {
  const variantClasses: Record<string, string> = {
    default: "w-[40px] h-[40px] mx-auto mb-4",
    bg: "w-[90%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] object-cover opacity-20",
  };
  return (
    <Section>
      <h2 className="text-2xl md:text-5xl font-bold text-center my-10">
        Features
      </h2>
      <p className="font-extralight text-base md:text-xl mb-20">
        List of technologies
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <li key={index} className="relative">
              <Link
                href={feature.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlareCard className="p-4 md:p-6 lg:p-8">
                  {typeof feature.image === "string" && feature.image !== "" ? (
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={64}
                      height={64}
                      className={variantClasses[variant]}
                    />
                  ) : (
                    feature.image && (
                      <feature.image className={variantClasses[variant]} />
                    )
                  )}
                  <h3 className="text-xl md:text-2xl text-center mb-2 font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base">{feature.description}</p>
                  <span className="text-sm text-blue-500 mt-4 inline-block">
                    Read Doc
                  </span>
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
