(() => {
  let mixed: (number | [] | Object)[] = []
  mixed.push('1',[])
  let userId : string | number

  function greeting(myText: string | number) {
    if(typeof myText === 'string'){
      return `${myText.toUpperCase()} es strinf`
    } else{
      return `${myText} es number`
    }
  }
  console.log(greeting('ola'));
})()