import { Component, EventEmitter, Input, Output } from '@angular/core';

type buttonCollor = 'primary' | 'danger';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonText: string = '';
  @Input() buttonType: buttonCollor = 'primary';
  @Output() clickEvent = new EventEmitter();


  onClick(): void {
    this.clickEvent.emit();
  }

  getClass(): string {
    if (this.buttonType === 'primary') {
      return "border-blue-500 hover:bg-blue-500 text-blue-700"
    } else {
      return "border-red-500 hover:bg-red-500 text-red-700";
    }
  }

}
