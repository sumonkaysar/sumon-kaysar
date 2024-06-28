import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeProvider";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div data-theme={"light"}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
