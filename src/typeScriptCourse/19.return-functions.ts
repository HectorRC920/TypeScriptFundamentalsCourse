(() => {
  const calcTotal = (price: number[] ): string => {
    return price.reduce((acc, act) => {
      return acc += act
    }).toString()
  }
  console.log(calcTotal([1,2,3]));
  const printTotal  = (prices: number[]): void => {
    const rta : number = calcularTotal(prices)
    console.log(rta);
  }
  printTotal([1,2,3])

  function calcularTotal(prices: number[]) : number {
    return prices.reduce((prev ,acc) => {
      return prev + acc
    })
  }
  console.log(calcularTotal([1,2,3]));

})()
