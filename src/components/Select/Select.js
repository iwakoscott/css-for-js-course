import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <ChevronDown
          style={{ "--size": 24 + "px" }}
          id="chevron-down"
          size={24}
          strokeWidth={1}
        />
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const PresentationalBit = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 52px;
`;

const NativeSelect = styled.select`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  &:focus + ${PresentationalBit} {
    outline: 2px solid ${COLORS.primary};
  }
`;

const ChevronDown = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 8px;
  height: var(--size);
  width: var(--size);
  margin: auto;
  pointer-events: none;
`;

export default Select;
