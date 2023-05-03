import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlEndpoints } from '../constant/url-endpoints';
import { map, shareReplay } from 'rxjs';
import { IDive } from '../models/dive.model';
import { ITeam } from '../models/team.model';
import { IUser } from '../models/user.model';
import { IEquipment } from '../models/profileEquipment.model';
import { IRemender } from '../models/reminder.model';

@Injectable({
  providedIn: 'root',
})
export class DivingService {
  private divesURL = 'odata/dives';
  private teamURL = 'odata/employees';
  private userURL = 'odata/Users';
  private equipmentURL = 'odata/Equipments';
  private remindersURL = 'odata/reminders';

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

  reminders$ = this._http
    .get<IRemender[]>(UrlEndpoints.apiRoot + this.remindersURL)
    .pipe(
      map((remenders: any) => {
        return remenders['value'] as IRemender[];
      }),
      shareReplay(1)
    );

  profileEquipments(userId: string) {
    return this._http
      .get<IEquipment[]>(
        UrlEndpoints.apiRoot +
          this.equipmentURL +
          `?$filter=UserId eq '${userId}'&expand=parts`
      )
      .pipe(
        map((equipments: any) => {
          return equipments['value'] as IEquipment[];
        }),
        shareReplay(1)
      );
  }

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

  updateUser = (userId: string, user: IUser) =>
    this._http.put(UrlEndpoints.apiRoot + this.userURL + `('${userId}')`, user);

  // POst Equipment

  PostEquipment(model: any) {
    return this._http
      .post<any>(UrlEndpoints.apiRoot + this.equipmentURL, model)
      .pipe(
        map((equipment: any) => {
          return equipment as any;
        }),
        shareReplay(1)
      );
  }

  //Remove Equipment
  deleteEquipment = (equipmentId: number) =>
    this._http.delete(
      UrlEndpoints.apiRoot + this.equipmentURL + `(${equipmentId})`
    );
}
