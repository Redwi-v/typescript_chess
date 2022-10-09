import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Bishop } from "./figures/Bishop";
import { King } from "./figures/King";
import { Knight } from "./figures/Knight";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";
import { Rook } from "./figures/Rook";

export class Board  {
   cells: Cell[][] = []


   public initSels () {
    for (let i = 0; i < 8; i++) {
      const row : Cell[] = []
      for(let j = 0 ; j < 8 ; j++) {
        if((j + i ) % 2 !== 0) {
          row.push(new Cell(this, j, i , Colors.black, null)) // black
        }else {
          row.push(new Cell(this, j, i , Colors.white, null)) // white
        }

      }
      this.cells.push(row)
    }    
   }


   public getCell (x: number, y:number) {
    return this.cells[y][x]
   }

   public addPawns () {
    for(let i= 0 ; i < 8 ; i++) {
      new Pawn (Colors.black, this.getCell(i , 1))
      new Pawn (Colors.white, this.getCell( i, 6))
    }
   }

   public addQueens () {
    new Queen(Colors.white, this.getCell(3,7))
    new Queen(Colors.black, this.getCell(3, 0))
   }

   public addRooks() {
    new Rook(Colors.black, this.getCell(0,0))
    new Rook(Colors.black, this.getCell(7,0))
    new Rook(Colors.white, this.getCell(7,7))
    new Rook(Colors.white, this.getCell(0,7))

   }

   public addKnights() {
    new Knight(Colors.black, this.getCell(1,0)) 
    new Knight(Colors.black, this.getCell(6,0)) 
    new Knight(Colors.white, this.getCell(1,7)) 
    new Knight(Colors.white, this.getCell(6,7)) 

   }
   public addBishop () {
    new Bishop(Colors.white, this.getCell(2,7))
    new Bishop(Colors.white, this.getCell(5,7))
    new Bishop(Colors.black, this.getCell(5,0))
    new Bishop(Colors.black, this.getCell(2,0))
   }

   public addKings () {
    new King(Colors.white, this.getCell(4,7))
    new King(Colors.black, this.getCell(4,0))
   }

   public addFigures () {
    this.addPawns()
    this.addQueens()
    this.addRooks()
    this.addKnights()
    this.addBishop()
    this.addKings()
   }
}