import React, { useState } from 'react';
// import './App.css';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import uuid from "uuid/v4";

const itemsFromBackend = [
  { id: uuid(), content: "First Task" },
  { id: uuid(), content: "Second Task" }
]
const columnsFromBackend = [
  {
    [uuid()]: {
      name: "Todo",
      items: [itemsFromBackend]
    }
  }
]
function App() {
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
      <DragDropContext onDropEnd={result => console.log(result)}>
        {Object.entries(columns).map(([id, column]) => {
          return (
            <Droppable droppableId={id}>
              {(provided, snapshot) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                      padding: 4,
                      width: 250,
                      minHeight: 500
                    }}>

                  </div>
                )
              }}
            </Droppable>
          )
        })}
      </DragDropContext>

    </div>
  );
}

export default App;
