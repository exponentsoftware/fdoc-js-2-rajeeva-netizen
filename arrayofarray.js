
const countries = [
  'ALBANIA',
  'BOLIVIA',
  'CANADA',
  'DENMARK',
  'ETHIOPIA',
  'FINLAND',
  'GERMANY',
  'HUNGARY',
  'IRELAND',
  'JAPAN',
  'KENYA'
]

const createArrayOfArrays=(countries)=>{
let Arr1 = []
let Arr2 = []
countries.forEach(item=>{
  // console.log(item)
  // console.log(item.slice(0,3))
  // console.log(item.length)
 
   Arr1.push(item)
   Arr1.push(item.slice(0,3))
   Arr1.push(item.length)
   Arr2.push(Arr1)
   Arr1=[]
 
  

})

console.log("arr2",Arr2)
}

createArrayOfArrays(countries)