
import { game$ } from "./code";

export function start(gridSize:number, shipsNo:number, iterations:number){
  //must check for errors
  if(shipsNo > gridSize) {
    console.error("gridSize cannot be less than the number of ships");
    process.exit();
  }
  if(gridSize - shipsNo === 2) console.log("Warning: this algorithm works best when the grid Size is the same as the number of ships");
  game$(gridSize, shipsNo, iterations).subscribe(console.log);
}
