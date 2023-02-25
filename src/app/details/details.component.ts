import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { menu, IMenu } from '../menu';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  menu: IMenu ={} as IMenu;
  id: number= 0;

  constructor(private route: ActivatedRoute){ }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.menu = menu[this.id];
    });
  
  }

  


}


