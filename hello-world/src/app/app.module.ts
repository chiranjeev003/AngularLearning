import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { BakriComponent } from './bakri/bakri.component';
import { CoursesService } from './courses.service';
import { FormsModule } from '@angular/forms';
import { CourseComponent } from './course.component';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    BakriComponent,
    CourseComponent,
    SummaryPipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CoursesService  //dependancy injection
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
