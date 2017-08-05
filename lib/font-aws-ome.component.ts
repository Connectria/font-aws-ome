import { Component, OnInit, Input } from '@angular/core';
import aws_color from './dict/aws_color';
import aws_color_flat from './dict/aws_color_flat';
import aws_grey from './dict/aws_grey';
import aws_grey_flat from './dict/aws_grey_flat';

@Component({
  selector: 'faws, ng2-faws, ng4-faws, ng-faws',
  templateUrl: './font-aws-ome.component.html',
  styleUrls: ['./styles/aws-ome.min.css']
})
export class FontAwsOmeComponent implements OnInit {
  @Input() name        : string;
  // Optional Inputs
  @Input() title      ?: string;
  @Input() size       ?: string;
  @Input() animation  ?: string;
  @Input() rotate     ?: string | number;
  @Input() invert    ?: string = "false";
  @Input() color      ?: string = "true";
  @Input() flat       ?: string = "false";

  private _optionalClasses: string[] = [];
  public children:           any[] = [];
  constructor() { }

  ngOnInit() {
    if(!this.name){
      throw new Error('Missing "name" property for Font AWS-ome component');
    }

    if(this.size) {
      this.addToOptionalClasses(`faws-${this.size}`);
    }
    
    // 3D color
    if (this.color == "true" && this.flat == "false") {
      this.children = aws_color.icons.filter(icon => { return icon.properties.name == this.name; });
      this.name = "color-" + this.name;
    }
    
    // Flat color
    if (this.color == "true" && this.flat == "true") {
      this.children = aws_color_flat.icons.filter(icon => { return icon.properties.name == this.name; });
      this.name = "color-flat-" + this.name;
    }
    
    // 3D Grey
    if (this.color == "false" && this.flat == "false") {
      this.children = aws_grey.icons.filter(icon => { return icon.properties.name == this.name; });
      this.name = "grey-" + this.name;
    }
    
    // Flat grey
    if (this.color == "false" && this.flat == "true") {
      this.children = aws_grey_flat.icons.filter(icon => { return icon.properties.name == this.name; });
      this.name = "grey-flat-" + this.name;
    }
    
    if (this.children.length == 0) {
      throw new Error('Unknown "name" property for Font AWS-ome component');
    }else{
      this.children = this.children[0].attrs;
    }

    if(this.animation) {
      this.addToOptionalClasses(`faws-${this.animation}`);
    }

    if(this.rotate){
      let rotateClass = (typeof this.rotate === 'number') ? `faws-rotate-${this.rotate}`
                                                          : `faws-flip-${this.rotate}`;
      this.addToOptionalClasses(rotateClass);
    }

    if(this.invert == "true") {
      this.addToOptionalClasses(`faws-inverse`);
    }

  }

  get optionalClasses() {
    return this._optionalClasses;
  }

  private addToOptionalClasses(addClass: string): void {
    this._optionalClasses.push(addClass);
  }

}
