import { ConfigProvider as AntProvider } from "antd";
import Layout from "./components/Layout";
import { Provider as StoreProvider } from "react-redux";
import store from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "antd/es/layout/layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: ":category",
        element: <Header />,
        children: [{ path: ":product", element: <></> }],
      },
    ],
  },
]);

function App() {
  // const mode = useSelector((store: RootState) => store.mode.mode);
  // useEffect(() => {
  //   const rootElement = document.querySelector("body");
  //   if (rootElement) {
  //     if (mode === "light") {
  //       rootElement.style.backgroundColor = "#f9f9f9";
  //     } else {
  //       rootElement.style.backgroundColor = "#191919";
  //     }
  //   }
  // }, [mode]);
  return (
    <StoreProvider store={store}>
      <AntProvider
      // theme={{
      //   algorithm:
      //     mode === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm,
      // }}
      >
        <RouterProvider router={routes}></RouterProvider>
      </AntProvider>
    </StoreProvider>
  );
}

export default App;
