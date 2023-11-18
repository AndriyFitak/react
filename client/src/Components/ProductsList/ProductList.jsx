import ProductsItem from "./ProductItem";
import s from './ProductList.module.scss'

const ProductList = () => {
    return (
        <ul classNames={s.list}>
            <ProductsItem
                name="TV"
                price="3000"
            />
            <ProductsItem
                name="Phone"
                price="1000"
            />
        </ul>
    )
}

export default ProductList


 

// const ProductsList = () => {
//     const store = [
//         {
//             name: "TV",
//             price: 100 
//         },
//         {
//             name: "Iphone",
//             price: 5000 
//         },
//         {
//             name: "TV",
//             price: 11028
//         },
//     ]
//     const ProductCollection = store.map((el, index) => {
//         return(
//             <ProductItem
//                 key={index}
//                 name={el.name}
//                 price={el.price}
//             />
//         )
//     }

//     )
//     return(
//         <ul>
//             {ProductCollection}
//         </ul>
//     )
// }
// export default ProductList