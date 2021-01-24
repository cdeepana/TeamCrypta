import { Component, OnInit } from '@angular/core';
import { FormBuilder  } from '@angular/forms'

import { Subject, Observable} from 'rxjs'
// import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam'


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  userInputForm:any;



  constructor(private formBuilder: FormBuilder) {

    this.userInputForm = this.formBuilder.group({
      username: '',
      dob: '',
      location: '',
      image: ''

    })
  }

  ngOnInit(){}


  onSubmit(data){
    console.log("submit clicked !",data);
  }

}
