import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import { Provider } from 'react-redux';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <main>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </main>
    </Provider>
  );
}

// class App extends React.Component {
//   state = {
//     text: '',
//     images: [],
//     total: 0
//   }
  
//   onInputSearch: Function = async (text: string) => {
//     const response: Data = await Unsplash.get('/search/photos', {
//       params: {
//         query: `cat ${text}`,
//         per_page: 15
//       }
//     });
    
//     this.setState({ text: text, images: response.data.results, total: response.data.total });
//   }
  
//   render() {
//     return (
//       <main>
//         <Logo />
//         <SearchBar />
//         <ImageList title={this.state.text} images={this.state.images} total={this.state.total} />
//       </main>
//     );
//   }
// }

export default App;
