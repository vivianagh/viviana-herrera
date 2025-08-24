import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE} from '../profile';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  profile = PROFILE
}
