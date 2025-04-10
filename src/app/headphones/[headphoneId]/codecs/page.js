import { CodecsContainer } from "@/components/codecs/codecs-container";
import { getCodecsByHeadphoneId } from "@/services/get-codecs-by-headphone-id";
import { Suspense } from "react";

const HeadphoneCodecsPage = async ({ params }) => {
  const { headphoneId } = await params;

  const codecsPromise = getCodecsByHeadphoneId(headphoneId);

  return (
    <Suspense fallback='loading...'>
      <CodecsContainer
        codecsPromise={codecsPromise}
        headphoneId={headphoneId}
      />
    </Suspense>
  );
};

export default HeadphoneCodecsPage;
