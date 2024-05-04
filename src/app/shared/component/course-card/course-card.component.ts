import { Component, Input, OnInit } from '@angular/core';
import { Icourse } from '../../const/interface';
import { CourseService } from '../../services/course.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseformComponent } from '../courseform/courseform.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() getcourse!: Icourse
  constructor(private _course: CourseService,
    private _matdialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  edit() {
    let dialog = new MatDialogConfig()

    dialog.width = '400px';
    dialog.data = this.getcourse;


    let dilag2 = this._matdialog.open(CourseformComponent, dialog)
  }
}
