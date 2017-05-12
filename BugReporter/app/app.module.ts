import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddBugComponent } from './bug/add-bug.component';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: 'ind', component: AppComponent },
            { path: 'add', component: AddBugComponent }
        ])
    ],
    declarations: [AppComponent, AddBugComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
