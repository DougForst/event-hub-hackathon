import { Component, OnInit } from '@angular/core';
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
        { name: 'Overview', route: ['/overview'] },
        { name: 'Brackets', route: ['/brackets'] },
        { name: 'News', route: ['/news'] },
        { name: 'Athletes', route: ['/athletes'] },
    ];
    activeTab = this.tabs.find(tab => location.href.includes(tab.route[0]));

    constructor (private router: Router) {
        
    }
}
