import { Component } from '@angular/core';

import { BugService } from './bug.service';
import { BugModel } from './bug.type';

@Component({
    selector: 'add-bug',
    templateUrl: './add-bug.component.html',
    providers: [ BugService ]
})
export class AddBugComponent {
    constructor(private _bugService: BugService) { }

    onSubmit(formValue: any) {
        debugger;
        let bugModel: BugModel = new BugModel();
        bugModel.Title = formValue.title;
        bugModel.Description = formValue.description;

        console.log(formValue);
        
        var result = this._bugService.createBug(bugModel);
        console.log(result);
    }
}
