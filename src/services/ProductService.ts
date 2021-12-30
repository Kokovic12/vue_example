export default class ProductService {
  res: Response | undefined

  async getProductsSmall():Promise<any> {
    this.res = await fetch('/products-small.json')
    const d = await this.res.json()
    return d.data
  }

  async getProducts():Promise<any> {
    this.res = await fetch('/products.json')
    const d = await this.res.json()
    return d.data
  }

  async getProductsWithOrdersSmall():Promise<any> {
    this.res = await fetch('/products-orders-small.json')
    const d = await this.res.json()
    return d.data
  }
}