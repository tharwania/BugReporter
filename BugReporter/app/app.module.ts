import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddBugComponent } from './bug/add-bug.component';
import { BugListComponent } from './bug/bug-list.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'add', component: AddBugComponent },
            { path: 'buglist', component: BugListComponent },
            { path: 'edit/:id', component: AddBugComponent }
        ])
    ],
    declarations: [AppComponent, AddBugComponent, BugListComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
