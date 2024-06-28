"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const UserPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">
          Welcome, {session.user.name}
        </h2>
        <section className="mb-6">
          <h3 className="text-xl font-semibold">Personal Information</h3>
          <p>Email: {session.user.email}</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Edit
          </button>
        </section>
        <section className="mb-6">
          <h3 className="text-xl font-semibold">Recent Activities</h3>
          {/* Replace with actual activities */}
          <ul>
            <li>Order #1234 placed on 2021-10-01</li>
            <li>Added item to wishlist</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default UserPage;
