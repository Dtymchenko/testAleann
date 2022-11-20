import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { JobBoard } from "./Pages/JobBoard";
import { JobDetail } from "./Pages/JobDetail";
import Loader from "./Components/Loader";
import { NotFound } from "./Pages/NotFound";

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
  const [itemId, setItemId] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentItems, setCurrentItems] = React.useState([]);
  const itemsPerPage = 2;

  React.useEffect(() => {
    setIsLoading(true);
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
  }, []);

  const tempArr = [...new Array(itemsPerPage)];

  return (
    <div className="App max-w-[1920px] bg-[#E6E9F2]">
      <Routes>
        <Route
          index
          element={
            isLoading ? (
              tempArr.map((item, i) => <Loader key={i} />)
            ) : (
              <JobBoard
                items={items}
                currentItems={currentItems}
                getTimePassed={getTimePassed}
                today={today}
                itemsPerPage={itemsPerPage}
                setCurrentItems={setCurrentItems}
                setItemId={setItemId}
              />
            )
          }
        />
        <Route
          path="/detail"
          element={
            <JobDetail
              getTimePassed={getTimePassed}
              today={today}
              items={items}
              itemId={itemId}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
