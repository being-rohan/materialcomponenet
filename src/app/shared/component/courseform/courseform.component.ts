import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Icourse } from '../../const/interface';
import { CoursedialogComponent } from '../coursedialog/coursedialog.component';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-courseform',
  templateUrl: './courseform.component.html',
  styleUrls: ['./courseform.component.css']
})
export class CourseformComponent implements OnInit {

  courseform!: FormGroup
  courseData!: Icourse


  constructor(private F: FormBuilder,
    private _couSer: CourseService,
    @Inject(MAT_DIALOG_DATA) private _course: Icourse,
    private _matsanck: SnackbarService,
    private _matdialog: MatDialogRef<CoursedialogComponent>

  ) {

    this.cretaeform()
    this.courseData = _course;
    this.courseform.patchValue(_course)

  }

  ngOnInit(): void {
  }


  cretaeform() {


    this.courseform = this.F.group({
      description: ['', Validators.required],
      releaseAt: ['', Validators.required],
      longDescription: ['', Validators.required],
      category: ['', Validators.required]
    })
  }

  onclose() {
    this._matdialog.close()
  }



  onsave() {
    if (this.courseform.valid) {
      let obj = {
        ... this.courseform.value,
        id: this.courseData.id
      }
      this._couSer.updateobj(obj)
        .subscribe((res) => {
          console.log(res);
          this._couSer.update$.next(true)
          this._matdialog.close()
          this._matsanck.open(`${res.description} is updated `)
        })


    }
  }
}


