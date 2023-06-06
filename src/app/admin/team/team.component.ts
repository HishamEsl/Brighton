import { Component, OnInit } from '@angular/core';
import { DivingService } from 'src/app/shared/services/diving.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  teams$ = this._divingService.teams$;

  constructor(private _divingService: DivingService) {}

  ngOnInit(): void {}

  onRemoveTeamMemberClick(memberId: number) {
    this._divingService.deleteMember(memberId).subscribe((e) => {
      this.teams$ = this._divingService.teams$;
    });

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this._divingService.deleteMember(memberId).subscribe(() => {
          Swal.fire(
            'Deleted!',
            'Your team Member has been deleted.',
            'success'
          );
          this.teams$ = this._divingService.teams$;
        });
      }
    });
  }
}
