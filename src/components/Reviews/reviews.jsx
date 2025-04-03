import { Review } from "../review/review";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      {reviews?.map(({ id, text, user }) => (
        <li key={id}>
          <Review text={text} userId={user} />
        </li>
      ))}
    </div>
  );
};
