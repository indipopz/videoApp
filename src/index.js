import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import jsonloader from 'jsonloader';

import SearchBar from './components/search_bar';

const config =  new jsonloader('./../config.json');

YTSearch({key: 'AIzaSyDj8utu0QZ6G8V64_Ft6wBduHy5kLsRJoU', term: 'Iron Man'}, function(data){
  console.log(data);
});
const App = () => (<div>
    <SearchBar />
  </div>);


ReactDOM.render(<App/>, document.querySelector('.container'));
