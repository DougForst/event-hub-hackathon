import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

interface ITab {
    name: string;
    route: string[];
}

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent {
    public tabs: ITab[] = [
        { name: 'Brackets', route: ['/brackets'] },
        { name: 'News', route: ['/news'] },
        { name: 'Athletes', route: ['/athletes'] },
    ];

    constructor (private router: Router) {

    }

    public onChange(tabEvent: MatTabChangeEvent): void {
        const tab: ITab = this.tabs[tabEvent.index];
        this.router.navigate(tab.route);
    }
}