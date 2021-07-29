import { Component, OnInit } from '@angular/core';

interface ITeam {
    name: string;
    athletes: number;
    score: number;
    logo: string;
    favorite?: boolean;
}

@Component({
    selector: 'app-teams',
    templateUrl: './teams.component.html',
    styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {
    public displayedColumns: string[] = ['logo', 'name', 'athletes', 'score', 'star'];

    public teams: ITeam[] = [
        {
            name: 'Iowa',
            athletes: 10,
            score: 129,
            logo: 'https://cdn.freelogovectors.net/wp-content/uploads/2019/10/iowa-hawkeyes-logo.png',
            favorite: true,
        },
        {
            name: 'Penn State',
            athletes: 10,
            score: 113.5,
            logo: 'https://s3-us-west-2.amazonaws.com/flosports-eventsetup-uploads/team-logos/8fb1f85c-57e9-4c5a-a93d-ffd65c05ed01.png?v=null',
        },
        {
            name: 'Olkalahoma State',
            athletes: 4,
            score: 99.5,
            logo: 'https://s3-us-west-2.amazonaws.com/flosports-eventsetup-uploads/team-logos/41cf4e7f-d550-488e-9981-8452d55e42c7.png?v=null',
        },
        {
            name: 'Ohio State',
            athletes: 8,
            score: 46.5,
            logo: 'https://s3-us-west-2.amazonaws.com/flosports-eventsetup-uploads/team-logos/f3994da6-f882-4c2c-b628-f878ad93125b.png?v=null',
        },
        {
            name: 'Northwestern',
            athletes: 7,
            score: 45,
            logo: 'https://s3-us-west-2.amazonaws.com/flosports-eventsetup-uploads/team-logos/89cda4d0-88a8-4fe1-ba8f-7d5aea6144a6.png?v=null',
        },
        {
            name: 'Minnesota',
            athletes: 6,
            score: 64,
            logo: 'https://s3-us-west-2.amazonaws.com/flosports-eventsetup-uploads/team-logos/266a148d-27f0-4650-a5c4-55d95a8e65c0.png?v=null',
            favorite: true,
        },
        {
            name: 'Purdue',
            athletes: 4,
            score: 15.5,
            logo: 'https://s3-us-west-2.amazonaws.com/flosports-eventsetup-uploads/team-logos/fa9cd0cf-ceaf-4db3-b12f-7977616e3f78.png?v=null',
        },
    ]

}
