import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setMember } from "../redux/modules/memberSlice";

export default function Tabs() {
  const activeMember = useSelector((state) => state.member);
  const dispatch = useDispatch();

  const onActiveMember = (e) => {
    if (e.target === e.currentTarget) return;

    dispatch(setMember(e.target.textContent));
  };

  return (
    <TabsWrapper onClick={onActiveMember}>
      <Tap $activeMember={activeMember}>Kiin</Tap>
      <Tap $activeMember={activeMember}>Canyon</Tap>
      <Tap $activeMember={activeMember}>Chovy</Tap>
      <Tap $activeMember={activeMember}>Peyz</Tap>
      <Tap $activeMember={activeMember}>Lehends</Tap>
    </TabsWrapper>
  );
}

const TabsWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  gap: 1rem;
`;

const Tap = styled.li`
  cursor: pointer;
  background-color: white;
  font-size: 0.9rem;
  width: 5rem;
  text-align: center;
  padding: 0.8rem 0.5rem;
  border-radius: 0.5rem;

  ${(props) => {
    if (props.$activeMember === props.children) {
      return css`
        border: 6px solid #8d7a57e4;
        color: #8d7a57e4;
      `;
    }
    return css`
      border: 6px solid gray;
      color: gray;
    `;
  }}
`;
