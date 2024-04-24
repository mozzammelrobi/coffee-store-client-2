import { useLoaderData } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffes] = useState(loadedCoffees);

  return (
    <>
      <Navbar></Navbar>
      <h1 className='text-5xl font-bold text-center text-purple-600'>Coffee Count: {coffees.length}</h1>
      <div className='grid md:grid-cols-3 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffees={coffees}
            setCoffes={setCoffes}
            coffee={coffee}></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
