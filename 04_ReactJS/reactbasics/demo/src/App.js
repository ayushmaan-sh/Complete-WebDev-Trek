import './App.css';
import Mobile from './Mobile';
import mobile from './mobile.json'


function App() {
  return (
    <div class="App">
      {mobile.map((element)=>{
        return <Mobile image={element.image} mobileName={element.mobileName} price={element.price} />
      })}
    </div>
  );
}

export default App;
