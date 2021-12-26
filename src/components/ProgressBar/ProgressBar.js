/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const sizes = {
  large: {
    "--bar-height": 24 + "px",
    "--bar-padding": 4 + "px",
    "--bar-radius": 8 + "px",
  },
  medium: {
    "--bar-height": 12 + "px",
    "--bar-padding": 0 + "px",
    "--bar-radius": 4 + "px",
  },
  small: {
    "--bar-height": 8 + "px",
    "--bar-padding": 0 + "px",
    "--bar-radius": 4 + "px",
  },
};

const ProgressBar = ({ value, size }) => {
  const style = sizes[size];

  if (!style)
    throw new Error(
      `ProgressBar component called with invalid size - ${size}.`
    );

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      style={sizes[size]}
    >
      <BarWrapper>
        <Bar style={{ maxWidth: Number(value) + "%" }} value={value}>
          <VisuallyHidden>{value}%</VisuallyHidden>
        </Bar>
      </BarWrapper>
    </Wrapper>
  );
};

// Assuming value
const Wrapper = styled.div`
  width: 100%;
  max-width: 370px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--bar-radius);
  height: var(--bar-height);
  background-color: ${COLORS.transparentGray15};
  padding: var(--bar-padding);
`;

const BarWrapper = styled.div`
  /* Hide excess when progress is almost full. */
  overflow: hidden;
  border-radius: 4px;
  height: 100%;
`;

const Bar = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.primary};
  transition: max-width 800ms ease-in;
`;

export default ProgressBar;
