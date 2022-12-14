import { Link } from 'react-router-dom'
import { useProductContext } from '../../contexts/ProductsContextProvider'

import stylesAccount from './styles.module.scss'

export function Authorization() {
  const { token } = useProductContext()
  if (token) {
    return (
      <div className={stylesAccount.wr}>
        <Link to="/cart">
          <div className={stylesAccount.wrLink}>
            <button type="button">Корзина</button>
          </div>
        </Link>
        <Link to="/useraccount">
          <div className={stylesAccount.wrLink}>
            <button type="button">Аккаунт</button>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div className={stylesAccount.wr}>
      <Link to="/signup">
        <div className={stylesAccount.wrLink}>

          <button type="button">Регистрация</button>
        </div>
      </Link>

      <Link to="signin" type="button">
        <div className={stylesAccount.wrLink}>

          <button type="button">Войти</button>
        </div>
      </Link>
      <Link to="/useraccount">
        <div className={stylesAccount.wrLink}>

          <button type="button">Аккаунт</button>
        </div>
      </Link>
    </div>
  )
}
