import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message',
  standalone: false,
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  private message: string = '';

  public readonly msg: string = this.message;

  constructor(private messageService: MessageService) {
    this.message = messageService.message;
  }  
}
