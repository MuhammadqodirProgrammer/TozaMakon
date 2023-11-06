import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage/HomePage';
import { About } from './pages/About/About';
import { OrdersPage } from './pages/Orders/Orders';
import { SingleOrderPage } from './pages/SingleOrder/SingleOrder';
import { BlogPage } from './pages/Blog/Blog';
import { Error404 } from './pages/Error404/Error404';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/about',
				element: <About />,
				errorElement: <h2>ERROR!!!</h2>,
			},
			{
				path: '/orders',
				element: <OrdersPage />,
				errorElement: <h2>ERROR!!!</h2>,
			},
			{
				path: '/singleOrder',
				element: <SingleOrderPage />,
				errorElement: <h2>ERROR!!!</h2>,
			},
			{
				path: '/blog',
				element: <BlogPage />,
				errorElement: <h2>ERROR!!!</h2>,
			},
			{
				path: '/*',
				element: <Error404 />,
				errorElement: <h2>ERROR!!!</h2>,
			},
		],
	},
]);
