import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'faws, ng2-faws, ng4-faws, ng-faws',
  template: `
    <span class="faws-{{name}}" [ngClass]="optionalClasses" aria-hidden="true">{{parts}}</span>
  `
})
export class FontAwsOmeComponent implements OnInit {
  @Input() name        : string;
  // Optional Inputs
  @Input() title      ?: string;
  @Input() size       ?: string;
  //@Input() fixed      ?: boolean;
  //@Input() animation  ?: string;
  //@Input() rotate     ?: string | number;
  //@Input() inverse    ?: boolean;
  @Input() color      ?: boolean;
  @Input() flat       ?: boolean;

  private _optionalClasses: string[] = [];
  private _parts:           string[] = [];
  constructor() { }

  ngOnInit() {
    if(!this.name){
      throw new Error('Missing "name" property for Font AWS-ome component');
    }

    if(this.size) {
      this.addToOptionalClasses(`faws-${this.size}`);
    }
    
    if(this.color) {
      this.name "color-" + this.name;
    }else{
      this.name "grey-" + this.name;
    }
    
    if(this.flat) {
      this.name "flat-" + this.name;
    }

    //if(this.fixed) {
    //  this.addToOptionalClasses(`faws-fw`);
    //}

    //if(this.animation) {
    //  this.addToOptionalClasses(`faws-${this.animation}`);
    //}

    //if(this.rotate){
    //  let rotateClass = (typeof this.rotate === 'number') ? `faws-rotate-${this.rotate}`
    //                                                      : `faws-flip-${this.rotate}`;
    //  this.addToOptionalClasses(rotateClass);
    //}

    //if(this.inverse) {
    //  this.addToOptionalClasses(`fa-inverse`);
    //}

  }

  get optionalClasses() {
    return this._optionalClasses;
  }

  private addToOptionalClasses(addClass: string): void {
    this._optionalClasses.push(addClass);
  }

}
