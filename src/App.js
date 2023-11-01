import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import FindProducts from './components/find-products/FindProducts';

function App() {

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState(1);
  const [searchFor, setSearchFor] = useState()
  let prodMain;

  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(prod => {
        setProducts(prod)
      })

   

  }, [])


  let filterProduct;

  useEffect(() => {

    filterProduct = products;

    console.log(prodMain)

    if (searchFor) {
      filterProduct = filterProduct.filter((p) => p.title.toLowerCase().includes(searchFor.toLowerCase()))
    }

    setProducts(filterProduct)
  }, [searchFor])





  return (
    <div className="App">
      <Header getSearch={(e) => setSearch(0)} getSearchTerm={(e) => setSearchFor(e)} />
      {search ? <Home setProducts={products} /> : <FindProducts setProducts={products} />}

      <h1>Amazon Clone</h1>
    </div>
  );
}

export default App;
