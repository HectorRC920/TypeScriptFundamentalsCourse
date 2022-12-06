(() => {
  function hi(name: string | null) {
    let hello: string= 'Hola  '
    if(name){
      hello += name.toLowerCase()
    } else
    hello + 'nadie'
  }
  hi('oaks')
  function hi2(name: string | null) {
    let hello: string= 'Hola  '
    hello += name?.toLowerCase() || 'era nullo'
    console.log(hello);
    
  }
  hi2(null)
})()