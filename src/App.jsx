
import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Categories from './components/Categories/Categories'
import Items from './components/Items/Items'
import ShowFullItem from './components/ShowFuulItem/ShowFullItem'
import './App.scss'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'https://ak1.ostkcdn.com/images/products/is/images/direct/b6d680c6538edc92631510c99026033b51bd902b/Modern-Accent-Chairs%2C-Upholstered-Living-Room-Chairs-Linen-Arm-Chair-Accent-Chairs-for-Living-Room.jpg',
          desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'https://global-uploads.webflow.com/5e93308b2af0f955a9a2e796/62a09add28e5142851256fcd_dining-table-sizes.jpg',
          desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          category: 'tables',
          price: '149.99'
        },
        {
          id: 3,
          title: 'Кресло',
          img: 'http://cdn.home-designing.com/wp-content/uploads/2021/08/oversized-chair-for-living-room-grey-tufted-upholstery-mid-century-modern-legs-luxury-furniture-for-foyer-designer-chairs-on-amazon-600x600.jpg',
          desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          category: 'chairs',
          price: '89.99'
        },
        {
          id: 4,
          title: 'Диван',
          img: 'http://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2017/06/Top-10-Sofas-to-Improve-your-Interior-Design-7.jpg',
          desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          category: 'sofa',
          price: '49.99'
        },
        {
          id: 5,
          title: 'Стул белый',
          img: 'https://foter.com/photos/419/circle-chair-for-living-room.jpeg',
          desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          category: 'chairs',
          price: '39.99'
        },
        {
          id: 6,
          title: 'Шкаф',
          img: 'https://images.hindustantimes.com/img/2022/07/18/1600x900/pexels-max-vakhtbovych-6585745_1658144107680_1658144138158_1658144138158.jpg',
          desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          category: 'closet',
          price: '210.99'
        },
        {
          id: 7,
          title: 'Кровать',
          img: 'https://www.spectruminteriors.co.in/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-28-at-13.14.57.jpeg',
          desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          category: 'sofa',
          price: '329.99'
        },
        {
          id: 8,
          title: 'Диван',
          img: 'https://www.theopenplan.com/uploads/1/0/3/6/10364252/screenshot-2021-04-29-at-14-52-20_orig.png',
          desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          category: 'sofa',
          price: '279.99'
        },
        {
          id: 9,
          title: 'Шкаф',
          img: 'https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2022-1664872805-f0ijv/wr-1664873436-cbkRF/final-render-3-1666766575-WMPM2.jpg',
          desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          category: 'closet',
          price: '159.99'
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  

  render() {
    return (
      <>
        <div className='wrapper'>
          <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
          <Categories chooseCategory={this.chooseCategory}/>
          <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
          {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
          <Footer />
        </div>
      </>
    )
  }
  
  onShowItem(item) {
  this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }
  
  chooseCategory(category) {
  
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
  
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }
  
  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
  
  addToOrder(item) {
  let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id) {
        isInArray = true
      }
    })
    if(!isInArray) {
      this.setState({orders: [...this.state.orders, item]})
    }
  }
}

export default App
