import { Divider, Typography } from "antd";
import Container from "../../components/Container";
const { Paragraph } = Typography;

function Footer() {
  return (
    <>
      <Divider className="!m-0" />
      <Container className="flex justify-between py-5">
        <Paragraph className="!mb-0">Dji</Paragraph>
        <Paragraph className="!mb-0">2024</Paragraph>
      </Container>
    </>
  );
}

export default Footer;
