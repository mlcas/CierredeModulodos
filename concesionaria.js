

var autosQueImporte=require('./autos');
var personasQueImporte = require('./personas');
let concesionaria = {
   autos:autosQueImporte , // la pripiedad autos tiene guardado autosQueImporte, por eso ongo autos.length
   buscarAuto: function(patente){
       for (let i=0;i<this.autos.length;i++) {      
             if(patente==this.autos[i].patente){ // aca i en la primera vuelta vale 0 y entras al objeto que te hablita a poner el .patente
               return this.autos[i];//retorna un objeto x q en la fila 27 si se cumple la condicion te devuelve el objeto que esta en la posicion 0
              }
         }
        //  return null; 
        //  let busqueda = this.autos.foreach(elemento => elemento.patente == patente);
        //  if(busqueda != null) {
        //      return busqueda;
        //  } else {
        //      return null;
        //  }
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
          if(this.autos[i].vendido== true) {
         lista.push(this.autos[i].precio)          
        }
      }
      return lista
  },
  totalDeVentas: function(){
    let ventas = this.listaDeVentas();
    if(ventas.length == 0){ // aca es para el caso en que en lista de ventas tengas todos los autos sin vender
//  ventas.length te devulve un numero, la cantidad de caracteres del array

      return 0
    } else {
      let ventasTotales = ventas.reduce(function(total,producto){
        return total + producto.precio
      })
      return ventasTotales
       
    }
  },

    puedeComprar: function(auto,persona){
      let compras = this.autos
    if (this.autos.capacidadDePagoTotal > this.autos.precio && this.autos.capaciadadDePagoEnCuotas > (this.autos.precio/this.autos.cuotas)){
          return true
    }  else {
      false
    }
    

    
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
console.log(concesionaria.listaDeVentas());
console.log('------------------------- Total de Ventas---------------------');
console.log(concesionaria.totalDeVentas())
console.log('------------------------- Puede Comprar---------------------');
console.log(concesionaria.puedeComprar("ford","juan"))



    
        
       
       
   









    