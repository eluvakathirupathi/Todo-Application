import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule,NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { WelcomedataService } from '../service/data/welcomedata.service';
import { errorContext } from 'rxjs/internal/util/errorContext';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule,NgIf,CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  name='';
  ResponseMessage = ''
  ErrorMessage = ''
  constructor(
    private route: ActivatedRoute,
    private welcomeservice: WelcomedataService)
    {
  }

  ngOnInit(){
    // console.log("thiru")
    // console.log(this.route.snapshot.params['name'])
    this.name=this.route.snapshot.params['name'];
  }
  welcomebean(){
    // console.log("from welcome");
    // console.log(this.welcomeservice.executeWelcomeBean());
    this.welcomeservice.executeWelcomeBean().subscribe(
      response => this.handlesuccessfulresponse(response),
      error => this.handleerrorresponse(error)
    );

    // console.log("Calling Welcome Bean API...");
    
    // this.welcomeservice.executeWelcomeBean().subscribe({
    //   next: (response: any) => {
    //     console.log("Response received:", response);
    //   },
    //   error: (err) => {
    //     console.error("Error occurred:", err);
    //   }
    // });
  }
  handlesuccessfulresponse(response: any){
    console.log(response);
    console.log(response.message);
    this.ResponseMessage=response.message;
  }
  handleerrorresponse(error: any ){
    console.log(error)
    this.ErrorMessage=error.error.message;
  }

  welcomebeanwithpath(){
    this.welcomeservice.executeWelcomeBeanwithPath(this.name).subscribe(
      response => this.handlesuccessfulresponse(response),
      error => this.handleerrorresponse(error)
    );
  }
}
