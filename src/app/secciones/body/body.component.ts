import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  //variable para ngSwitch
  area: string = "";

  public formLogin!: FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      nombre:['', 
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ],
      email:['', 
        [
          Validators.required,
          Validators.email
        ]
      ],
      msg:['',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(500)
        ]
      ]
    });
  }

  send(): any{
    console.log(this.formLogin.value)
  }
}
