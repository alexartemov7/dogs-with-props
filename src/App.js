import './App.css';
import Dog from './components/Dog';

const dogs = [
  {name: 'Ryder', age: 4, breed: 'PR Street Dog' },
  {name: 'Goldy', age: 12, breed: 'Yellow Lab' },
  {name: 'Bailey', age: 4, breed: 'PR Street Dog' },
  
  
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dogs:</h1>
        {dogs.map(dog => <Dog age={dog.age} name={dog.name} breed={dog.breed} /> )}
      </header>
    </div>
  )
}

export default App;
