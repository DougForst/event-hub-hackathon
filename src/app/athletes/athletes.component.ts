import { Component, OnInit } from '@angular/core';

interface Athlete {
  name: string,
  imgSrc: string,
  group: string,
  weightClass: string
}
@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.scss']
})
export class AthletesComponent implements OnInit {
  public athletes: Athlete[]= [
    {
      name: "Adams, Liam",
      imgSrc: "/assets/testAthlete.jpeg",
      group: "Block Bracketing",
      weightClass: "145"
    },
    {
      name: "Adams, Liam",
      imgSrc: "/assets/testAthlete.jpeg",
      group: "Block Bracketing",
      weightClass: "145"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
