import { useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import Button from "./common/Button";
import { useDispatch, useSelector } from "react-redux";
import { addLetter } from "../redux/modules/letterSlice";

export default function AddForm() {
  const dispath = useDispatch();
  const { avatar, nickname } = useSelector((state) => state.auth);
  const [content, setContent] = useState("");
  const [member, setMember] = useState("Kiin");

  const onAddLetter = (e) => {
    e.preventDefault();
    if (!nickname || !content) return alert("닉네임과 내용은 필수값입니다.");

    const newLetter = {
      id: uuid(),
      nickname,
      content,
      avatar,
      writedTo: member,
      createdAt: new Date().toString(),
    };

    dispath(addLetter(newLetter));
    setContent("");
  };
  return (
    <Form onSubmit={onAddLetter}>
      <InputWrapper>
        <label>닉네임:</label>
        <p>{nickname}</p>
      </InputWrapper>
      <InputWrapper>
        <label>내용:</label>
        <textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
          placeholder="최대 100글자까지 작성할 수 있습니다."
          maxLength={100}
        />
      </InputWrapper>
      <SelectWrapper>
        <label>받는 선수:</label>
        <select onChange={(e) => setMember(e.target.value)}>
          <option>Kiin</option>
          <option>Canyon</option>
          <option>Chovy</option>
          <option>Peyz</option>
          <option>Lehends</option>
        </select>
      </SelectWrapper>
      <Button text="팬레터 등록" />
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  box-sizing: border-box;
  margin-top: 2rem;
  width: 31rem;
  background-color: #8d7a57e4;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1.5rem 0;
  gap: 1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & label {
    width: 5rem;
  }
  & input,
  textarea {
    width: 100%;
    padding: 0.5rem;
  }
  & textarea {
    resize: none;
    height: 5rem;
  }
  & p {
    color: #464646;
    width: 90%;
  }
`;

const SelectWrapper = styled(InputWrapper)`
  justify-content: flex-start;
`;
