import { NavLink } from "react-router-dom";
import Container from "../../components/Container";
// import { useGetCategoriesQuery } from "../../store/slice-api/categories";
import { Button, Space } from "antd";

function Navbar() {
  //   const { data } = useGetCategoriesQuery(undefined);

  return (
    <Container className="my-5">
      <Space className="!overflow-x-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 10].map((item, index) => (
          <NavLink key={index} to={`category/${item}`}>
            <Button
              size="large"
              className={`shadow  ${
                location.pathname.includes(`category/${item}`)
                  ? "!bg-mainColor text-white"
                  : ""
              }`}
            >
              {item}
            </Button>
          </NavLink>
        ))}
      </Space>
    </Container>
  );
}

export default Navbar;
