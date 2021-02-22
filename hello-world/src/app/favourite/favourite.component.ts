import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  
})
export class FavouriteComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('isFavorite') isSelected: boolean;

  @Output('change') click = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isSelected = !this.isSelected;
    this.click.emit({newValue: this.isSelected});
  }

}

export interface FavChangeEventArgs{
  newValue: boolean
}
