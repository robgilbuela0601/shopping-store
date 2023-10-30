import { createContext, useMemo, useState } from "react"
/* Interfaces */
import { ICategory, IItem } from "../global/interfaces/items.interfaces"
/* Products */
import items from "../data/items.json"
/* Utilities */
import capitalize from "../global/utils/Capitalize"

interface IProductProviderProps {
  children: React.ReactElement | React.ReactElement[]
  action?: string
}
const Context = createContext<ICategory | null>(null)

export function ProductProvider({ children, action }: IProductProviderProps) {
  const [category, setCategory] = useState<string>("All")
  const [products, setProducts] = useState<IItem[]>(
    items.sort((a, b): number => a.unitPrice - b.unitPrice),
  )
  const [search, setSearch] = useState<string>("")
  const [sort, setSort] = useState<string>("lowest")

  const value = useMemo(() => {
    const onChangeCategory = (category: string) => {
      setProducts(items)
      setCategory(capitalize(category))
      setProducts((currProd) => {
        return currProd
          .sort((a, b): number => {
            try {
              switch (sort) {
                case "lowest":
                  return a.unitPrice - b.unitPrice
                case "highest":
                  return b.unitPrice - a.unitPrice
                case "a-z":
                  return a.productName.localeCompare(b.productName)
                case "z-a":
                  return b.productName.localeCompare(a.productName)
                default:
                  return 0
              }
            } catch (err) {
              throw err
            }
          })
          .filter((item) => {
            return category !== "All"
              ? item.category === category.toLocaleLowerCase()
              : item
          })
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.productName.toLowerCase().includes(search.toLowerCase()) ||
                search.toLowerCase() === ""
              ? item
              : item.description.toLowerCase().includes(search.toLowerCase())
          })
      })
    }
    const searchProductBy = (nameOrDescription: string) => {
      setProducts(items)
      setSearch(nameOrDescription)
      setProducts((currProd) => {
        return [
          ...currProd
            .sort((a, b): number => {
              try {
                switch (sort) {
                  case "lowest":
                    return a.unitPrice - b.unitPrice
                  case "highest":
                    return b.unitPrice - a.unitPrice
                  case "a-z":
                    return a.productName.localeCompare(b.productName)
                  case "z-a":
                    return b.productName.localeCompare(a.productName)
                  default:
                    return 0
                }
              } catch (err) {
                throw err
              }
            })
            .filter((item) => {
              return category !== "All"
                ? item.category === category.toLocaleLowerCase()
                : item
            })
            .filter((item) => {
              return nameOrDescription.toLowerCase() === ""
                ? item
                : item.productName
                    .toLowerCase()
                    .includes(nameOrDescription.toLowerCase()) ||
                  nameOrDescription.toLowerCase() === ""
                ? item
                : item.description
                    .toLowerCase()
                    .includes(nameOrDescription.toLowerCase())
            }),
        ]
      })
    }
    const sortProductBy = (priceOrName: string) => {
      setProducts(items)
      setSort(priceOrName)
      setProducts((currProd) => {
        return [
          ...currProd
            .sort((a, b): number => {
              try {
                switch (priceOrName) {
                  case "lowest":
                    return a.unitPrice - b.unitPrice
                  case "highest":
                    return b.unitPrice - a.unitPrice
                  case "a-z":
                    return a.productName.localeCompare(b.productName)
                  case "z-a":
                    return b.productName.localeCompare(a.productName)
                  default:
                    return 0
                }
              } catch (err) {
                throw err
              }
            })
            .filter((item) => {
              return category !== "All"
                ? item.category === category.toLocaleLowerCase()
                : item
            })
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.productName
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  search.toLowerCase() === ""
                ? item
                : item.description.toLowerCase().includes(search.toLowerCase())
            }),
        ]
      })
    }
    const getProductItemQty = () => {
      return products
        .sort((a, b): number => {
          try {
            switch (sort) {
              case "lowest":
                return a.unitPrice - b.unitPrice
              case "highest":
                return b.unitPrice - a.unitPrice
              case "a-z":
                return a.productName.localeCompare(b.productName)
              case "z-a":
                return b.productName.localeCompare(a.productName)
              default:
                return 0
            }
          } catch (err) {
            throw err
          }
        })
        .filter((item) => {
          return category !== "All"
            ? item.category === category.toLocaleLowerCase()
            : item
        })
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.productName.toLowerCase().includes(search.toLowerCase()) ||
              search.toLowerCase() === ""
            ? item
            : item.description.toLowerCase().includes(search.toLowerCase())
        }).length
    }

    return {
      category,
      products,
      searchProductBy,
      sortProductBy,
      getProductItemQty,
      onChangeCategory,
    }
  }, [category, products, search, sort])
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Context
