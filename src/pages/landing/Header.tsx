import { MdOutlineTranslate } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import { FaBars } from "react-icons/fa6";
import { useEffect, useState } from "react";
// import { IoMoon } from "react-icons/io5";
// import { toggleMode } from "../../store/slice/mode";
// import { IoSunnyOutline } from "react-icons/io5";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../store/store";
import {
  Button,
  Divider,
  Drawer,
  Dropdown,
  Input,
  Menu,
  Space,
  Typography,
} from "antd";
import Container from "../../components/Container";

import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { clsx } from "clsx";
import { MdOutlineClose } from "react-icons/md";

const { Paragraph } = Typography;

function Header({ position }: { position: string }) {
  const [open, setOpen] = useState(false);
  // const mode = useSelector((store: RootState) => store.mode.mode);
  // const dispatch = useDispatch();
  const [eventSearch, setEventSerch] = useState(false);

  const { i18n: translate } = useTranslation();

  const showDrawer = () => {
    setOpen(true);
  };
  const onCloseDrawer = () => {
    setOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        // style={{
        //   backgroundColor: isScrolled ? "backdrop-blur-sm" : "transparent",
        //   transition: "background-color 0.3s ease",
        // }}
        className={` ${position} ${clsx({
          "bg-black bg-opacity-75 backdrop-blur-sm": isScrolled,
        })} top-0 z-50 w-full`}
      >
        <Container className={`flex justify-between items-center py-4`}>
          <div
            className={`flex items-center ${clsx({
              "hidden md:block ": eventSearch,
            })}`}
          >
            <Button
              onClick={showDrawer}
              size="large"
              className="p-1 me-2 !aspect-square bg-white  hover:scale-105 md:hidden"
            >
              <FaBars />
            </Button>
            <Typography.Title level={4} className="skew-x-12 !mb-0">
              Dji
            </Typography.Title>
          </div>
          {!eventSearch && (
            <>
              <div className="flex gap-3 ">
                <Button
                  onClick={() => setEventSerch(true)}
                  className="p-1 !aspect-square bg-white  hover:scale-105"
                  style={bgOpacity}
                  size="large"
                >
                  <FaSearch />
                </Button>
                <Dropdown
                  placement="bottomLeft"
                  trigger={["click"]}
                  overlay={
                    <Menu>
                      {languages.map((item) => (
                        <Menu.Item key={item.key}>
                          <Space onClick={() => i18n.changeLanguage(item.key)}>
                            <img src={item.flag.url} alt={item.flag.alt} />
                            <Paragraph>{item.title}</Paragraph>
                          </Space>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                >
                  <Button
                    style={bgOpacity}
                    size="large"
                    className=" hover:scale-105"
                  >
                    <MdOutlineTranslate />
                    {translate.language}
                  </Button>
                </Dropdown>
                {/* <Button
                  style={bgOpacity}
                  onClick={() => dispatch(toggleMode())}
                  className="p-1 aspect-square hover:scale-105"
                  size="large"
                >
                  {mode === "light" ? <IoSunnyOutline /> : <IoMoon />}
                </Button> */}
              </div>
            </>
          )}
          {eventSearch && (
            <>
              <div className="md:max-w-[500px] items-center w-full flex justify-between relative">
                <FaSearch className="text-2xl" />
                <Input placeholder="Search " variant="borderless"></Input>
                <Button
                  size="large"
                  className="p-1 aspect-square"
                  onClick={() => setEventSerch(false)}
                >
                  <MdOutlineClose />
                </Button>
                <div className="absolute w-full p-2 bg-white rounded-xl -bottom-16">
                  Dsadsadsa
                </div>
              </div>
              <div></div>
            </>
          )}
        </Container>

        <Drawer
          width={250}
          title={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Dji</span>
              <Button
                onClick={onCloseDrawer}
                type="text"
                style={{ color: "red" }}
              >
                <IoMdClose />
              </Button>
            </div>
          }
          placement={"left"}
          closable={false}
          onClose={onCloseDrawer}
          open={open}
          key={"left"}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
        <Divider className="!my-0" />
      </header>
      <div
        className={` md:hidden ${clsx({
          hidden: !eventSearch,
        })}absolute w-full h-full bg-white z-30`}
      ></div>
    </>
  );
}

const bgOpacity = {
  backgroundColor: "rgba(255, 255, 255, 0.2)",
};
const languages = [
  {
    title: "Uz",
    key: "uz",
    flag: {
      url: "https://cdn.commeta.uz/static/review/static/front/svg/flag/uz.svg",
      alt: "",
    },
  },
  {
    title: "Ru",
    key: "ru",
    flag: {
      url: "https://cdn.commeta.uz/static/review/static/front/svg/flag/uz.svg",
      alt: "",
    },
  },
  {
    title: "En",
    key: "en",
    flag: {
      url: "https://cdn.commeta.uz/static/review/static/front/svg/flag/uz.svg",
      alt: "",
    },
  },
];
export default Header;
