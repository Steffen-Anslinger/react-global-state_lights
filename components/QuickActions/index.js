import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  lights,
  lightOn,
  allLightsOff,
  allLightsOn,
}) {
  return (
    <StyledQuickActions>
      <Button type="button" onClick={allLightsOff} disabled={lightOn === 0}>
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={allLightsOn}
        disabled={lightOn === lights.length}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
