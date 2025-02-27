import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { NgIf } from '@angular/common'; 

@Component({
 selector: 'app-primary-button',
 standalone: true,
 imports: [CommonModule],
 templateUrl: './primary-button.component.html',
 styleUrl: './primary-button.component.css'
})
export class PrimaryButtonComponent {
someMethod() {
throw new Error('Method not implemented.');
}
 @Input() label: string = 'Kaspi';
 @Output() buttonClickEvent = new EventEmitter<void>();

 handleButtonClick() {
    this.buttonClickEvent.emit();
 }
}
