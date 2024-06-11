import { Component } from '@angular/core';
import { ProjectService } from '../../Services/project.service';

@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrl: './charity.component.css'
})
export class CharityComponent {


  projects :any[] = [];

  constructor(private _projectService:ProjectService, ){}

  ngOnInit(): void {
    this.getProjects();
    
  }

  getProjects(): void {

    this._projectService.getAllProjects().subscribe({
      next: (response)=>{
        console.log(response);
      },
      error:(err)=>{
        console.log(err);
      }
    })
    // this._projectService.getAllProjects().subscribe(
    //   (response: any[]) => {
    //     this.projects = response;
    //   },
    //   (error) => {
    //     console.error('Error fetching projects:', error);
    //     // Handle error
    //   }
    // );
  }
}
