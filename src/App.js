import "./App.css";
import { JobBoard } from "./Pages/JobBoard";
import { JobDetail } from "./Pages/JobDetail";

const today = new Date();

function App() {
  const getTimePassed = (date) => {
    date = new Date(date);
    const daysPassed = Math.floor((today - date) / 1000 / 60 / 60 / 24);
    if (
      Math.floor((today - date) / 1000 / 60 / 60 / 24) >= 365 &&
      Math.floor((today - date) / 1000 / 60 / 60 / 24) < 730
    ) {
      return "1 year";
    } else if (Math.floor((today - date) / 1000 / 60 / 60 / 24) >= 730) {
      return `${Math.floor(daysPassed / 365)} years`;
    } else if (
      Math.floor((today - date) / 1000 / 60 / 60 / 24) >= 30 &&
      Math.floor((today - date) / 1000 / 60 / 60 / 24) < 365
    ) {
      return `${Math.floor(daysPassed / 12)} month`;
    } else if (Math.floor((today - date) / 1000 / 60 / 60 / 24) < 30) {
      return `${daysPassed} days`;
    }
  };

  return (
    <div className="App max-w-[1920px] bg-[#E6E9F2]">
      <JobBoard getTimePassed={getTimePassed} today={today} />
      <JobDetail getTimePassed={getTimePassed} today={today} />
    </div>
  );
}

export default App;
