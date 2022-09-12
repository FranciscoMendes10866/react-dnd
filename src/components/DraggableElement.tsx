import { FC, useMemo } from "react";
import { styled } from "@stitches/react";

import { Draggable } from "../primitives";

interface IDraggableElement {
  identifier: string;
  content: string;
}

export const DraggableElement: FC<IDraggableElement> = ({
  identifier,
  content,
}) => {
  const itemIdentifier = useMemo(() => identifier, [identifier]);

  return (
    <Draggable id={itemIdentifier}>
      <ElementWrapper>
        <ElementText>{content}</ElementText>
      </ElementWrapper>
    </Draggable>
  );
};

const ElementWrapper = styled("div", {
  background: "#f6f6f6",
  borderRadius: 10,
  height: 120,
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 12,
});

const ElementText = styled("h3", {
  fontSize: 18,
  fontWeight: 600,
});
