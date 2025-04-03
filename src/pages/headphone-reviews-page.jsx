import { useParams } from "react-router";
import { Reviews } from "../components/reviews/reviews";
import {
  useGetReviewsByHeadphoneIdQuery,
  useGetUsersQuery,
} from "../redux/services/api";

export const HeadphoneReviewsPage = () => {
  const { headphoneId } = useParams();

  const { isLoading: isUsersLoading, isError: isUsersError } =
    useGetUsersQuery();
  const {
    isFetching: isReviewsLoading,
    isError: isReviewsError,
    data,
  } = useGetReviewsByHeadphoneIdQuery(headphoneId);

  const isLoading = isUsersLoading || isReviewsLoading;

  const isError = isUsersError || isReviewsError;

  if (isLoading) {
    return "loading...";
  }

  if (isError) {
    return "ERROR";
  }

  return data?.length ? <Reviews reviews={data} /> : <div>empty review</div>;
};
