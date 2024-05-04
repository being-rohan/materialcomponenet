import { Component, OnInit } from '@angular/core';
import { Icourse, Ilesson } from '../../const/interface';
import { Observable, debounceTime, distinctUntilChanged, startWith, switchMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  coursedata!: Icourse
  courseid!: string
  course$!: Observable<Icourse>
  lesson$!: Observable<Ilesson[]>

  lessonfrom!: FormGroup
  constructor(private _activate: ActivatedRoute,
    private _courservice: CourseService
  ) { }

  ngOnInit(): void {
    this.createfrom()
    this.courseid = this._activate.snapshot.params['id']
    this.course$ = this._courservice.viewcourse(this.courseid)
    this.lesson$ = this._courservice.getleson(this.courseid)
    this.searchFun()
  }
  searchFun() {
    this.lesson$ = this._courservice.getleson(this.courseid, 10, '')
    this.lesson$ = this.lessonfrom.get('lesson')?.valueChanges
      .pipe(
        startWith(''),
        tap(res => console.log(res)
        ),
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap(value => this._courservice.getleson(this.courseid, 10, value)),
      ) as Observable<Ilesson[]>
  }

  createfrom() {
    this.lessonfrom = new FormGroup({
      lesson: new FormControl(null, [Validators.required])
    })
  }

}
