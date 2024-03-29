import Header from "./components/Header";
import MainContent from "./components/MainContent";
import "./styles/index.css";

function App() {
  return (
    <div>
      <Header title="Skill React" />
      <div className="container">
        {/* <Sidebar /> */}
        <MainContent />
      </div>
    </div>
  );
}

export default App;
