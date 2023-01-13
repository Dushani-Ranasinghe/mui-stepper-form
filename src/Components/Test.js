import React from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

export default function Test() {
  return (
    <TestWrapper>
      Test
      <Button variant="outlined" className="TestBtn">
        Test button
      </Button>
    </TestWrapper>
  );
}

export const TestWrapper = styled.div`
  .TestBtn {
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
    border-radius: 11px;
    color:#fff; 
    :hover{
        border: none; 
    }
  }
`;
