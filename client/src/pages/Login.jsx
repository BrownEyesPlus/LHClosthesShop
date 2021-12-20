import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://previews.123rf.com/images/stillab/stillab1709/stillab170900012/86097401-flat-lay-men-s-fashion-casual-outfits-and-accessories-on-white-wooden-background.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  // const user  = useSelector((state) => state.user);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    // console.log(user.currentUser);
  };
  return (
    <Container>
      <Wrapper style={{textAlign: "center"}}>
        <Title>ĐĂNG NHẬP</Title>
        <Form >
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button style={{margin: "auto", marginBottom: "5px"}} onClick={handleClick} disabled={isFetching}>
            Đăng nhập
          </Button>
          {error && <Error>Tài khoản và mật khẩu không đúng...</Error>}
          <Link style={{color: "red"}}>QUÊN MẬT KHẨU?</Link>
          <Link to="/register" style={{color: "green"}}>TẠO TÀI KHOẢN MỚI</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
