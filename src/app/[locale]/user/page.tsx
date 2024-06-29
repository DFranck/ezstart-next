"use client";
import ComingSoon from "@/components/layout/coming-soon.";
import Section from "@/components/layout/section";
import { useSession } from "next-auth/react";

const UserPage = () => {
  const { data: session } = useSession();

  return (
    <Section>
      <ComingSoon message="User page is under construction. Stay tuned for updates!" />
    </Section>
  );
};

export default UserPage;
