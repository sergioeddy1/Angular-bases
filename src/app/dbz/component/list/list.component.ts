import { Character } from './../../interfaces/characters.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponentDbz {

  @Input()
  public CharacterList: Character[] = [{
      name: 'Trunks',
      power: 10,
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter ( id?: string): void{
    if( !id ) return;
    this.onDelete.emit(id);
  }
}