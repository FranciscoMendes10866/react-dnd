import "@fontsource/anek-telugu";
import { useCallback, useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { styled } from "@stitches/react";

import { Column, IElement } from "./components";

const COLUMNS = ["Backlog", "In Progress", "In Review", "Done"];
export const DEFAULT_COLUMN = "backlog";

export const App = () => {
  const [data, setData] = useState<IElement[]>([
    {
      id: "1",
      content: "Hello world 1",
      column: DEFAULT_COLUMN,
    },
    {
      id: "2",
      content: "Hello world 2",
      column: DEFAULT_COLUMN,
    },
  ]);

  const handleOnDragEnd = useCallback(
    ({ active, over }: DragEndEvent) => {
      const elementId = active.id;
      const deepCopy = [...data];

      const updatedState = deepCopy.map((elm): IElement => {
        if (elm.id === elementId) {
          const column = over?.id ? String(over.id) : elm.column;
          return { ...elm, column };
        }
        return elm;
      });

      setData(updatedState);
    },
    [data, setData]
  );

  return (
    <DndContext onDragEnd={handleOnDragEnd}>
      <MainWrapper>
        {COLUMNS.map((column, columnIndex) => (
          <Column
            key={`column-${columnIndex}`}
            heading={column}
            elements={data}
          />
        ))}
      </MainWrapper>
    </DndContext>
  );
};

const MainWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-evenly",
  backgroundColor: "#fff",
  paddingTop: 40,
  paddingBottom: 40,
  fontFamily: "Anek Telugu",
  height: "90vh",
});
