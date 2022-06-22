import { AppProvider } from "@/providers/app";
import Pages from "./pages";

function App() {
  return (
    <AppProvider>
      <Pages />
    </AppProvider>
  );
}

export default App;
