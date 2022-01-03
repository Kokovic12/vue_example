export default class ProductService {
  res: Response | undefined

  async getProducts():Promise<any> {
    this.res = await fetch('/products.json')
    const d = await this.res.json()
    return d.data
  }
}