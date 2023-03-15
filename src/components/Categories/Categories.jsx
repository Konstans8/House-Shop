import React, { Component } from 'react'
import s from './Categories.module.scss'

export class Categories extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'chairs',
                    name: 'Стулья'
                },
                {
                    key: 'tables',
                    name: 'Столы'
                },
                {
                    key: 'sofa',
                    name: 'Диваны'
                },
                {
                    key: 'closet',
                    name: 'Шкафы'
                }
            ]
        }
    }

  render() {
    return (
      <div className={s.categories}>
        {this.state.categories.map(el => {
            return <div className={s.item} onClick={() => this.props.chooseCategory(el.key)} key={el.key}>{el.name}</div>
        })}
      </div>
    )
  }
}

export default Categories