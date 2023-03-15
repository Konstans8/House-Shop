import React, { Component } from 'react'
import s from './ShowFullItem.module.scss'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className={s.fullitem}>
        <div className={s.inside}>
            <span onClick={() => this.props.onShowItem(this.props.item)}>Закрыть x</span>
            <img className={s.image} src={this.props.item.img} alt="image" onClick={() => this.props.onShowItem(this.props.item)}/>
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price}$</b>
            <div className={s.add_to_card} onClick={() => this.props.onAdd(this.props.item)}>+</div>
        </div>
      </div>
    )
  }
}

export default ShowFullItem

