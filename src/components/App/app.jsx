import { headphones } from "../../constants/mock";
import { Counter } from "../Counter/counter";
import { Layout } from "../Layout/layout";
import { Reviews } from "../Reviews/reviews";

export const App = ({ title }) => {
  if (!title) {
    return null;
  }

  return (
    <Layout headerName='headerName' sideBar={<div>sidebar</div>}>
      <h1>{title}</h1>
      {headphones.map(({ name, id, reviews, codecs }) => (
        <div key={id}>
          <h2>{name}</h2>
          {reviews.length ? <Reviews reviews={reviews} /> : null}
          <h3>Codecs</h3>
          {codecs.map((codec) => (
            <span key={codec}>{codec}</span>
          ))}
          <Counter />
        </div>
      ))}
    </Layout>
  );
};
