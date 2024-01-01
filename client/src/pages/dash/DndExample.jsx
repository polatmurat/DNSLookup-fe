import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const DndExample = () => {
  const data = {
    users: [
      {
        _id: "1",
        name: "ABC Doe",
        group_name: "Trial Name 1",
        status: "active",
        role: "admin",
      },
      {
        _id: "2",
        name: "DEF Doe",
        group_name: "Trial Name 2",
        status: "passive",
        role: "user",
      },
      {
        _id: "3",
        name: "GHI Doe",
        group_name: "Trial Name 3",
        status: "passive",
        role: "user",
      },
      {
        _id: "4",
        name: "JKL Doe",
        group_name: "Trial Name 4",
        status: "passive",
        role: "user",
      },
      // ... (other user objects)
    ],
  };

  return (
    <>

    </>
  );
};

export default DndExample;
