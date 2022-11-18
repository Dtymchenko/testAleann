import React from "react";
import "./App.css";
import { JobBoard } from "./Pages/JobBoard";
import { JobDetail } from "./Pages/JobDetail";
import Loader from "./Components/Loader";

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

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentItems, setCurrentItems] = React.useState([]);
  const itemsPerPage = 2;

  React.useEffect(() => {
    setIsLoading(true);
    console.log(isLoading);
    fetch(
      "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setItems(data);
        setCurrentItems(data.slice(0, itemsPerPage));
      });
    setIsLoading(false);
    console.log(isLoading);
  }, []);

  console.log(isLoading);

  const tempArr = [...new Array(itemsPerPage)];

  return (
    <div className="App max-w-[1920px] bg-[#E6E9F2]">
      {isLoading && tempArr.map((item, i) => <Loader key="i" />)}
      <JobBoard
        items={items}
        currentItems={currentItems}
        getTimePassed={getTimePassed}
        today={today}
        itemsPerPage={itemsPerPage}
        setCurrentItems={setCurrentItems}
      />
      {/* <JobDetail getTimePassed={getTimePassed} today={today} /> */}
    </div>
  );
}

export default App;
