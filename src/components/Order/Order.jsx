import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'
import s from './Order.module.scss'

export class Order extends Component {
  render() {
    return (
      <div className={s.item}>
        <img className={s.image} src={this.props.item.img} />
        <div className={s.cont}>
            <h2>{this.props.item.title}</h2>
            <b>{this.props.item.price}$</b>
        </div>
        <div className={s.deleteCont}>
            <FaTrash className={s.delete} onClick={() => this.props.onDelete(this.props.item.id)}/>
        </div>
      </div>
    )
  }
}

export default Order