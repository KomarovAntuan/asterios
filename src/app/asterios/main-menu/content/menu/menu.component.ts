import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private router: Router) { }

  public selectServer(id: number): void {
    localStorage.setItem('helper-server-id', `${id}`);
    this.router.navigate(['/select-server']);
  }
}