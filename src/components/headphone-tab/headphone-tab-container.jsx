import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphone/slice";
import { Button } from "../button/button";

export const HeadphoneTabContainer = ({ id, onClick, disabled }) => {
  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  if (!headphone) {
    return null;
  }

  const { name } = headphone;

  return <Button key={id} title={name} onClick={onClick} disabled={disabled} />;
};
