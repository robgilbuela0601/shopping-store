export interface IItem {
  id: string
  productName: string
  description: string
  unitPrice: number
  category: string
  imageUrl: string
  toggleButton?: boolean
}

export interface ICategory {
  category: string
  products: IItem[]
  searchProductBy: (nameOrDescription: string) => void
  sortProductBy: (priceOrName: string) => void
  getProductItemQty: () => number
  onChangeCategory: (category: string) => void
}
