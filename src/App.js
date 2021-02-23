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
