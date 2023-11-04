import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(){
    setTimeout(() => {
      const currentRoute = this.router.url;
      this.toggleNavListActiveRoute(currentRoute);
    })
  }

  sideMenuOpened: boolean = true;

  navLinkList: any[] = [
    {
      route: "/multi-column-drop-down-page",
      title: "Multi column drop down",
    },
    {
      route: "/multi-column-multi-select-page",
      title: "Multi column multi select",
    },
    {
      route: "/data-table-page",
      title: "Data Table",
    },
  ]

  handleNavListItemClick(navLinkItem: any){
    this.toggleNavListActiveRoute(navLinkItem.route);
  }

  toggleNavListActiveRoute(route: string){
    this.navLinkList = this.navLinkList.map((item) => {
      if(route === item.route){
        item.isActive = true;
      }
      else {
        item.isActive = false;
      }
      return item;
    })
  }


}
