import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { register } from "../redux/apiCalls";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://mocah.org/uploads/posts/513927-background-bags.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Register = () => {

  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, email, password });
    (error === true) ? (console.log("a du")) : (window.location.replace("/login"));
  };

  return (
    <Container>
      <Wrapper>
        <Title>Đăng ký một tài khoản</Title>
        <Form>
          <Input placeholder="Tên" />
          <Input placeholder="Họ" />
          <Input placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          />
          <Input placeholder="email" 
          onChange={(e) => setEmail(e.target.value)}
          />
          <Input type="password" placeholder="mật khẩu" 
          onChange={(e) => setPassword(e.target.value)}
          />
          <Input type="password" placeholder="nhập lại mật khẩu" />
          <Agreement>
            Bằng cách tạo một tài khoản, tôi đồng ý với việc xử lý
            dữ liệu phù hợp với <b>Điều khoản dịch vụ</b>
          </Agreement>
          <Button onClick={handleClick} disabled={isFetching}>
            Đăng ký
          </Button>
          {error && <Error>Lỗi username hoặc password không đúng ...</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
