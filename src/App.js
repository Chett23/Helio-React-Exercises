import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Helmet from "./Components/Helmet";
import { default as Todo } from "./Pages/Keylogger";
import Codelist from "./Pages/Codelist";
import Calculator from "./Pages/Calculator";
import Tacos from "./Pages/Tacos";
import NotFound from "./Pages/NotFound";
import Testing from "./Pages/Testing";

const App = () => {
	return (
		<div>
			<Helmet />
			<div>
				<ul
					style={{
						listStyle: "none",
						display: "inline-grid",
						gridTemplateColumns:
							"10px auto 100px 100px 100px 100px 100px 10px",
						width: "100%",
					}}
				>
					<h1
						style={{
							gridColumnStart: "2",
							gridColumnEnd: "span 1",
						}}
					>
						Helio Training React Exercises
					</h1>
					<li>
						<a
							href={"/"}
							style={{
								gridColumnStart: "3",
								gridColumnEnd: "span 1",
								textDecoration: "none",
								color: "black",
							}}
						>
							Home
						</a>
					</li>
					<li>
						<a
							href={"/todo"}
							style={{
								gridColumnStart: "4",
								gridColumnEnd: "span 1",
								textDecoration: "none",
								color: "black",
							}}
						>
							Todo
						</a>
					</li>
					<li>
						<a
							href={"/Calculator"}
							style={{
								gridColumnStart: "5",
								gridColumnEnd: "span 1",
								textDecoration: "none",
								color: "black",
							}}
						>
							Calculator
						</a>
					</li>
					<li>
						<a
							href={"/CodeList"}
							style={{
								gridColumnStart: "6",
								gridColumnEnd: "span 1",
								textDecoration: "none",
								color: "black",
							}}
						>
							Code List
						</a>
					</li>
					<li>
						<a
							href={"/Testing"}
							style={{
								gridColumnStart: "6",
								gridColumnEnd: "span 1",
								textDecoration: "none",
								color: "black",
							}}
						>
							Testing
						</a>
					</li>
				</ul>
			</div>
			<Outlet />
		</div>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				path: "/todo",
				element: <Todo />,
			},
			{
				path: "/calculator",
				element: <Calculator />,
			},
			{
				path: "/codelist",
				element: <Codelist />,
			},
			{
				path: "/testing",
				element: <Testing />,
			},
			{
				path: "/tacos",
				element: <Tacos />,
			},
		],
	},
]);

const RouterComponent = () => {
	return <RouterProvider router={router} />;
};

export default RouterComponent;
