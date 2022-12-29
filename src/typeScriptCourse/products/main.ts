import { DataObj } from "./products.model."
import { addProduct,dataObjList } from "./products.service"
const obj1 : DataObj = {
  email: 'asdsa',
  password: 'asds',
  age : 13
}
const obj2 : DataObj = {
  email: 'dfdsf',
  password: 'dfdf',
  age : 24
}

addProduct(obj1)
console.log(dataObjList);
addProduct(obj2)
console.log(dataObjList);
