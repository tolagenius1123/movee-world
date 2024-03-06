import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import Movie from "./pages/movie/Movie.tsx";
import Trending from "./pages/trending/Trending.tsx";
import Popular from "./pages/popular/Popular.tsx";
import Series from "./pages/series/Series.tsx";
import Search from "./pages/search/Search.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/movie/:id",
		element: <Movie />,
	},

	{
		path: "/trending",
		element: <Trending />,
	},
	{
		path: "/popular",
		element: <Popular />,
	},
	{
		path: "/series",
		element: <Series />,
	},
	{
		path: "/search/:searchText",
		element: <Search />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
