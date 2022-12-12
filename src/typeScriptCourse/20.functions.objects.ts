(() => {
  type DataObj = {
    email: string
    password: string
    age: number
  }
  const login = (data: DataObj): string => {
    const { email, password, age } = data
    return `email: ${email} password: ${password} age: ${age}`
  }
  const email = 'asd'
  const password = 'asd'
  const age = 32
  console.log(login({email,password,age}));

})()
