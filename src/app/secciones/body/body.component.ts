import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  //variable para uso del ngSwitch
  area: string = "";

  //array de habilidades para uso del *ngFor
  skillsVisual = [{
    habilidad:"Cámara",
    descripcion:"Manejo de cámaras DSLR"
  },
  {
    habilidad:"Premiere Pro",
    descripcion:"7 años de experiencia"
  },
  {
    habilidad:"After Effects",
    descripcion:"Efectos motion graphic"
  },
  {
    habilidad:"Photoshop",
    descripcion:"Básico"
  },
  {
    habilidad:"Illustrator",
    descripcion:"Básico"
  }
  ];

  skillsArqui = [{
    habilidad:"AutoCad",
    descripcion:"Desarrollo de planos"
  },
  {
    habilidad:"Revit",
    descripcion:"Basico"
  },
  {
    habilidad:"3D Max",
    descripcion:"Basico"
  }
  ];

  skillsProgram = [{
    habilidad:"HTML & CSS",
    descripcion:"Basico"
  },
  {
    habilidad:"JavaScript",
    descripcion:"Basico"
  },
  {
    habilidad:"Angular",
    descripcion:"Basico"
  },
  {
    habilidad:"MongoDB",
    descripcion:"Iniciando"
  },
  {
    habilidad:"XAMPP",
    descripcion:"Iniciando"
  }
  ];
  
  // para validacion de formulario
  public formLogin!: FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      nombre:['', 
        [
          Validators.required,
          Validators.minLength(6)
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
