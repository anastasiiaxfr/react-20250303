export const getReviewsByHeadphoneId = async (headphoneId) => {
  const result = await fetch(
    `http://localhost:3001/api/reviews?productId=${headphoneId}`,
    {
      next: {
        tags: ["getReviewsByHeadphoneId"],
      },
    }
  );

  return result.json();
};
