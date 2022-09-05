import { FC, ReactNode, useMemo } from "react";
import { useDroppable } from "@dnd-kit/core";

interface IDroppable {
  id: string;
  children: ReactNode;
}

export const Droppable: FC<IDroppable> = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  const style = useMemo(
    () => ({
      opacity: isOver ? 0.5 : 1,
    }),
    [isOver]
  );

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};
