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

# Usage and Options
To use the component you can choose between these 2 selectors: `<ng2-fa></ng2-fa>`, `<fa></fa>`, `<ng4-fa><ng4-fa>`, or `<ng-fa><ng-fa>`.

Name      | Type               | Options                                   | Optional
---       | ---                | ---                                       | ---
name      | `String`           | [Glossary](./GLOSSARY.md)                 | No
size      | `String`           | `xl, lg, md, sm, xs`                      | Yes
fixed     | `Boolean`          | `true / false`                            | Yes
animation |  `String`          | `spin / pulse`                            | Yes
rotate    |  `Number / String` | `90 / 180 / 270` `horizontal / vertical`  | Yes
inverse   |  `Boolean`         | `true / false`                            | Yes

*Example Use*
```html
<faws name="api-gateway" animation="spin"></faws>
```