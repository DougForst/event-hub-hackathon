import { Component } from '@angular/core';

interface ITile {
    wrestler1: IWrestler
    wrestler2: IWrestler
    time: string;
    weight: string;
    division: string;
    period: string;
    boutNo: string;
}

interface IWrestler {
    name: string;
    team: string;
    score: number;
}

@Component({
    selector: 'app-overview-tiles',
    templateUrl: './tiles.component.html',
    styleUrls: ['./tiles.component.scss']
})
export class TilesComponent {
    public matches: ITile[] = [
        {
            time: '1:23',
            weight: '125',
            division: 'D1',
            period: '3rd',
            boutNo: '101',
            wrestler1: {
                name: 'Spencer Lee',
                team: 'IOWA',
                score: 7,
            },
            wrestler2: {
                name: 'Brandon Courtney',
                team: 'ASU',
                score: 7,
            },
        },
        {
            time: ':23',
            weight: '133',
            division: 'D1',
            period: '2nd',
            boutNo: '102',
            wrestler1: {
                name: 'Roman Bravo-Young',
                team: 'PSU',
                score: 2,
            },
            wrestler2: {
                name: 'Daton Fix',
                team: 'OKSU',
                score: 4,
            },
        },
        {
            time: '2:49',
            weight: '141',
            division: 'D1',
            period: '1st',
            boutNo: '103',
            wrestler1: {
                name: 'Nick Lee',
                team: 'PSU',
                score: 2,
            },
            wrestler2: {
                name: 'Jaydin Eierman',
                team: 'IOWA',
                score: 4,
            },
        },
        {
            time: ':35',
            weight: '149',
            division: 'D1',
            period: 'OT',
            boutNo: '104',
            wrestler1: {
                name: 'Austin O\'Connor',
                team: 'UNC',
                score: 2,
            },
            wrestler2: {
                name: 'Sammy Sasso',
                team: 'OSU',
                score: 2,
            },
        }
    ];
}
