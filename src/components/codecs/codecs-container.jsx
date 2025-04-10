import { Codecs } from "./codecs";
import { use } from "react";

export const CodecsContainer = ({ codecsPromise, headphoneId }) => {
  const codecs = use(codecsPromise);

  if (!codecs.length) {
    return null;
  }

  return <Codecs codecs={codecs} />;
};
