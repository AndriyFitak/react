import Button from "../Button/Button"
import s from './ProductList.module.scss'
const ProductsItem = (props) => {
    return(
        <li classNames={s.list_item}>
            <p classNames={s.list_item_name}>{props.name}</p>
            <p classNames={s.list_item_price}>{props.price}</p>
            <Button theme="light" text="Buy"/>
        </li>
    )
}
export default ProductsItem