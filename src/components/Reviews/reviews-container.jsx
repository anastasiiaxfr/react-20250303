"use client";

import { addReviewAction } from "@/actions/add-review-action";
import { Reviews } from "./reviews";
import { useCallback, useOptimistic } from "react";

export const ReviewsContainer = ({ reviews, headphoneId }) => {
  const [optimisticReview, addOptimisicReview] = useOptimistic(
    reviews,
    (currentState, opmisticValue) => [
      ...currentState,
      { ...opmisticValue, id: "creating" },
    ]
  );

  const handleAddReview = useCallback(
    async (state, formData) => {
      if (formData === null) {
        return {
          text: "",
          rating: 5,
        };
      }

      const text = formData.get("text");
      const rating = formData.get("rating");

      const review = { text, rating, user: "asdasdoi29tu384f" };

      addOptimisicReview(review);

      await addReviewAction({ headphoneId, review });

      return {
        text: "default",
        rating: 5,
      };
    },
    [addOptimisicReview, headphoneId]
  );

  if (!optimisticReview.length) {
    return null;
  }

  return (
    <Reviews reviews={optimisticReview} submitFormAction={handleAddReview} />
  );
};
