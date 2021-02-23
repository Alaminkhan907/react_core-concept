import './App.css';

function App() {
  const products = [
    {name:'photoshop', price:99},
    {name:'Illustator',price:19.99},
    {name:'pdf reader',price:9.99}
    ]
  return (
    <div className="App">
      <header className="App-header">
        <ProductAll product={products[0]}></ProductAll>
      </header>
    </div>
  );
}

function ProductAll(props){
  console.log(props);
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor:'green',
    height:'200px',
    width:'400px',
    float:'left'
  }
  return(
    <div style={productStyle}>
      <h3>Name:{props.product.name}</h3>
      <h5>price:{props.product.price}</h5>
      <button>Buy now</button>
    </div>
  )
}

export default App;
