import React from 'react';

import Logo from './Logo';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

import Unsplash from '../api/Unsplash'

interface Results {
  results: Array<Object>,
  total: number
}

interface Data {
  data: Results
}

class App extends React.Component {
  state = {
    text: '',
    images: [],
    total: 0
  }
  
  onInputSearch: Function = async (text: string) => {
    const response: Data = await Unsplash.get('/search/photos', {
      params: {
        query: `cat ${text}`,
        per_page: 15
      }
    });
    
    this.setState({ text: text, images: response.data.results, total: response.data.total })
  }
  
  render() {
    return (
      <main>
        <Logo />
        <SearchBar onInputSearch={this.onInputSearch} />
        <ImageList title={this.state.text} images={this.state.images} total={this.state.total} />
      </main>
    );
  }
}

export default App;
