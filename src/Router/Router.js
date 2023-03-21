import Error from "../Component/Error/Error";
import Shoping from "../Component/Pages/Shoping/Shoping";

const {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} = require("react-router-dom");
const { default: Home } = require("../Component/Pages/Home/Home");
const { default: RootLayout } = require("../Component/RootLayout/RootLayout");

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<Error />}>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shoping />} />
      </Route>
    </Route>
  )
);
