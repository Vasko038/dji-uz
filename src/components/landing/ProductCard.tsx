import { Card, Tag, Typography } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
const { Title } = Typography;
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "../../styles/productCard.css";

const images = [
  "https://dji-rus.ru/images/thumbnails/600/600/detailed/358/e25ddc930d47ba88d4ba06712eb1b497.webp?t=1729068605",
  "image2.jpg",
  "image3.jpg",
  "https://dji-rus.ru/images/thumbnails/600/600/detailed/358/e25ddc930d47ba88d4ba06712eb1b497.webp?t=1729068605",
];
function ProductCard() {
  return (
    <Card hoverable className="shadow rounded-2xl p-3 lg:!p-4  ">
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        style={{ width: "100%", height: "200px" }} // Swiper uchun o'lcham
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Title level={5}>Квадрокоптер DJI Neo (без пульта)</Title>
      <Tag bordered color="green">
        В наличии
      </Tag>
    </Card>
  );
}
export default ProductCard;
