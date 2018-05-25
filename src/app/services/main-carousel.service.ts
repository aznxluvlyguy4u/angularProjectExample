import { Injectable, EventEmitter, OnInit } from '@angular/core';

@Injectable()
export class MainCarouselService implements OnInit {

  eventEmitter: EventEmitter<string> = new EventEmitter();
  defaultImageSrc: string;

  constructor() { }

  ngOnInit(): void {
  }

  setDefaultImageSrc(image: string) {
    this.defaultImageSrc = image;
  }

  getDefaultImageSrc() {
    return this.defaultImageSrc;
  }

  emitImageSrc(image: string) {
    this.eventEmitter.emit(image);
  }

  getEventEmitter() {
    return this.eventEmitter;
  }
}
