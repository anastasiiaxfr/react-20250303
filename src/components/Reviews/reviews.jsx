export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map((text) => (
        <span key={text}>{text}</span>
      ))}
      {reviews}
    </div>
  );
};
