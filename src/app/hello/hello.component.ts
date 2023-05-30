import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  @Input() username = '';
  @Output() hello = new EventEmitter<string>()

  public sayHello(username: string): void {
    this.hello.emit(username);
  }
}
