import { Headphone } from "./headphone";
import {
  useAddReviewMutation,
  useGetHeadphonesQuery,
} from "../../redux/services/api";

export const HeadphoneContainer = ({ id }) => {
  const { data, isLoading } = useGetHeadphonesQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id: headphoneId }) => headphoneId === id),
    }),
  });

  const { name, brand, reviews, codecs } = data || {};

  const [addReview, { isLoading: isAddReviewLoading }] = useAddReviewMutation();

  const handleSubmit = (review) => {
    addReview({ headphoneId: id, review });
  };

  if (isLoading) {
    return "...loading";
  }

  return (
    <Headphone
      name={name}
      brand={brand}
      reviewsIds={reviews}
      codecsIds={codecs}
      id={id}
      onSubmit={handleSubmit}
      isSubmitButtonDisabled={isAddReviewLoading}
    />
  );
};
