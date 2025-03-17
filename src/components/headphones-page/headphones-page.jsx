import {
  useState,
  useMemo,
  useCallback,
  useLayoutEffect,
  useRef,
  useEffect,
  memo,
} from "react";
import { headphones } from "../../constants/mock";
import { Headphone } from "../headphone/headphone";
import { Tab } from "../tab/tab";

export const HeadphonesPage = ({ title }) => {
  const [activeHeadphoneId, setActiveHeadphoneId] = useState(headphones[0].id);

  const activeHeadphone = headphones.find(({ id }) => id === activeHeadphoneId);

  const tabs = useMemo(
    () => headphones.map(({ id, name }) => ({ id, name })),
    []
  );

  const handleSetActiveHeadphoneId = (id) => {
    if (activeHeadphoneId === id) {
      return;
    }

    setActiveHeadphoneId(id);
  };

  const rootRef = useRef(null);
  console.log(rootRef);

  const headphoneRef = useRef(null);
  console.log(headphoneRef.current);

  useEffect(() => {
    console.log(rootRef.current.offsetWidth);
  }, []);

  return (
    <div ref={rootRef}>
      <h1>{title}</h1>

      {headphones.map(({ name, id }) => (
        <Tab
          key={id}
          title={name}
          onClick={() => handleSetActiveHeadphoneId(id)}
          isActive={id === activeHeadphoneId}
        />
      ))}

      {activeHeadphone && (
        <Headphone
          name={activeHeadphone.name}
          brand={activeHeadphone.brand}
          reviews={activeHeadphone.reviews}
          codecs={activeHeadphone.codecs}
          key={activeHeadphone.id}
          ref={headphoneRef}
        />
      )}
    </div>
  );
};
