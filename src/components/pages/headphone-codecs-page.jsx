import { useParams } from "react-router";
import { CodecsContainer } from "../codecs/codecs-container";

export const HeadphoneCodecsPage = () => {
  const { headphoneId } = useParams();

  return <CodecsContainer headphoneId={headphoneId} />;
};
