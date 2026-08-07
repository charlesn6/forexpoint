import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div id="top" className="text-zinc-100 bg-black p-4">
      <NavBar />
      <div className=''>
        <HomePage />
      </div>
    </div>
  );
};

export default App;
