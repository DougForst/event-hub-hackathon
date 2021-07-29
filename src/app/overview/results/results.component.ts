import { Component } from '@angular/core';

interface ITile {
    wrestler1: IWrestler
    wrestler2: IWrestler
    time: string;
    weight: string;
    division: string;
    period: string;
    boutNo: string;
    winType: string;
    winner: number;
}

interface IWrestler {
    name: string;
    team: string;
    score: number;
}


@Component({
  selector: 'app-overview-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsOverviewComponent {
    public matches: ITile[] = [
        {
            time: '1:23',
            winType: 'MD',
            winner: 1,
            weight: '125',
            division: 'D1',
            period: '3rd',
            boutNo: '101',
            wrestler1: {
                name: 'T. Mirocha',
                team: 'IOWA',
                score: 10,
            },
            wrestler2: {
                name: 'H. Muhamath',
                team: 'ASU',
                score: 2,
            },
        },
        {
            time: ':23',
            winType: 'MD',
            winner: 1,
            weight: '133',
            division: 'D1',
            period: '2nd',
            boutNo: '102',
            wrestler1: {
                name: 'RB. Old',
                team: 'PSU',
                score: 0,
            },
            wrestler2: {
                name: 'D. Frank',
                team: 'OKSU',
                score: 8,
            },
        },
        {
            time: '2:49',
            winType: 'F',
            winner: 2,
            weight: '141',
            division: 'D1',
            period: '1st',
            boutNo: '103',
            wrestler1: {
                name: 'N. Sparrow',
                team: 'PSU',
                score: 2,
            },
            wrestler2: {
                name: 'J. Echtman',
                team: 'IOWA',
                score: 4,
            },
        },
        {
            time: ':35',
            winType: 'DEC',
            winner: 1,
            weight: '149',
            division: 'D1',
            period: 'OT',
            boutNo: '104',
            wrestler1: {
                name: 'A. O\'Bryan',
                team: 'UNC',
                score: 3,
            },
            wrestler2: {
                name: 'S. Jones',
                team: 'OSU',
                score: 2,
            },
        }
    ];
}
