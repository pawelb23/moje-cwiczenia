var tablica = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

console.log('przed sortowaniem --- ' + tablica);

function sortowanieBabelkowe(tablica) {
  
  
  for(var index=0; index<tablica.length; index++) {
    
    for (var i=0; i<tablica.length-1; i++) {
   
      if (tablica[i+1] < tablica[i]) {
        temp = tablica[i];
        tablica[i] = tablica[i+1];
        tablica[i+1] = temp;
      }
    }
  }
  return tablica;
}


sortowanieBabelkowe(tablica);
console.log(sortowanieBabelkowe('po sortowaniu --- ' + tablica));