import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphone/slice";
import { Headphone } from "./headphone";

export const HeadphoneContainer = ({ id }) => {
  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  if (!headphone) {
    return null;
  }

  const { name, brand, reviews, codecs } = headphone;

  return (
    <Headphone
      name={name}
      brand={brand}
      reviewsIds={reviews}
      codecsIds={codecs}
      id={id}
    />
  );
};
