import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addItemCart } from '../../redux/slices/cartSlice/cartSlice'
import { addItemFavorites } from '../../redux/slices/favoritesSlice/favoritesSlice'
import stylesFavoritesItem from './styles.module.scss'

export function FavoritesItem({
  pictures, name, discount, price, _id: id,
}) {
  const dispatch = useDispatch()
  const cart = useSelector((store) => store.cart)
  const addItemCartHandler = () => {
    dispatch(addItemCart(id))
  }
  const deleteFavoriteHandler = () => {
    dispatch(addItemFavorites(id))
  }
  const discountFunc = (p, discont) => Math.round((p - p * discont * 0.01) / 100) * 100
  return (
    <div>
      <div>
        <div className={stylesFavoritesItem.card_container}>
          <NavLink to={`../products/${id}`}>
            <div className={stylesFavoritesItem.imgWr}>
              <img className={stylesFavoritesItem.img} src={pictures} alt="" />
            </div>
          </NavLink>
          <div>
            <h4>{name}</h4>
            <h5 className={discount ? stylesFavoritesItem.discount_price : 'hidden'}>
              {price}
              ₽
            </h5>
            <h4 className={discount ? stylesFavoritesItem.redPrice : ''}>
              {discount ? discountFunc(price, discount) : price}
              {' '}
              ₽
            </h4>
          </div>
          <div className={stylesFavoritesItem.btn}>
            <button type="button" onClick={addItemCartHandler}>в корзину</button>
            <button onClick={deleteFavoriteHandler} type="button">удалить</button>
          </div>
          <div className={discount ? stylesFavoritesItem.discount : 'hidden'}>
            -
            {discount}
            %
          </div>
          <div className={cart.some((el) => el.id === id) ? stylesFavoritesItem.cartSticker : 'hidden'}>
            {cart.find((el) => el.id === id) ? cart.find((el) => el.id === id).counter : ''}
          </div>
        </div>
      </div>
    </div>
  )
}
