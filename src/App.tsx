import React from "react";
import axios from "axios";

import Header from "./components/Header";

import "./api/mockAxios";
import { Todo } from "./modules/todos/models/Todo";
import useTodos from "./modules/todos/hooks/useTodos";
import Sidebar from "./components/Sidebar";
// import CustomDatatable from "./components/CustomDatatable";

function App() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const { data } = useTodos();

  React.useEffect(() => {
    (async () => {
      await axios.post("/todos", { id: 997 });
      await axios.post("/todos", { id: 888 });

      await axios.delete("/todos/888");
      await axios.delete("/todos/1");

      const res = await axios.get("/todos");
      console.log("Todos: ", res.data);
      setTodos(res.data);
    })();
  }, []);

  // if (isLoading) {
  //   return <p>Loading todos....</p>;
  // }

  // if (error) {
  //   return <p>{error.message}</p>;
  // }

  console.log("DATA: ", data);

  return (
    <>
      <div id="app-layout" className="container">
        <div id="app-header">
          <Header />
        </div>

        <div id="app-sidebar">
          <Sidebar />
        </div>

        <main id="app-main">
          <h1>WizeTodoList</h1>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo.id}</li>
            ))}
          </ul>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea at
            distinctio, vel, quia ab iste optio dolores doloribus explicabo sed
            recusandae voluptate beatae excepturi rerum mollitia sequi velit
            blanditiis. Magnam.
          </p>

          {/* <CustomDatatable /> */}
        </main>
      </div>
    </>
  );
}

export default App;
