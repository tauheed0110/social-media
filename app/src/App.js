import React from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Page/Home';
import Post from './component/Post';
import Detail from './Page/Detail';

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/item/:id' element={<Detail />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
