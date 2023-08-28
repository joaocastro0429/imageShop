

import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'


import Products from '../components/Products'

import BannerImage from '../../public/banner01.png'

async function getProducts() {
  const res = await fetch('http://localhost:3333/products')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.s
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  
  const productsData:any[]=await res.json() 
  productsData.forEach(products=>{
    products.image=`http://localhost:3333/uploads/${products.fileName}`
    products.price=new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(products.price) 

  })
  console.log(productsData)
 
  return productsData
}
 
export default async function Page() {  
  const data = await getProducts()
 
  return (
    <main>
           <Header />
          <Banner image={BannerImage} width={1140} height={325} />
           <Products />

           <Footer />
           
          </main>
  )
}



