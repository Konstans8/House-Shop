import React from 'react'
import Item from '../Item/Item'
import s from './Items.module.scss'

export class Items extends React.Component{
  render() {
    return (
      <main className={s.main}>
        {this.props.items.map((el) => {
          return <Item onShowItem={this.props.onShowItem} item={el} key={el.id} onAdd={this.props.onAdd}/>
        })}
      </main>
    )
  }
}

export default Items
