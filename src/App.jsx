import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCord from './component/CoffeeCord';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
    <h1 className='text-6xl text-purple-900 text-center'>Coffee Store: {coffees.length}</h1>
    <div className='grid md:grid-cols-2 gap-4'>
      {
        coffees.map(coffee => <CoffeeCord key={coffee._id}
       coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCord>)
      }
    </div>
    </>
  )
}

export default App
