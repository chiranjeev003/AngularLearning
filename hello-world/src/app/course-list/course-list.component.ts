import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})

export class CourseListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  courses: any;

  // onChange(course: ICourse){
  //   course.name = "Updated";
  // }

  canSave=true;

  task={
    title: 'Job application',
    asignee: null as any 
  }

  loadCoarses(){
    this.courses = [
      {id: 1, name: "Course1"},
      {id: 2, name: "Course2"},
      {id: 3, name: "Course3"}
    ];
  }

  // removeCourse(course: ICourse){
  //   let index = this.courses.indexOf(course);
  //   this.courses.splice(index,1);
  // }

  // addCourse(){
  //   if((this.courses.findIndex(i => i.name === "Course4")) === -1)
  //   this.courses.push({id: 4, name: "Course4"});
    
  //   console.log(this.courses);
  //   console.log(this.courses.findIndex(i => i.name ==="Course3"));
  // }
}

export interface ICourse{
  id: number,
  name: string
}
