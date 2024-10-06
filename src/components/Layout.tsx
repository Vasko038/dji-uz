import { Button, Drawer, Typography } from "antd";
import { MdOutlineTranslate } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
function Layout() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <header className="container flex items-center justify-between px-4 py-4 mx-auto border-b-2">
        <div className="flex">
          <Button
            onClick={showDrawer}
            className="p-1 border-none aspect-square"
          >
            <FaBars />
          </Button>
          <Typography.Title level={4} className="skew-x-12 !mb-0">
            Dji
          </Typography.Title>
        </div>

        <div className="flex gap-3 ">
          <Button className="p-1 aspect-square hover:scale-105" size="large">
            <FaSearch />
          </Button>
          <Button size="large" className=" hover:scale-105">
            <MdOutlineTranslate /> Uz
          </Button>
          <Button className="p-1 aspect-square hover:scale-105" size="large">
            <FaRegSun />
          </Button>
        </div>
      </header>
      <nav className="container px-4 mx-auto">dasda adasd asdasd adas</nav>
      <main></main>
      <footer>
        <div className="container px-4 py-5 mx-auto">dasas</div>
      </footer>
      <div></div>
      <Drawer
        title="Basic Drawer"
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        key={"left"}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}

export default Layout;
