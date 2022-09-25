import { useState } from 'react';
import './App.scss';
import Form from './components/form';
import Header from './components/header';
import Navbar from './components/navbar';
import { AirlineProvider } from './config/context';
import { data } from './config/data';

function App() {
  const [page, setPage] = useState('')

  return (
    <AirlineProvider value={{data, page, setPage}}>
      <div className="App" >
        <Navbar />
        <Header />
        {
          page !== ''? <Form /> : ''
        }
      </div>
    </AirlineProvider>

  );
}

export default App;
