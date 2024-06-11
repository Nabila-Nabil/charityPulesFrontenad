import { Component } from '@angular/core';
import { ProjectService } from '../../Services/project.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { title } from 'process';
import { error } from 'console';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  constructor(private _ProjectService:ProjectService, private _Router:Router){}

  projectForm:FormGroup = new FormGroup({
    title: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    fundingGoal: new FormControl('',[Validators.required]),
    amountRaised: new FormControl('',[Validators.required]),
    imgPath: new FormControl('',[Validators.required]),
    state: new FormControl('',[Validators.required]),
    charityId: new FormControl('', [Validators.required])
  });

  onSubmit() {
    if (this.projectForm.valid) {

      this._ProjectService.postProject(this.projectForm.value).subscribe({
        next:(response)=>{
          console.log(response)
          this._Router.navigate(['/home'])
        },
        error:(err)=>{
          console.log(err);
        }
      })
      // this._ProjectService.postProject(this.projectForm.value).subscribe(response => {
       
      //   console.log('Project added successfully:', response);
      //   this._Router.navigate(['/home']);
      // }, error => {
        
      //   console.error('Error adding project:', error);
        

      // });
    }
  }
}
