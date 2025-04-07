import { useParams } from "react-router";
import { ReviewsContainer } from "../reviews/reviews-container";

export const HeadphoneReviewsPage = () => {
  const { headphoneId } = useParams();

  return <ReviewsContainer headphoneId={headphoneId} />;
};
