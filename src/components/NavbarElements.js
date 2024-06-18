import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const NavLink = styled(Link)`

color: black;

&.active {
}

&:hover {
    color: lightgrey;
}

`