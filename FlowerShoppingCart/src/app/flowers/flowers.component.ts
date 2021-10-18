import { Component, OnInit } from '@angular/core';
import { Flowers } from '../models/Flowers';
import { FlowersServiceService } from '../services/flower.service';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements OnInit {
  flowers:Flowers;
  flowerService:FlowersServiceService;
  style:string;
    constructor(flowerService:FlowersServiceService) { 
     this.flowers=new Flowers();
     this.flowerService=flowerService;
     this.style="id";
    }
  PutFlowers(){
    
    var flag=this.flowerService.AddFlowers(this.flowers);
    if(flag==1){
      this.style="id1";
    }
    else{
      this.style="id"
    }
    this.flowers=new Flowers();
  
  }
  ngOnInit(): void {
  }

}
