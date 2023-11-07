import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

const Header = styled.div`
	background-color: lightgrey;
	max-height: 50px;
	border: 1px solid red;
`;

const Nav = () => (
	<Helmet bodyAttributes={{ style: "background-color : lightgrey" }}>
		<title>React Exercises</title>
	</Helmet>
);

export default Nav;
