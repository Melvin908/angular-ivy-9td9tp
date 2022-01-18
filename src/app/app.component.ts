import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  orderForm: FormGroup;
  items: FormArray;
  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: ''
    });
  }
  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      customerName: '',
      email: '',
      items: this.formBuilder.array([ this.createItem() ])
    });
  }
}
