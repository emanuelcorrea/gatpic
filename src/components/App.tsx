import React from 'react';

import Logo from './Logo';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

import Unsplash from '../api/Unsplash'

interface Results {
  results: Array<Object>
}

interface Data {
  data: Results
}

class App extends React.Component {
  state = { images: [] }
  
  onInputSearch: Function = async (text: string) => {
    const response: Data = await Unsplash.get('/search/photos', {
      params: {
        query: text,
        per_page: 15
      }
    });
    
    this.setState({ images: response.data.results })
  }
  
  render() {
    return (
      <main>
        <Logo />
        <SearchBar onInputSearch={this.onInputSearch} />
        <ImageList images={this.state.images} />
      </main>
    );
  }
}

export default App;
