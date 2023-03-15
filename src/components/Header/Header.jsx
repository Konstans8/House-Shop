import React, { useState } from 'react'
import { MdShoppingCart } from 'react-icons/md'
import s from './Header.module.scss'
import Order from '../Order/Order'


const showOrders = (props) => {
let sum = 0
props.orders.forEach((el) => {
  sum +=Number.parseFloat(el.price)
})
  return (<div>
    {props.orders.map(el => {
      return <Order onDelete={props.onDelete} key={el.id} item={el}/>
    })}
    <p className={s.sum}>Сумма: {new Intl.NumberFormat().format(sum)}$</p>
  </div>)
}

const showNothing = () => {
  return (<div className={s.empty}>
    <h2>Товаров нет</h2>
  </div>)
}

export default function Header(props) {

  let [cardOpen, setCardOpen] = useState(false)

  return (
    <header className={s.header}>
        <div>
            <span className={s.logo}>Big House Shop</span>
            <ul className={s.nav}>
              <li>Про нас</li>
              <li>Контакты</li>
              <li>Кабинет</li>
            </ul>
            <MdShoppingCart onClick={() => setCardOpen(cardOpen = !cardOpen)} className={!cardOpen ? s.basked : s.active}/>
            
            {cardOpen && (
              <div className={s.shop_card}>
                {props.orders.length > 0 ? 
                  showOrders(props) : showNothing()}
              </div>
            )}
        </div>
        <div className={s.presentation}></div>
    </header>
  )
}
