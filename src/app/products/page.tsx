import { ProductType } from "@/types/ProductType"
import Product from "../components/Product";


async function getProducts(){

    const res = await fetch ('https://fakestoreapi.com/products')

    if (!res.ok) {
        throw new Error ('A busca deu erro')
    }

    return res.json()
}

export default async function Products(){
    const products = await getProducts();
    console.log(products)

    https://fakestoreapi.com/products

    return (
        <div className={'max-w-7xl mx-auto pt-56 px-8 xl:px-0'}>
            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6'}>
            {products.map((product: ProductType) => (
                <Product key={product.id}></Product>
            ))}
            </div>
        </div>
    )
}