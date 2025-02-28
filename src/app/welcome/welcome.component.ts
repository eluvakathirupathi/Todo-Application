import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule,NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule,NgIf,CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  name='';
  constructor(private route: ActivatedRoute){
  }

  ngOnInit(){
    // console.log("thiru")
    // console.log(this.route.snapshot.params['name'])
    this.name=this.route.snapshot.params['name'];
  }
}
