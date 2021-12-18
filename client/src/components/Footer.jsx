import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
  text-align: justify;
  line-height: 25px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LH CLOTHES SHOP.</Logo>
        <Desc>
        Shop Thời Trang Online Love Tree với phương châm "Đồng hành cùng phong cách thời trang của bạn" sẽ là nơi mua sắm an toàn và uy tín, bởi chúng tôi luôn đề cao tiêu chí mang đến cho quý khách những sản phẩm chất lượng nhất với giá cả luôn phải chăng. 
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Tag</Title>
        <List>
          <ListItem>Trang chủ</ListItem>
          <ListItem>Giỏ hàng</ListItem>
          <ListItem>Thời trang nam</ListItem>
          <ListItem>Thời trang nữ</ListItem>
          <ListItem>Phụ kiện</ListItem>
          <ListItem>Tài khoản</ListItem>
          <ListItem>Đơn hàng</ListItem>
          <ListItem>Danh sách yêu thích</ListItem>
          <ListItem>Mùa</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Liên Hệ</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Số 88, đường Cao Lỗ, tt Đông Anh, Đông Anh, Hà Nội
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +123 4566 789
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> linhmypham98@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
