export default class CarService {

  getCarsSmall() {
    return this.fetch.get('/cars.json').then(res => res.json()).then(d => d.data)
  }

  getCarsMedium() {
    return this.fetch.get('/cars-medium.json').then(res => res.json()).then(d => d.data)
  }

  getCarsLarge() {
    return this.fetch.get('/cars-large.json').then(res => res.json()).then(d => d.data)
  }
}



  

// export default class ProductService {
//   res: Response | undefined

//   async getProductsSmall() {
//     this.res = await fetch('demo/data/products-small.json')
//     const d = await this.res.json()
//     return d.data
//   }

//   async getProducts() {
//     this.res = await fetch('demo/data/products.json')
//     const d = await this.res.json()
//     return d.data
//   }

//   async getProductsWithOrdersSmall() {
//     this.res = await fetch('demo/data/products-orders-small.json')
//     const d = await this.res.json()
//     return d.data
//   }
// }