import Button from "components/common/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/modules/authSlice";

import styled from "styled-components";

export default function Login() {
  const dispatch = useDispatch();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const initialState = {
    id: "",
    password: "",
    nickname: "",
  };
  const [formState, setFormState] = useState(initialState);
  const { id, password, nickname } = formState;
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (isLoginMode) {
      dispatch(login());
      alert("로그인 성공");
    } else {
      setIsLoginMode(true);
      setFormState(initialState);
      alert("회원가입 성공");
    }
  };

  return (
    <Container>
      <Form onSubmit={onSubmitHandler}>
        <Title>{isLoginMode ? "로그인" : "회원가입"}</Title>
        <Input
          name="id"
          value={id}
          placeholder="아이디 (4~10글자)"
          onChange={onChangeHandler}
          minLength={4}
          maxLength={10}
        />
        <Input
          name="password"
          value={password}
          placeholder="비밀번호 (4~15글자)"
          onChange={onChangeHandler}
          minLength={4}
          maxLength={15}
        />
        {!isLoginMode && (
          <Input
            name="nickname"
            value={nickname}
            placeholder="닉네임 (1~5글자)"
            onChange={onChangeHandler}
            minLength={1}
            maxLength={5}
          />
        )}
        <Button text={isLoginMode ? "로그인" : "회원가입"} size="large" />
        <ToggleText>
          <span onClick={() => setIsLoginMode((prev) => !prev)}>
            {isLoginMode ? "회원가입" : "로그인"}
          </span>
        </ToggleText>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  background-color: #8d7a57e4;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  background-color: white;
  width: 500px;
  border-radius: 0.8rem;
  padding: 1.5rem;
  font-size: 1rem;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: bolder;
  margin-bottom: 2rem;
  color: #8d7a57e4;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #8d7a57e4;
  width: 100%;
  display: block;
  margin-bottom: 1rem;
  padding: 1rem 0;
  outline: none;
`;

const ToggleText = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 1.5rem;
  & span {
    color: #8d7a57e4;
    font-weight: bolder;
    user-select: none;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;
