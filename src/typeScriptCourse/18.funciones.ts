(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

  function createProductJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }
  const product = createProductJson('botella', new Date(),5,'XL')
  console.log(product);
  const  createProductJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
    ) => {
      return {
        title,
        createdAt,
        stock,
        size,
      };
    }
    const product2 = createProductJsonV2('botella', new Date(),5)
    console.log(product2);


})();
