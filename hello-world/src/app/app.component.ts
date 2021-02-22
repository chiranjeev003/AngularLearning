import { Component } from '@angular/core';
import { FavChangeEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular hello-world';
  
  // post = {
  //   title: "Title",
  //   isFavourite: true
  // }

  // onFavouriteChanged(fav: FavChangeEventArgs){
  //   console.log("the current state is " + fav.newValue); 
  // }

  courses = [1,2];

  doWeHaveCoursesInDiv(){
    if (this.courses.length > 0)
      return true;
    else  
      return false;
  }

}
