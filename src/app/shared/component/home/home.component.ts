import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Icourse } from '../../const/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  beggnerArr!: Icourse[]
  advanced!: Icourse[]
  constructor(private _couSer: CourseService) { }

  ngOnInit(): void {
this.getcourse()
this._couSer.update$
.subscribe((res)=>{
  if(res){
    this.getcourse()
  }
})


  }
  getcourse(){
    
    this._couSer.fetch()
      .subscribe((res) => {
        this.beggnerArr = res.filter(r => r.category === 'BEGINNER')
        this.advanced = res.filter(r => r.category === 'ADVANCED')
      })
  }

}
