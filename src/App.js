import React, { useState } from "react";
import data from "./data.json";
import "./App.css";
import { CardList } from "./components/CardList/CardList";
import SearchBox from "./components/Search/SearchBox";
import Scroll from "./components/Scroll/Scroll";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const App = () => {
  const [searchfield, setSearchfield] = useState("");

  const onSearchChange = event => {
    setSearchfield(event.target.value);
  };
  const products = data.data;
  const filteredProduct = products.filter(product => {
    return product.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  return (
    <div className='App'>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList products={filteredProduct} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};
export default App;
