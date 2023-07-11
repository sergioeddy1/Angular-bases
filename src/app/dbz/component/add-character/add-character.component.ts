import { Character } from './../../interfaces/characters.interface';
import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
})

export class AddCharacter {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name:'',
    power: 0
  };

  emitCharacter():void{

    
    if( this.character.name.length === 0) return;
    
    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0};
  }

 
}
