import { AppProvider } from "@/providers";
import Pages from "./routes";

function App() {
  return (
    <AppProvider>
      <Pages />
    </AppProvider>
  );
}

export default App;
