import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BugService } from './bug.service';
import { BugModel } from './bug.type';

@Component({
    selector: 'bug-list',
    templateUrl: './bug-list.component.html',
    providers: [ BugService ]
})

export class BugListComponent implements OnInit {
    bugList: BugModel[] = [];
    constructor(private _bugService: BugService, private _router: Router) { }
    ngOnInit() {
        this._bugService.getBugList()
            .subscribe(bugData => this.bugList = bugData);
    }
    onSelect(bug: BugModel): void {
        this._router.navigate(['/edit', bug.Id]);
    }
}
