import { Component, OnInit } from '@angular/core';

interface IVideo {
    name: string;
    url: string;
}

@Component({
  selector: 'app-overview-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
    public videos: IVideo[] = [
        {
            url: '/assets/videos/174.jpeg',
            name: '174 lbs Semifinal - Bo Nickal, Penn State vs Nate Jackson, Indiana',
        },
        {
            url: '/assets/videos/125.jpeg',
            name: '125 lbs Final - Nico Megaludis, Penn State vs Thomas Gilman, Iowa',
        },
        {
            url: '/assets/videos/157.jpeg',
            name: '157 lbs Consolation - Nick Brascetta, VT vs Chad Walsh, RID',
        },
        {
            url: '/assets/videos/165.jpeg',
            name: '165 lbs Consolation - Steven Rodrigues, ILL vs Daniel Lewis, MIZZ',
        },
        {
            url: '/assets/videos/184.jpeg',
            name: '184 lbs Consolation - Matt Miller, NAVY vs Pete Renda, NCST',
        },
        // {
        //     url: '/assets/videos/125.jpeg',
        //     name: '184 lbs Consolation - Matt Miller, NAVY vs Pete Renda, NCST',
        // },
        // {
        //     url: '/assets/videos/184.jpeg',
        //     name: '184 lbs Consolation - Matt Miller, NAVY vs Pete Renda, NCST',
        // },
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
