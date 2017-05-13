import { Component } from '@angular/core';

@Component({
    selector: 'add-bug',
    templateUrl: './add-bug.component.html'
})
export class AddBugComponent {
    onSubmit(formValue: any) {
        console.log(formValue);
    }
}
