import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBJdmSkwaimpHDItJsxBvZgtb6e7kD_Tpw';

// Create a new component. This component should create some HTML.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
// Take this component's generated HTML and out it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
