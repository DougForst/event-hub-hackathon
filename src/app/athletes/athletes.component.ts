import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

interface Athlete {
  name: string,
  image: string,
  group: string,
  weightClass: string,
  team: string,
  division: string,
  place: string,
  currentDetail: CurrentDetail
}
interface CurrentDetail {
  result: Event[];
  upNext: Event[];
}
interface Event {
  round: number,
  bout: number|null,
  description: string
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
  public columnsToDisplay: string[] = ['image','name', 'group','place', 'arrow'];
  public expandedElement: Athlete | null;
  public athletes: Athlete[]= [
    {
      name: "Adams, Liam",
      image: "/assets/testAthlete.jpeg",
      group: "Block Bracketing",
      weightClass: "145",
      team: "Michigan",
      division: "D1",
      place: "7th",
      currentDetail: {
        result: [
          {
            round: 1,
            bout: null,
            description: "Declan Ash (Penn State) over Korbyn Bucknell (Iowa)"
          }
        ],
        upNext: [
          {
            round: 2,
            bout: 1018,
            description: "Maxwell Wright (Wisconsin) vs Korbyn Bucknell (Iowa)"
          },
          {
            round: 3,
            bout: 1029,
            description: "Korbyn Bucknell (Iowa) vs Heath Tyler (Northwestern)"
          }
        ]
      }
    },
    {
      name: "Adams, Liam",
      image: "/assets/testAthlete.jpeg",
      group: "Dance Bracketing",
      weightClass: "155",
      team: "Ohio",
      division: "D1",
      place: "6th",
      currentDetail: {
        result: [
          {
            round: 1,
            bout: null,
            description: "Declan Ash (Penn State) over Korbyn Bucknell (Iowa)"
          }
        ],
        upNext: [
          {
            round: 2,
            bout: 1018,
            description: "Maxwell Wright (Wisconsin) vs Korbyn Bucknell (Iowa)"
          },
          {
            round: 3,
            bout: 1029,
            description: "Korbyn Bucknell (Iowa) vs Heath Tyler (Northwestern)"
          }
        ]
      }
    }
  ];
  constructor() { 
    this.expandedElement=null;
  }

  ngOnInit(): void {
  }

}
