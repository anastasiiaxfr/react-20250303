import { useReducer, useState } from "react";

const DEFAULT_FROM_VALUE = {
  name: "",
  text: "",
  address: "",
  nameError: "",
};

const SET_NAME_ACTION = "SET_NAME_ACTION";
const SET_ADDRESS_ACTION = "SET_ADDRESS_ACTION";
const SET_TEXT_ACTION = "SET_TEXT_ACTION";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME_ACTION:
      ValidityState(name);
      return { ...DEFAULT_FROM_VALUE, name: payload };
    case SET_ADDRESS_ACTION:
      return { ...state, address: payload };
    case SET_TEXT_ACTION:
      return { ...state, text: payload };
    default:
      return state;
  }
};

export const ReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FROM_VALUE);

  const { name, address, text, nameError } = form;

  const setName = (name) => dispatch({ type: SET_NAME_ACTION, payload: name });
  const setAddress = (address) =>
    dispatch({ type: SET_ADDRESS_ACTION, payload: address });
  const setText = (text) => dispatch({ type: SET_TEXT_ACTION, payload: text });

  return (
    <div>
      <div>
        <span>name</span>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        {nameError && <div>error</div>}
      </div>
      <div>
        <span>address</span>
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <span>text</span>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};
