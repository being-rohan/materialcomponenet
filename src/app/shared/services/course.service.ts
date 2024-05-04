import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map, shareReplay } from 'rxjs';
import { Icourse, IcourseRes, Ilesson, IlessonRes } from '../const/interface';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseurl = `${environment.basurl}/courses`
  update$: Subject<boolean> = new Subject<boolean>()

  constructor(private _http: HttpClient) { }


  fetch(): Observable<Icourse[]> {
    return this._http.get<IcourseRes>(this.courseurl)
      .pipe(
        map(res => res['payload']),
        shareReplay()
      )


  }
  updateobj(updateid: Icourse): Observable<Icourse> {
    let upurl = `${this.courseurl}/${updateid.id}`
    return this._http.put<Icourse>(upurl, updateid)
  }

  viewcourse(courseid: string): Observable<Icourse> {
    let courseurl = `${this.courseurl}/${courseid}`
    return this._http.get<Icourse>(courseurl)



  }



  getleson(courseId: string, pageSize: number = 10, filter = ''): Observable<Ilesson[]> {
    let course = `${environment.basurl}/lessons`
    let params = new HttpParams()
      .set('courseId', courseId)
      .set('pageSize', pageSize)
      .set('filter', filter)

    return this._http.get<IlessonRes>(course, {
      params: params
    })
      .pipe(
        map(res => res['payload'])
      )

  }
 

}
