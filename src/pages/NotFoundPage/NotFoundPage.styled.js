import styled from 'styled-components';
import {Link} from "react-router-dom";

export const NotFoundContainer = styled.div`
  font-family: 'Arial', sans-serif;
  text-align: center;
  margin: 340px;
  color: #333;
`;

export const NotFoundText = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const HomeLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;