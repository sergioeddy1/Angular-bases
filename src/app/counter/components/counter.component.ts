import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy(2)"> +1 </button>
     &nbsp;
    <button (click)="decreaseBy(2)"> -1 </button>
     &nbsp;
    <button (click)="resetValue()"> Reset </button>
    `
})

export class CounterComponent {
    public counter: number = 10;

    public increaseBy(value:number):void{
     this.counter += value;
    }
    public decreaseBy(value : number):void{
     this.counter -=value;
    }
    public resetValue():void{
     this.counter = 10;
}}