import { getUsers } from "@/services/get-users";
import { getReviewsByHeadphoneId } from "../../services/get-reviews-by-headphone-id";
import { ReviewsContainer } from "../reviews/reviews-container";
import { UsersContextProvider } from "../users-context/users-context";

export const HeadphoneReviewsPage = async ({ params }) => {
  const { headphoneId } = await params;

  const reviewsPromise = getReviewsByHeadphoneId(headphoneId);
  const usersPromise = getUsers();

  const [reviews, users] = await Promise.all([reviewsPromise, usersPromise]);

  return (
    <UsersContextProvider users={users}>
      <ReviewsContainer headphoneId={headphoneId} reviews={reviews} />
    </UsersContextProvider>
  );
};
