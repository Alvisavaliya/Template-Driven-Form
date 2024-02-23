import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { last } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';

  @ViewChild('registrationForm') form: NgForm;

 firstname:string='';
 lastname:string=''
 dob:string='';
 country:string=''
 city:string=''
 region:string=''
 PostalCode:string=''
  username:string='';
IsAgreed:boolean=false;


  gender=[
    {id:'check-male',value :'male', display:'Male'},
    {id:'check-female',value :'female',display:'Female'},
    {id:'check-other',value :'other',display:'Prefer Not To Say'}
  ]
  defaultGender:string='male';
  defaultCountry: string='India';
  emailadd: any;

  onFormSubmit(){
    console.log(this.form);
    console.log(this.form.value);
    // console.log(this.form.controls['firstname'].value);

this.firstname=this.form.value.firstname;
this.lastname=this.form.value.lastname;
this.emailadd=this.form.value.email;
this.country=this.form.value.address.country;
this.city=this.form.value.address.city;
this.region=this.form.value.address.region;
this.PostalCode=this.form.value.address.PostalCode;
this.username=this.form.value.username;
this.dob=this.form.value.dob;
this.IsAgreed=this.form.value.agreement;


    this.form.reset();
// set a default value...
    this.form.form.patchValue({
      gender:'male',
      address:{
        country:'India'
      }
    })
  }

  GenerateUserName(){

    let username = "";
    const fname: string = this.form.value.firstname
    const lname: string = this.form.value.lastname
    const dob: string = this.form.value.dob
    

    if (fname.length >= 3) {
      username += fname.slice(0, 3)
    }
    else {
      username += fname
    }

    if (lname.length >= 3) {
      username += lname.slice(0, 3)
    }
    else {
      username += lname
    }

    let datetime = new Date(dob);
    username += datetime.getFullYear();
    username += Math.floor(Math.random() * 100)
    username = username.toLowerCase();

    // this.form.controls['username'].value=username;

    // console.log( this.form.value.username=username);
    
    // this.form.setValue({
    //   firstname:this.form.value.firstname,
    //   lastname:this.form.value.lastname,
    //   email:this.form.value.email,
    //   PhoneNo:this.form.value.PhoneNo,
    //   dob:this.form.value.dob,
    //   gender:this.form.value.gender,
    //   username:username,
    //   address:{
    //     street1:this.form.value.address.street1,
    //     street2:this.form.value.address.street2,
    //     country:this.form.value.address.country,
    //     city:this.form.value.address.city,
    //     region:this.form.value.address.region,
    //     PostalCode:this.form.value.address.PostalCode
    //   }
    // })
    
    this.form.form.patchValue(
      {
        username:username,
         
      }
    )
  }
}
