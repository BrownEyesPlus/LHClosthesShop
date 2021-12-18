import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Siêu ưu đãi trong tháng 12 này lên đến <strong style={{color: "rgb(228 192 188)", fontSize: "20px", padding: "0px 3px"}}> 1 triệu đồng</strong> !</Container>;
};

export default Announcement;
