export default class ProductService {
  res: Response | undefined

  async getProductsSmall() {
    this.res = await fetch('demo/data/products-small.json')
    const d = await this.res.json()
    return d.data
  }

  async getProducts() {
    this.res = await fetch('demo/data/products.json')
    const d = await this.res.json()
    return d.data
  }

  async getProductsWithOrdersSmall() {
    this.res = await fetch('demo/data/products-orders-small.json')
    const d = await this.res.json()
    return d.data
  }
}