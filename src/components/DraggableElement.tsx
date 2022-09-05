import { FC, useMemo } from "react";
import { styled } from "@stitches/react";

import { Draggable } from "./Draggable";

interface IDraggableElement {
  identifier: string;
  columnID: string;
  content: string;
}

export const DraggableElement: FC<IDraggableElement> = ({
  identifier,
  columnID,
  content,
}) => {
  const itemIdentifier = useMemo(() => identifier, [identifier]);
  const columnIndentifier = useMemo(() => columnID, [columnID]);

  return (
    <Draggable id={itemIdentifier}>
      <ElementWrapper variant={columnIndentifier as any}>
        <ElementText>{content}</ElementText>
      </ElementWrapper>
    </Draggable>
  );
};

const ElementWrapper = styled("div", {
  background: "#f6f6f6",
  borderRadius: 12,
  height: 120,
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 12,
  border: "solid",
  borderWidth: 4,
  borderTopWidth: 0,
  borderRightWidth: 0,
  borderBottomWidth: 0,
  variants: {
    variant: {
      backlog: {
        borderColor: "#F94892",
      },
      inProgress: {
        borderColor: "#5800FF",
      },
      inReview: {
        borderColor: "#ffb300",
      },
      done: {
        borderColor: "#24A19C",
      },
    },
  },
});

const ElementText = styled("h3", {
  fontSize: 18,
  fontWeight: 600,
});
