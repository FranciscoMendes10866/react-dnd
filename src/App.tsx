import "@fontsource/anek-telugu";
import { useCallback, useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { styled } from "@stitches/react";

import { Column, IElement } from "./components";

const COLUMNS = ["Backlog", "In Progress", "In Review", "Done"];
export const DEFAULT_STAGE = "backlog";

export const App = () => {
  const [data, setData] = useState<IElement[]>([
    {
      id: "1",
      content: "Hello world 1",
      stage: DEFAULT_STAGE,
    },
    {
      id: "2",
      content: "Hello world 2",
      stage: DEFAULT_STAGE,
    },
  ]);

  const handleOnDragEnd = useCallback(
    ({ active, over }: DragEndEvent) => {
      const elementId = active.id;
      const deepCopy = [...data];

      const updatedState = deepCopy.map((elm): IElement => {
        if (elm.id === elementId) {
          const stage = over?.id ? String(over.id) : elm.stage;
          return { ...elm, stage };
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
