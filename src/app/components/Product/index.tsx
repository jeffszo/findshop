import { ProductType } from "@/types/ProductType"

type ProductProps = {
    product: ProductType;
};


export default function Product ({ product } : ProductProps) {
    return (
        <div className={'flex flex-col shadow-lg h-96 bg-zinc-900'}>

        </div>
    )
}