(() => {
  type DataObj = {
    email: string
    password: string
    age: number
  }
  const dataObjList : DataObj[] = []
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
  dataObjList.push(obj1,obj2)
  console.log(dataObjList);

})()
