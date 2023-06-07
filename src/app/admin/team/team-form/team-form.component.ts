import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DivingService } from 'src/app/shared/services/diving.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss'],
})
export class TeamFormComponent implements OnInit {
  teamForm!: FormGroup;

  minifiedUsers$ = this._divingService.minifiedUsers$;

  constructor(
    private formBuilder: FormBuilder,
    private _divingService: DivingService,
    private location: Location
  ) {}

  ngOnInit(): void {
    /* Init Form */
    this.teamForm = this.formBuilder.group({
      userId: ['', [Validators.required]],
      position: ['', [Validators.required]],
      jobDescription: ['', [Validators.required]],
    });
  }

  onAddMember() {
    const obj = {
      userId: this.teamForm.controls['userId'].value,
      position: this.teamForm.controls['position'].value,
      jobDescription: this.teamForm.controls['jobDescription'].value,
    };


    this._divingService.postTeamMember(obj).subscribe((e) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: ' Team Member has been Created ',
        showConfirmButton: false,
        timer: 1500,
      });
    });
  }

  get f() {
    return this.teamForm.controls;
  }
}
