import React, { useEffect, useState } from "react";
import "./App.css";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setLoading(false);
      setTours(result);
      console.log(result);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (tours.length === 0) {
    return (
      <>
        <h1>No Tours Left</h1>
        <button onClick={() => fetchTours()}>Refresh</button>
      </>
    );
  }
  return (
    <main className="App">
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </main>
  );
}

export default App;
