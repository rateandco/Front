import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {

  notations: number[] = [1, 2, 3, 4, 5];
  constructor() { }


  ngOnInit() {
  }

}
