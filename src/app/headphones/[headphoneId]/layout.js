import { HeadphoneLayout } from "@/components/layouts/headphone-layout";
import { getHeadphones } from "@/services/get-headphones";

export const generateMetadata = async ({ params }) => {
  const { headphoneId } = await params;

  const headphones = await getHeadphones();

  const headphone = headphones.find(({ id }) => headphoneId === id);

  return {
    title: headphone.name,
  };
};

export default HeadphoneLayout;
