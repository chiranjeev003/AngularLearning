import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { BakriComponent } from './bakri/bakri.component';
import { CoursesService } from './courses.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from './course.component';
import { SummaryPipe } from './summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    BakriComponent,
    CourseComponent,
    SummaryPipe,
    FavouriteComponent,
    PanelComponent,
    InputFormatDirective,
    SwitchCaseComponent,
    CourseListComponent,
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CoursesService,
    PostService  //dependancy injection
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
