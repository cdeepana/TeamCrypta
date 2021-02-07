import { Component, OnInit } from '@angular/core';
import { FormBuilder  } from '@angular/forms';
import { HttpClient  } from '@angular/common/http'

import { Subject, Observable} from 'rxjs'
// import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam'


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  userInputForm:any;
  private countries_list = 'assets/countries.json';
  country_array:any;
  
  constructor(private http: HttpClient,private formBuilder: FormBuilder) {

    this.userInputForm = this.formBuilder.group({
      username: '',
      dob: '',
      location: '',
      image: ''

    })
  }

  ngOnInit(){
    this.http.get(this.countries_list) // get region list
      .subscribe( (res)=>{
      this.country_array = res
    },
    err =>console.log("err",err)
    )
  }


  onSubmit(data){
    console.log("submit clicked !",data);
  }

}
