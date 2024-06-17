import React ,{useContext, useState}from 'react' 
// import product context
import { ProductContext } from '../Contexts/ProductContext'
import Product from '../components/Product';

const Home = () => {
    //get all products from product context
    const {products} = useContext(ProductContext);
    // console.log(products);
    //get only mens and womens clothing category
    const filteredProducts = products.filter(item =>{
        return item.category === "men's clothing" || item.category === "women's clothing"
    });
    // console.log(filteredProducts);
  return (
    <div>
        <section className='py-20'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid:cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                    {filteredProducts.map((product)=>{
                        return <Product product={product} key={product.id}/>
                        // <div className="w-full h-[300px] bg-pink-200"
                        // key={product.id}>{product.title}</div>
                    })}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home