# AWS Service Fonts (Font-AWS-ome)
Simple, easy to use Angular 2 & 4 component to manage AWS service icons similar to Font Awesome icons.

# How to install

**Install Packages**
`npm install --save font-aws-ome`

**Import the module:**
```typescript
//...
import { FontAwsOmeModule } from 'font-aws-ome/font-aws-ome';
@NgModule({
  //...
  imports: [
    //...
    FontAwsOmeModule
  ],
  //...
})
export class AppModule { }
```

**If you're using [Angular CLI](https://github.com/angular/angular-cli), add the font-awesome CSS to `styles` inside the `angular-cli.json`**
```json
"styles": [
    "styles.css",
    "../node_modules/font-aws-ome/css/aws.css"
],
```

# Usage and Options
To use the component you can choose between these 2 selectors: `<ng2-fa></ng2-fa>`, `<fa></fa>`, `<ng4-fa><ng4-fa>`, or `<ng-fa><ng-fa>`.

Name      | Type               | Options                                   | Optional
---       | ---                | ---                                       | ---
name      | `String`           | [F-A Icons](http://fontawesome.io/icons/) | No
size      | `String`           | `lg, 2x, 3x, 4x, 5x`                      | Yes
fixed     | `Boolean`          | `true / false`                            | Yes
animation |  `String`          | `spin / pulse`                            | Yes
rotate    |  `Number / String` | `90 / 180 / 270` `horizontal / vertical`  | Yes
inverse   |  `Boolean`         | `true / false`                            | Yes

*Example Use*
```html
<faws name="api-gateway" animation="spin"></faws>
```