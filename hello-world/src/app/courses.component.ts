import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'Courses',
    
    template: `
    <h2>{{"Title : " + title}}</h2>
    <ul>
        <li *ngFor = "let course of courses">{{course}}</li>
    </ul>

    <img [src]=image [width]='300' />
    <br><br>
    
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />

    <button class="btn btn-primary" (click)="onSave($event)"  [class.active]="isActive">Save</button>
    `
    //<button [style.backgroundColor]="isActive?'blue':'white'">Save</button>
    // <input #email (keyup.enter)="onKeyUp(email.value)" />
    // <input [value]="email" (keyup.enter)="onKeyUp()" />

})

export class CoursesComponent{
    title = "List of courses";
    isActive = false; 
    // getTitle(){
    //     return this.title;
    // }
    image = './assets/5f84f714a8f0d98769f8ed97fcba6036.jpg';
    courses;

    email = 'me@example.com';

    onKeyUp(){
        console.log(this.email);
    }

    constructor(service : CoursesService){
        //let service = new CoursesService();
        this.courses = service.getCourses();
    }

    onSave($event : MouseEvent){
        $event.stopPropagation();
        console.log("button was clicked", $event);
    }
}