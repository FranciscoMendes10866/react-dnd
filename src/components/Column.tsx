import { FC, useMemo } from "react";
import { styled } from "@stitches/react";
import * as _ from "radash";

import { Droppable } from "./Droppable";
import { DraggableElement } from "./DraggableElement";

export interface IElement {
  id: string;
  content: string;
  stage: string;
}

interface IColumn {
  heading: string;
  elements: IElement[];
}

export const Column: FC<IColumn> = ({ heading, elements }) => {
  const columnIdentifier = useMemo(() => _.camal(heading), [heading]);

  return (
    <ColumnWrapper>
      <ColumnHeader variant={columnIdentifier as any}>{heading}</ColumnHeader>
      <Droppable id={columnIdentifier}>
        {elements.map((elm, elmIndex) => {
          if (elm.stage === columnIdentifier) {
            return (
              <DraggableElement
                key={`draggable-element-${elmIndex}-${columnIdentifier}`}
                identifier={elm.id}
                content={elm.content}
              />
            );
          }
        })}
        <DropPlaceholder />
      </Droppable>
    </ColumnWrapper>
  );
};

const ColumnWrapper = styled("div", {
  width: 320,
  padding: 10,
});

const DropPlaceholder = styled("div", {
  height: 35,
  backgroundColor: "transparent",
  marginTop: 15,
});

const ColumnHeader = styled("h3", {
  variants: {
    variant: {
      backlog: {
        color: "#F94892",
      },
      inProgress: {
        color: "#5800FF",
      },
      inReview: {
        color: "#0E3EDA",
      },
      done: {
        color: "#24A19C",
      },
    },
  },
});
