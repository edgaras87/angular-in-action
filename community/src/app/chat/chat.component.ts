import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ChatBotService } from '../services/chat-bot.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {

  user: string;
  guest: string;
  messages: any[];
  message: string = '';
  @ViewChild('scrollBox') private scrollBox: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private chatBotService: ChatBotService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.messages = [];
      this.user = this.userService.getUser();
      this.guest = params['username'];
    });
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  close() {
    this.router.navigate([{outlets: {chat: null}}]);
  }

  onKeyUp(event: KeyboardEvent) {
    if(event.keyCode == 13) {
      this.send();
    }
  }

  send() {
    this.addMessage(this.user, this.message, 'left');
    this.reply();
    this.message = '';
  }

  private addMessage(author: string, message: string, type: string) {
    this.messages.push({
      author: author,
      message: message,
      type: type
    });
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.scrollBox.nativeElement.scrollTop = this.scrollBox.nativeElement.scrollHeight;
    } catch (error) {
      console.log(error);
    }
  }

  private reply() {
    setTimeout(()=>{
      this.addMessage(this.guest, this.chatBotService.respond(), 'right');
    }, 2500);
  }

}
