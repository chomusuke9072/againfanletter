import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { logout } from "../redux/modules/authSlice";
import styled from "styled-components";

export default function Layout() {
  const dispatch = useDispatch();
  return (
    <>
      <Header>
        <Link to="/">Home</Link>
        <div>
          <Link to="/profile">My Page</Link>
          <div>
            <Link onClick={() => dispatch(logout())}>Logout</Link>
          </div>
        </div>
      </Header>
      <Outlet />
    </>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 2rem;
  height: 2rem;
  background-color: #464646;
  user-select: none;
  & a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: #8d7a57e4;
    }
  }
  & div {
    display: flex;
    margin-left: 1.5rem;
  }
`;
