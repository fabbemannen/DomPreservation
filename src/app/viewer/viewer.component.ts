import { Component, Input } from '@angular/core';
import { FancyHolder } from '../factory/factory.component';

@Component({
  selector: 'app-viewer',
  standalone: true,
  imports: [],
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.scss'
})
export class ViewerComponent {
  @Input() holder: FancyHolder | undefined;
}
