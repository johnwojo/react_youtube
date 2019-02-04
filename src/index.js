import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCQdnqWgV-qyuPPE6Nhgi1-3Jr-bPTXP7M';

const App = () => {
    return (
      <div>
        <SearchBar />
      </div>
    );
};


ReactDOM.render(<App />, document.querySelector('.container'));
