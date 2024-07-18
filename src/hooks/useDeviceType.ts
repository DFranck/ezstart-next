// src/hooks/useDeviceType.ts
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const deviceType = context.req.headers["x-device-type"] || "desktop";

  return {
    props: {
      deviceType,
    },
  };
};
