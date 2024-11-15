import { Footer, Header } from "./components";
import { TaskDashboard } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <TaskDashboard />
      <Footer />
    </div>
  );
}

export default App;
