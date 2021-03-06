import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { routing } from './app.routing';
import { JobComponent } from './job/job.component';
import { NewJobComponent } from './new-job/new-job.component';
import { EditJobComponent } from './edit-job/edit-job.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    JobComponent,
    NewJobComponent,
    EditJobComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
