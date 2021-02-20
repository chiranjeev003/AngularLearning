import { Component } from "@angular/core";

@Component({
    selector:'Course',
    template: `
        {{course.title | uppercase | lowercase}}<br/>
        {{course.rating | number:'1.2-2'}}<br/>
        {{course.students | number}}<br/>
        {{course.price | currency:"INR"}}<br/>
        {{course.releaseDate | date:'mediumDate'}}<br/>
        {{course.text | summary}}
    `
})

export class CourseComponent{
    course={
        title: "Angular Course",
        rating: 4.9568,
        students: 23589,
        price: 1599.57563,
        releaseDate: new Date(2021, 2, 21),
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
}