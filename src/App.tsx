import BackgroundHeading from "./components/BackgroundHeading";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex justify-center items-center bg-[#f1d4b3] min-h-screen flex-col">
      <BackgroundHeading />
      <main className="relative w-[972px] h-[536px] bg-white rounded-[8px] shadow[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header />
        <TodoList />
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
