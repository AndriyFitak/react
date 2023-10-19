const ProductsList = () => {
    const store = [
        {
            name: "TV",
            price: 100 
        },
        {
            name: "Iphone",
            price: 5000 
        },
        {
            name: "TV",
            price: 11028
        },
    ]
    const ProductCollection = store.map((el, index) => {
        return(
            <ProductItem
                key={index}
                name={el.name}
                price={el.price}
            />
        )
    }

    )
    return(
        <ul>
            {ProductCollection}
        </ul>
    )
}
export default ProductList