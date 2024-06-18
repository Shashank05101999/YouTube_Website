import Head from "./Components/Head";
import "./App.css";
import MainContainer from "./Components/MainContainer";
import Body from "./Components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./Components/WatchPage";
function App() {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={AppRouter} />
      </div>
    </Provider>
  );
}

export default App;
