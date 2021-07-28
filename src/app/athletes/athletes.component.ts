import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

interface Athlete {
  name: string,
  image: string,
  group: string,
  weightClass: string,
  team: string,
  division: string,
  place: string
}
@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AthletesComponent implements OnInit {
  public columnsToDisplay: string[] = ['image','name', 'group','place'];
  public expandedElement: Athlete | null;
  public athletes: Athlete[]= [
    {
      name: "Adams, Liam",
      image: "/assets/testAthlete.jpeg",
      group: "Block Bracketing",
      weightClass: "145",
      team: "Michigan",
      division: "D1",
      place: "7th"
    },
    {
      name: "Adams, Liam",
      image: "/assets/testAthlete.jpeg",
      group: "Block Bracketing",
      weightClass: "145",
      team: "Ohio",
      division: "D1",
      place: "6th"
    }
  ];
  constructor() { 
    this.expandedElement=null;
  }

  ngOnInit(): void {
  }

}
