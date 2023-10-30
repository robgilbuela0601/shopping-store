import { useContext } from "react"
import Context from "../context/product.context"

function useStoreProduct() {
  const context = useContext(Context)
  if (!context) throw new Error("Context must be use inside provider")
  return context
}

export default useStoreProduct
