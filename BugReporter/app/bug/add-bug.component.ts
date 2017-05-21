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
        let bugModel: BugModel = new BugModel();
        bugModel.Title = formValue.title;
        bugModel.Description = formValue.description;
        var result = this._bugService.createBug(bugModel)
            .subscribe(
                    result => console.log(result),
                    error => console.log(error)
            );
        
    }
}
