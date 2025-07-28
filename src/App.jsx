import "./App.css";
import Header from "./components/Header";
import TravelJournal from "./components/TravelJournal";

function App() {
  return (
    <>
      <Header />
      <main className="mt-4">
        <TravelJournal />
      </main>
    </>
  );
}

export default App;
