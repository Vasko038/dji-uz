import { Breadcrumb, Button, Pagination, Select } from "antd";
import Container from "../../components/Container";
import ProductCard from "../../components/landing/ProductCard";
import { FaFilter } from "react-icons/fa";
import "../../styles/landing_pages/main.css";
import { useGetProductsQuery } from "../../store/slice-api/products";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Main() {
  const { data } = useGetProductsQuery(undefined);
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {`${error}`}</div>;
  // }
  const { t } = useTranslation();

  console.log("products", data);
  return (
    <Container>
      <p className="block py-4 text-3xl font-medium text-center text-white bg-black">
        {t("welcome")}
      </p>
      <Breadcrumb
        items={[
          {
            title: "Home",
          },
          {
            title: <a href="">Application Center</a>,
          },
          {
            title: <a href="">Application List</a>,
          },
          {
            title: "An Application",
          },
        ]}
      />
      <div className="flex items-center justify-between py-5">
        <div>
          <Button size="large" className="p-1 aspect-square">
            <FaFilter />
          </Button>
          <Select size="large" className="!rounded-full" removeIcon />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <ProductCard key={item} />
        ))}
      </div>
      <Pagination
        className="py-5"
        align="center"
        defaultCurrent={1}
        total={50}
      />
    </Container>
  );
}

export default Main;

export function Index() {
  return <></>;
}
