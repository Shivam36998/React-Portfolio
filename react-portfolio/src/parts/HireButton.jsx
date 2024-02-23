/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Full = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 1.2rem;
  background-color: var(--primary-color);
  border-radius: 4px;
  padding: 0.91rem 2rem;
  border: 3px solid var(--dark-primary);
  cursor: pointer;
  font-weight: 900;
  color: var(--darktest);
  @media screen and (max-width: 600px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;

const HireButton = () => {
  const navigate = useNavigate();
  return (
    <Full
      className=""
      onClick={() => navigate("/contact")}>
      Contact Me
    </Full>
  );
};

export default HireButton;
