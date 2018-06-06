import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class MainCarouselService {

  @Output() eventEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  changeImage(imageSrc: string) {
    this.eventEmitter.emit(imageSrc);
  }

}
