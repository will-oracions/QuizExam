import { BrowserRouter } from "react-router-dom";
import DefaultLayout from "./@crema/components/AppLayout/DefaultLayout";
import "./styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout />;
    </BrowserRouter>
  );
  return <h1>hello world !!</h1>;
}

export default App;
