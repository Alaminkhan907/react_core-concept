import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const products = [
    {name:'photoshop', price:99},
    {name:'Illustator',price:19.99},
    {name:'pdf reader',price:9.99},
    {name:'after effect',price:109.99}
    ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            products.map(pd=><li>{pd.name}</li>)
          }
        </ul>
        {
        products.map(pd=> <Product product={pd}></Product>) 
        }
      </header>
    </div>
  );
}
function Counter(){
  const [count,setCount] = useState(10);
  return(
    <div>
      <h1>count:{count}</h1>
      <button onMouseMove={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(count +1 )}>Increase</button>
    </div>
  )
}
function Users(){
  const[users, setUsers]= useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])

  return(
    <div>
      <h3>Dynamic user :{users.length}</h3>
      <ul>
        {
          users.map(user =><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  //console.log(props);
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor:'green',
    height:'200px',
    width:'400px',
    float:'left'
  }
  const {name , price}=props.product;
  //console.log(name,price);
  return(
    <div style={productStyle}>
      <h3>Name:{name}</h3>
      <h5>price:{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

export default App;
