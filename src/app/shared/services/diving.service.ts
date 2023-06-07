import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlEndpoints } from '../constant/url-endpoints';
import { map, shareReplay } from 'rxjs';
import { IDive } from '../models/dive.model';
import { ITeam } from '../models/team.model';
import { IUser } from '../models/user.model';
import { IEquipment } from '../models/profileEquipment.model';
import { IRemender } from '../models/reminder.model';
import { IQualifications } from '../models/profileQualification.model';
import { IImage } from '../models/image.model';

@Injectable({
  providedIn: 'root',
})
export class DivingService {
  private divesURL = 'odata/dives';
  private teamURL = 'odata/employees';
  private userURL = 'odata/Users';
  private equipmentURL = 'odata/Equipments';
  private remindersURL = 'odata/reminders';
  private qualificationsURL = 'odata/qualifications';
  private contactUsURL = 'EmailSender/Contact-us';
  private minifiedUsersURL = 'odata/minifiedusers';
  private imageURL = 'odata/images';
  private roleURL = 'odata/roles';
  private assignroleURL = 'odata/assignrole';
  private adminsURL = 'odata/admins';

  constructor(private _http: HttpClient) {}

  dives$ = this._http
    .get<IDive[]>(UrlEndpoints.apiRoot + this.divesURL + `?$expand=image`)
    .pipe(
      map((dives: any) => {
        return dives['value'] as IDive[];
      }),
      shareReplay(1)
    );

  // post Dive Gallery
  postDive(model: any) {
    return this._http
      .post<any>(UrlEndpoints.apiRoot + this.divesURL, model)
      .pipe(
        map((dive: any) => {
          return dive as any;
        }),
        shareReplay(1)
      );
  }

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

  // get All Images
  role$ = this._http.get<any[]>(UrlEndpoints.apiRoot + this.roleURL).pipe(
    map((rols: any) => {
      return rols['value'] as any[];
    }),
    shareReplay(1)
  );
  // get All Admins
  admins$ = this._http.get<any[]>(UrlEndpoints.apiRoot + this.adminsURL).pipe(
    map((admins: any) => {
      return admins['value'] as any[];
    }),
    shareReplay(1)
  );
  // get All Images
  images$ = this._http.get<IImage[]>(UrlEndpoints.apiRoot + this.imageURL).pipe(
    map((teams: any) => {
      return teams['value'] as IImage[];
    }),
    shareReplay(1)
  );

  // Get Image BY ID
  imageById(imageId: number) {
    return this._http
      .get<IImage>(
        UrlEndpoints.apiRoot + this.imageURL + `?$filter=id eq ${imageId}`
      )
      .pipe(
        map((image: any) => {
          return image['value'] as any;
        }),
        shareReplay(1)
      );
  }
  // post Team member
  postImage(model: any) {
    return this._http
      .post<any>(UrlEndpoints.apiRoot + this.imageURL, model)
      .pipe(
        map((image: any) => {
          return image as any;
        }),
        shareReplay(1)
      );
  }

  postTeamMember(model: any) {
    return this._http
      .post<any>(UrlEndpoints.apiRoot + this.teamURL, model)
      .pipe(
        map((member: any) => {
          return member as any;
        }),
        shareReplay(1)
      );
  }

  //Assign Role To Users
  postassignroleURL(model: any) {
    return this._http
      .post<any>(UrlEndpoints.apiRoot + this.assignroleURL, model)
      .pipe(
        map((member: any) => {
          return member as any;
        }),
        shareReplay(1)
      );
  }

  //Remove Member
  deleteMember = (memberId: number) =>
    this._http.delete(UrlEndpoints.apiRoot + this.teamURL + `(${memberId})`);

  minifiedUsers$ = this._http
    .get<IUser[]>(UrlEndpoints.apiRoot + this.minifiedUsersURL)
    .pipe(
      map((users: any) => {
        return users['value'] as IUser[];
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
  profileQualifications(userId: string) {
    return this._http
      .get<IQualifications[]>(
        UrlEndpoints.apiRoot +
          this.qualificationsURL +
          `?$filter=UserId eq '${userId}'&expand=image`
      )
      .pipe(
        map((equipments: any) => {
          return equipments['value'] as IQualifications[];
        }),
        shareReplay(1)
      );
  }

  //Remove Qulification
  deleteQulification = (qulificationId: number) =>
    this._http.delete(
      UrlEndpoints.apiRoot + this.qualificationsURL + `(${qulificationId})`
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

  updateUser = (userId: string, user: IUser) =>
    this._http.put(UrlEndpoints.apiRoot + this.userURL + `('${userId}')`, user);

  updateUserImage = (userId: string, imagePath: any) =>
    this._http.patch(
      UrlEndpoints.apiRoot + this.userURL + `('${userId}')`,
      imagePath
    );
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

  // POst qualification

  Postqualification(model: any) {
    return this._http
      .post<any>(UrlEndpoints.apiRoot + this.qualificationsURL, model)
      .pipe(
        map((qualification: any) => {
          return qualification as any;
        }),
        shareReplay(1)
      );
  }

  //Remove Equipment
  deleteEquipment = (equipmentId: number) =>
    this._http.delete(
      UrlEndpoints.apiRoot + this.equipmentURL + `(${equipmentId})`
    );

  // Post contactUs Send email

  contactUsSendEmail(model: any) {
    return this._http
      .post<any>(UrlEndpoints.apiRoot + this.contactUsURL, model)
      .pipe(
        map((contact: any) => {
          return contact as any;
        }),
        shareReplay(1)
      );
  }
}
