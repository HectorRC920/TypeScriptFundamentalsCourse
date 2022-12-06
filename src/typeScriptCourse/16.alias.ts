(( )=> {
  type  UserID = string | number | boolean
  type TSizes =  "SM" | "ME" | "LA" | "2XL";
  function greeting(userId: UserID, sizes: TSizes) {
    if(typeof userId == 'number'){
      console.log(`User id es numbero`);
    }else if(typeof userId == 'boolean'){
      console.log(`User id es bool`);
    } else {
      console.log(`User id es string`);
    }
  }
  greeting('ola','2XL')
  greeting(2,'LA')
  greeting(true,'LA')

  //LiteralTypes
})()