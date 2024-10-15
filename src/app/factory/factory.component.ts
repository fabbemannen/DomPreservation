import { Component, EventEmitter, Output } from '@angular/core';

export class FancyHolder {
  items: FancyItem[] = [];
}

export class FancyItem {
  id!: number;
  text!: string;
  color!: string;
}

@Component({
  selector: 'app-factory',
  standalone: true,
  imports: [],
  templateUrl: './factory.component.html',
  styleUrl: './factory.component.scss'
})
export class FactoryComponent {
  @Output() output: EventEmitter<FancyHolder> = new EventEmitter<FancyHolder>();

  currentId: number = 0;
  holder: FancyHolder = new FancyHolder();

  Generate() {
    const items: FancyItem[] = [];
    const randomLength = Math.random() * 249 + 1;

    for (let index = 0; index < randomLength; index++) {
      const temp = new FancyItem();
      temp.id = this.currentId;
      this.currentId++;
      temp.text = "I'm a test!";
      temp.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      items.push(temp);
    }

    this.holder.items = items;
    this.output.emit(this.holder);
  }
}
