import { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useProductContext } from '../../contexts/ProductsContextProvider'
import styleUserInfo from './styles.module.scss'

export function UserAccount() {
  const [user, setUser] = useState({})
  const { api, token } = useProductContext()
  if (!token) return <Navigate to="/signin" />
  useEffect(() => {
    api
      .getUserInfo(token)
      .then(setUser)
  }, [])

  const generateInfo = (obj) => (
    <div className={styleUserInfo.wr}>
      <div>
        <img className={styleUserInfo.img} src={obj.avatar} alt="Avatar" />
      </div>
      <div>
        <h3>{`${obj.name}`}</h3>
        <h4>{`${obj.about}`}</h4>
        <h4>{`${obj.email}`}</h4>
        <Link to="edit">
          <button type="button">Изменить профиль</button>
        </Link>
      </div>
    </div>
  )
  return (
    <div className={styleUserInfo.card}>
      <h2>Личный кабинет</h2>
      <div>
        {
          generateInfo(user)
        }
      </div>
    </div>
  )
}
