import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DivingService } from 'src/app/shared/services/diving.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  equipmentForm: FormGroup;
  reminders$ = this._divingService.reminders$;
  constructor(
    private fb: FormBuilder,
    private _divingService: DivingService,
    private location: Location
  ) {
    this.equipmentForm = this.createFormItem('init');
  }

  onSubmitClicked() {
    const obj: any = {
      name: this.equipmentForm.controls['name'].value,
      lastServiceDate: this.equipmentForm.controls['lastServiceDate'].value,
      reminderId: +this.equipmentForm.controls['timeReminder'].value,
      userId: sessionStorage.getItem('UD'),
      parts: this.equipmentForm.controls['parts'].value.map((par: any) => ({
        name: par.name,
        purchaseDate: par.purchaseDate,
        expiryDate: par.expiryDate,
      })),
    };

    this._divingService.PostEquipment(obj).subscribe((e) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Ticket has been Created ',
        showConfirmButton: false,
        timer: 1500,
      });
      
      this.location.back();
    });
  }

  /**
   * @param  itemType // For make a dynamic Form
   * it Can Be init | classRoom | subject
   * @returns FormGroup
   */

  /* Create Form Item */
  createFormItem(itemType: string): FormGroup {
    let formItem = this.fb.group({});
    switch (itemType) {
      case 'init':
        formItem = this.fb.group({
          name: ['', Validators.required],
          lastServiceDate: ['', Validators.required],
          timeReminder: ['', Validators.required],

          parts: this.fb.array([]),
        });
        break;
      case 'part':
        formItem = this.fb.group({
          name: '',
          purchaseDate: '',
          expiryDate: '',
        });
    }
    return formItem;
  }

  /* Get Part  */
  getPart(): FormArray {
    return this.equipmentForm.get('parts') as FormArray;
  }
  /* Add Part  */
  addPart() {
    this.getPart().push(this.createFormItem('part'));
  }

  /* Delete Class Room */
  deletePart(partIndex: number) {
    this.getPart().removeAt(partIndex);
  }

  ngOnInit(): void {}
}
