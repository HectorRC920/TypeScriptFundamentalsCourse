import { DataObj, Sizes } from "./products.model."

export const dataObjList : DataObj[] = []

export const addProduct = (product: DataObj) => {
  dataObjList.push(product)
}
