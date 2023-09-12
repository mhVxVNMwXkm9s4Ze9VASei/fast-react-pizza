import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Cart from "./features/cart/Cart";
import CreateOrder, {
	action as createOrderAction,
} from "./features/order/CreateOrder";
import Error from "./ui/Error";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/menu",
				element: <Menu />,
				errorElement: <Error />,
				loader: menuLoader,
			},
			{
				action: createOrderAction,
				path: "/order/new",
				element: <CreateOrder />,
			},
			{
				path: "/order/:orderId",
				element: <Order />,
				errorElement: <Error />,
				loader: orderLoader,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
