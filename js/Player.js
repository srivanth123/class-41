class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank=null
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
// fetching rank from database 
  getCarAtEnd(){

    var playerRank=database.ref('carAtEnd')
    playerRank.on("value",(data)=>{

    this.rank=data.val()
    })

  }
  //updating function to update car at end in database. static is a class level function
  // which hold info for all objects
  static updateCarAtEnd(rank){

    database.ref('/').update({
      carAtEnd:rank
    });

  }
}
