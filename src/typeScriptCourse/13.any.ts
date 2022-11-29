(() => {
  let myDynamicVar: any;
  let myDynamic: Array<number | [] | string>;
  myDynamic = ['la', []];


  myDynamicVar = 'Hila'
  const rta = (myDynamicVar as string).toLocaleLowerCase()

  myDynamicVar = 1212;
  const rte = (<number>myDynamicVar).toFixed()
})();
