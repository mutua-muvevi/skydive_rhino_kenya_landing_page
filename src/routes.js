import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Landing from "./pages/landing";

const Router = () => {
	return useRoutes([
		{
			path: "/",
			element: <Landing />
		}
	]);
}

export default Router;