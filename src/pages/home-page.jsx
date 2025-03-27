import { Link } from "react-router";
import { Modal } from "../components/modal/modal";

export const HomePage = () => {
  return (
    <div>
      <div>home page</div>
      <Link to='/headphones'>to headphones</Link>
      <Modal>
        <div>modal</div>
      </Modal>
    </div>
  );
};
