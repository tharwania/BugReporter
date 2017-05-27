import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BugService } from './bug.service';
import { BugModel } from './bug.type';

@Component({
    selector: 'add-bug',
    templateUrl: './add-bug.component.html',
    providers: [ BugService ]
})
export class AddBugComponent implements OnInit {
    bug = new BugModel(0, "", "");
    constructor(private _bugService: BugService, private _route: ActivatedRoute) { }

    ngOnInit() {

        let id = this._route.snapshot.params['id'];
        if (id != undefined) {
            this._bugService.getBugById(id)
                .subscribe(bugData => this.bug = bugData);
        }
    }

    onSubmit(formValue: any) {

        var result = this._bugService.createBug(this.bug)
            .subscribe(
                    result => console.log(result),
                    error => console.log(error)
            );
    }
}
