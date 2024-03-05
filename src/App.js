import logo from './logo.svg';
import './App.css';
import Product from './component/common/Product';
import Nav from './component/common/Nav';

function App() {
  //jsx
  const ps = [
    {
      name: "Iphone 15 pro max",
      price: 1200,
      qty: 1
   },
   {
      name: "Iphone 14 pro max",
      price: 1100,
      qty: 10
    },
    {
      name: "Iphone 13",
      price: 1000,
      qty: 0
   }
  ];
  const ns =[
    {
      name: "Home"
    },
    {
      name: "Category"
    },
    {
      name: "Product"
    },
    {
      name: "Cart"
    },
    {
      name: "Login"
    },
  ]
  return (
    <div className="App">
      <section>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
         <a class="navbar-brand" href="#">Navbar</a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
           <div class="navbar-nav">
            {//vong lap 
              ns.map(
                (e,i)=>{
                  return <Nav key={i} nav={e}/>
                }
              )
            }
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
           </div>
          </div>
        </div>
      </nav>
        
        <div className='container'>
          <div className='row'>
            {//vong lap 
              ps.map(
                (e,i)=>{
                  return <Product key={i} item={e}/>
                }
              )
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
