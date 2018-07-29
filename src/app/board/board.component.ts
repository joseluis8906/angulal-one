import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  status: string = 'Jugar';
  squares: string[] = Array(9).fill(null);
  xIsNext: boolean = true;

  handleClick (i) {
    const squares: string[] = this.squares.slice();
    squares[i] = this.xIsNext ? 'X' : 'O';
    this.squares = squares;
    this.xIsNext = !this.xIsNext;
  }

  constructor() { }

  ngOnInit() {
  }

}
