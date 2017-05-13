import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddBugComponent } from './bug/add-bug.component';
import { BugListComponent } from './bug/bug-list.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            { path: 'add', component: AddBugComponent },
            { path: 'buglist', component: BugListComponent },
        ])
    ],
    declarations: [AppComponent, AddBugComponent, BugListComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
