import ComingSoon from "@/components/layout/coming-soon.";
import Section from "@/components/layout/section";
import { auth } from "@/lib/auth";
import UpdateUserForm from "@/providers/auth/update-user-form";

const UserPage = async () => {
  const session = await auth();
  if (!session?.user?.name) {
    console.log(session);
    return (
      <Section>
        <h2 className="text-2xl font-bold mb-10">Welcome!</h2>
        <UpdateUserForm />
      </Section>
    );
  }

  return (
    <Section>
      <ComingSoon message="User page is under construction. Stay tuned for updates!" />
    </Section>
  );
};

export default UserPage;
