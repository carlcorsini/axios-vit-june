// wait till HTML loads then run this { } JavaScript
document.addEventListener('DOMContentLoaded', function(){
  axios.get('https://pokeapi.co/api/v2/pokemon/eevee').then(function(result){
  console.log(result.data.sprites.front_default)
  })

  

  
})
