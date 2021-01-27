import React, { useState } from "react";
import { useDispatch } from "react-redux";
import messagesOperations from "../../redux/operations/messagesOperations";
import styled from "styled-components";

const Form = styled.form`
  display: block;
  margin-top: 0;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 25px;

  width: 100%;
  background: #fff;
  border: 2px solid #212121;
  border-radius: 10px;

  @media (min-width: 480px) {
    width: 360px;
  }
`;
const Label = styled.label`
  display: block;
  margin-top: 0;
  margin-bottom: 15px;

  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`;
const LabelSpan = styled.span`
  display: block;
  margin-left: 15px;
`;
const Input = styled.input`
  display: block;
  margin: 0 auto;
  padding-left: 10px;
  width: 100%;
  height: 40px;
  background: #fff;
  border: 1px solid #b3b3b3;
  border-radius: 10px;
`;
const TextArea = styled.textarea`
  display: block;
  margin: 0 auto;
  resize: none;
  padding: 5px 10px;
  width: 100%;
  height: 180px;
  background: #fff;
  border: 1px solid #b3b3b3;
  border-radius: 10px;
`;
const Button = styled.button`
  display: block;
  margin: 0 auto;

  padding: 11px 20px;

  width: 100%;
  min-height: 44px;

  border-radius: 10px;
  border: 2px solid transparent;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.22;

  text-align: center;
  text-transform: uppercase;

  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-image 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  background-image: linear-gradient(47.73deg, #6368e5 15.48%, #b884f3 81.25%);
  background-position: center;
  background-size: calc(100% + 4px);

  color: #ffffff;

  @media (min-width: 480px) {
    min-width: 240px;
    padding: 11px 78px;
  }

  &:hover,
  &:focus {
    border: 2px solid #6368e5;
    color: #6368e5;
    background-image: none;
    background-color: #ffffff;
  }
`;

const formInitialState = {
  name: "",
  text: "",
};

const MessageForm = () => {
  const dispatch = useDispatch();
  const [{ name, text }, setForm] = useState({ ...formInitialState });

  const handlerInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!name || !text) {
      return;
    }
    const date = new Date();
    var options = {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    dispatch(
      messagesOperations.addMessage(
        name,
        text,
        date.toLocaleString("ru", options)
      )
    );
    setForm({ ...formInitialState });
  };

  const handlerInputSubmit = (e) => {
    if (e.keyCode === 13) {
      handlerSubmit(e);
    }
  };

  return (
    <Form autoComplete="on" onSubmit={handlerSubmit}>
      <Label>
        <LabelSpan>Name</LabelSpan>
        <Input
          type="text"
          name="name"
          value={name}
          autoFocus
          maxLength="15"
          required
          onChange={handlerInputChange}
        />
      </Label>
      <Label>
        <LabelSpan>Message</LabelSpan>
        <TextArea
          type="text"
          name="text"
          value={text}
          required
          onChange={handlerInputChange}
          onKeyDown={handlerInputSubmit}
        />
      </Label>
      <Button type="submit">Send message</Button>
    </Form>
  );
};

export default MessageForm;
