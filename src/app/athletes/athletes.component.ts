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
  favorite?: boolean;
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
      favorite: true,
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
      name: "Heath, Tyler",
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
    },
    {
      name: "Colgate, Jason",
      image: "/assets/testAthlete.jpeg",
      group: "Dance",
      weightClass: "125",
      team: "Pennsylvania",
      division: "D1",
      place: "3rd",
      favorite: true,
      currentDetail: {
        result: [
          {
            round: 1,
            bout: null,
            description: "Colgate Jason (Iowa) over Daniel Bucknell (Iowa State)"
          }
        ],
        upNext: [
          {
            round: 2,
            bout: 118,
            description: "Tian Liam(Wisconsin) vs Colgate Jason (Iowa)"
          },
          {
            round: 3,
            bout: 129,
            description: "Colgate Jason (Iowa) vs Heath Tyler (Northwestern)"
          }
        ]
      }
    },
    {
      name: "Ball, Leon",
      image: "/assets/testAthlete.jpeg",
      group: "Dance",
      weightClass: "130",
      team: "Wisconsin",
      division: "D3",
      place: "2rd",
      favorite: true,
      currentDetail: {
        result: [
          {
            round: 1,
            bout: null,
            description: "Griss Rhys (Penn State) over Howchin Sam (Nebraska)"
          }
        ],
        upNext: [
          {
            round: 2,
            bout: 138,
            description: "Tian Liam (Wisconsin) vs Holmes Ingo (Iowa)"
          },
          {
            round: 3,
            bout: 109,
            description: "Holmes Ingo (Iowa) vs Heath Tyler (Northwestern)"
          }
        ]
      }
    },
    {
      name: "Wright, Kooper",
      image: "/assets/testAthlete.jpeg",
      group: "Dance",
      weightClass: "152",
      team: "Wisconsin",
      division: "D3",
      place: "2rd",
      currentDetail: {
        result: [
          
        ],
        upNext: [
          {
            round: 1,
            bout: 175,
            description: "Lucas Pinnacle (Wisconsin) vs Malik Hubbert (Ohio State) "
          },
          {
            round: 2,
            bout: 138,
            description: " Jonah Wang (MInnesota) vs Malik Hubbert (Ohio State)  "
          },
          {
            round: 3,
            bout: 109,
            description: " Adlai Terry (Purdue) vs Malik Hubbert (Ohio State)"
          }
        ]
      }
    },
    {
      name: "Ball, Athol",
      image: "/assets/testAthlete.jpeg",
      group: "Dance",
      weightClass: "135",
      team: "Ohio State",
      division: "D1",
      place: "4rd",
      favorite: true,
      currentDetail: {
        result: [
          
        ],
        upNext: [
          {
            round: 1,
            bout: 155,
            description: "Corban White (Michigan) vs Athol Ball (Ohio State)"
          },
          {
            round: 2,
            bout: 138,
            description: " Benjamin Gosling (Wisconsin) vs Athol Ball (Ohio State)  "
          },
          {
            round: 3,
            bout: 109,
            description: "Athol Ball (Ohio State) vs Boadie Gosling (Northwestern)"
          }
        ]
      }
    },
    {
      name: "Hynes, Wil",
      image: "/assets/testAthlete.jpeg",
      group: "Dance",
      weightClass: "175",
      team: "Illinois",
      division: "D1",
      place: "8rd",
      currentDetail: {
        result: [
          {
            round: 1,
            bout: null,
            description: " Wil Hynes (Illinois) over Scott Wybourn (Northwestern)"
          },
          {
            round: 2,
            bout: null,
            description: "Wil Hynes (Illinois) over Kodi Brooke (Michigan)"
          },
        ],
        upNext: [
          
          {
            round: 3,
            bout: 109,
            description: "Wil Hynes (Illinois) vs Kodi Brooke (Michigan)"
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
