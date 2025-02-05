const fragrances = [
    {
      id: 1,
      Brand: "Dior",
      Model: "Homme Intense",
      Season: "Winter",
      Longevity: 4,
      Sillage: 3,
      Notes: ["Lavanda", "İris", "Kakao", "Dəri", "Vanil"]
    },
    {
      id: 2,
      Brand: "Jean Paul Gaultier",
      Model: "La Male Elixir",
      Season: "Autumn",
      Longevity: 4,
      Sillage: 4,
      Notes: ["Nanə", "Lavanda", "Vanil", "Tonka Fasulyəsi", "Kəhrəba"]
    },
    {
      id: 3,
      Brand: "Maison Margiela",
      Model: "Jazz Club",
      Season: "All Seasons",
      Longevity: 3,
      Sillage: 2,
      Notes: ["Rum", "Tütün Yarpağı", "Vanil", "Pikant Notlar", "Dəri"],
    //   getFragranceInfo: function(){
    //     console.log(`this is fragrances detail and id ${this.Id}`);
        
    //  }
    }
     
  ];
   
//   fragrance = fragrances.find(item => item.id === 3);

//   fragrance.getFragranceInfo()
// function displayInfo( id ){
//     console.log("loading...")
    
    // setTimeout(() => {
    //     console.clear();
    //     console.log(fragrances[id]);
        
    // }, 3000);
    
        
// }
// console.log(displayInfo(2));

// function listFragranceNotes( id ){
//     let fragrancedata =fragrances.find(frag=>frag.id===id)
//     if(fragrancedata){
//         console.log(`${fragrancedata.Brand} brendinin notlari:${fragrancedata.Notes}`);
//     }
//     else{
//         console.log("bele bir brend tapilmadi");
        
//     }
// }
// console.log(listFragranceNotes(1));

function processFragranceName( id, callback ) {
    let fragrancedata=fragrances.find(frag=>frag.id===id)
    let result = callback(fragrancedata.Brand)
    return result
}
function nameToUppercase(name){
    return name.toUpperCase()
}
console.log(processFragranceName(2,nameToUppercase));

