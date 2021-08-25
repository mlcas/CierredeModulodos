let autos = require('./autos');

// console.log(autos);

// let autos=require('./autos')
// let concesionaria = {
//    autos: autos,
//    buscarAuto: function(patente){
//        for (i=0;i<autos.length;i++) {
//              if(patente==autos[i].patente){
//                return autos[i];
//              }else{
//                return null;
//              }
//          }
//     }
// }
// concesionaria.buscarAuto('APL123'); // da error, autos ya fue declarado. 
// console.log(concesionaria.autos)

var autosQueImporte=require('./autos')
let concesionaria = {
   autos:autosQueImporte , // la pripiedad autos tiene guardado autosQueImporte, por eso ongo autos.length
   buscarAuto: function(patente){
       for (let i=0;i<autos.length;i++) {      
             if(patente==autos[i].patente){ // aca i en la primera vuelta vale 0 y entras al objeto que te hablita a poner el .patente
               return autos[i];//retorna un objeto x q en la fila 27 si se cumple la condicion te devuelve el objeto que esta en la posicion 0
              }
         }
         return null; 
    },
    venderAutos:function(patente) {
      let autoEncontrado= this.buscarAuto(patente)   
       autoEncontrado.vendido = true;
       return autoEncontrado /// aca me genera el resultado
    },
    autosParaLaVenta:function() {
      let autosSinVender = this.autos.filter(elemento => elemento.vendido == false);  
         return autosSinVender;      
    },       
  autosNuevos: function() {
    let autoCeroKm= this.autosParaLaVenta() // aca estas guardado el auto que no esta vendido y le pasas ese array a la var filter
    filtrado = autoCeroKm.filter((element) => element.km < 100)       
         return filtrado
       },
       listaDeVentas:function() {
        let lista = [];
        for (let i = 0; i < this.autos.length; i++) {
          if(autos[i].vendido== true) {
         lista.push(autos[i].precio)          
        }
      }
      return lista
  },
  totalDeVentas: function(){
    let ventas = this.listaDeVentas();
    let ventasTotales = ventas.reduce(function(total,producto){
      return total + producto.precio
    })
    return ventasTotales
     
  }
}
console.log('--------------------------Buscar Auto---------------------');

  console.log(concesionaria.buscarAuto("APL123")); // aca solo imprimis por consola el erray on el objeto que cumplio con la condicion de la fila 26
  console.log('-------------------------Vender Auto---------------------');
  console.log(concesionaria.venderAutos("APL123")); // aca llamas a la funcion vender autos qque te modifico la propiedad vendido, paso de un false a un true
  console.log('-------------------------- Autos Para La Venta---------------------');
console.log(concesionaria.autosParaLaVenta()); // aca te devuelve el auto que no se vendio
console.log('------------------------- Auto Nuevos---------------------');
console.log(concesionaria.autosNuevos())
console.log('------------------------- Lista de Ventas---------------------');
console.log(concesionaria.listaDeVentas);
console.log('------------------------- Total de Ventas---------------------');
console.log(concesionaria.totalDeVentas())




    
        
       
       
   









    