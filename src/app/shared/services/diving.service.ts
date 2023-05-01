import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlEndpoints } from '../constant/url-endpoints';
import { map, shareReplay } from 'rxjs';
import { IDive } from '../models/dive.model';
import { ITeam } from '../models/team.model';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class DivingService {
  private divesURL = 'odata/dives';
  private teamURL = 'odata/employees';
  private userURL = 'odata/Users';

  constructor(private _http: HttpClient) {}

  dives$ = this._http
    .get<IDive[]>(UrlEndpoints.apiRoot + this.divesURL + `?$expand=image`)
    .pipe(
      map((dives: any) => {
        return dives['value'] as IDive[];
      }),
      shareReplay(1)
    );

  teams$ = this._http
    .get<ITeam[]>(
      UrlEndpoints.apiRoot +
        this.teamURL +
        `?$expand=User(select=firstname,lastname;$expand=image(select=id,path))`
    )
    .pipe(
      map((teams: any) => {
        return teams['value'] as ITeam[];
      }),
      shareReplay(1)
    );

  getUser(userId: string) {
    return this._http
      .get<any[]>(
        UrlEndpoints.apiRoot + this.userURL + `('${userId}')?$expand=image`
      )
      .pipe(
        map((user: any) => {
          return user as any[];
        }),
        shareReplay(1)
      );
  }
}
