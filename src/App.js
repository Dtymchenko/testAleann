import "./App.css";
import { JobBoard } from "./Pages/JobBoard";
import { JobDetail } from "./Pages/JobDetail";

function App() {
  return (
    <div className="App max-w-[1920px] bg-[#E6E9F2] px-[260px] py-[29px]">
      <JobBoard />
      <JobDetail />
    </div>
  );
}

export default App;
