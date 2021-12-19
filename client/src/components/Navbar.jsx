import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/apiCalls";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {

  const user  = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const quantity = useSelector(state=>state.cart.quantity);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    logout(dispatch);
  };

  return (
    <Container style={{position: "sticky", top: "0", zIndex: "999", background: "beige"}}>
      <Wrapper>
        <Left>
          <Language>VI</Language>
          <SearchContainer>
            <Input placeholder="Tìm" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo> <Link className="link" to="/">LH CLOTHES SHOP.</Link> </Logo>
        </Center>
        <Right>
          {
            user.currentUser ? (
              <>
              <MenuItem>Xin chào <strong>{user.currentUser.username}</strong> </MenuItem>
              <MenuItem onClick={handleLogoutClick} disabled={isFetching} style={{color: "#b40404", fonWeight: "bold"}}> {user.currentUser && "Đăng xuất"} </MenuItem>
              </>
              
            ) : (
              <>
              <MenuItem> <Link className="link" to="/register"> Đăng ký </Link> </MenuItem>
              <MenuItem> <Link className="link" to="/login"> Đăng nhập </Link> </MenuItem>
              </>
            )
          }
          
          
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
