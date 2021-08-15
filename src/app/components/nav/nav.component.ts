import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  open: boolean = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openNav(): void {
    document.getElementById("menu")!.style.width = "100%";
    setTimeout(() => { this.open = !this.open }, 300);
  }

  closeNav(): void {
    this.open = !this.open
    setTimeout(() => {
      document.getElementById("menu")!.style.width = "0"
    }, 50);
  }

  smoothScroll(h: number): void {
    let i = h || 0;
    if (i < document.body.scrollHeight) {
      setTimeout(() => {
        window.scrollTo(0, i);
        this.smoothScroll(i + 30);
      }, 0.5);
    }
  }

  contactos(): void {
    this.closeNav()
    this.smoothScroll(0)
  }

  transformacoes(): void {
    this.closeNav()
    this.router.navigateByUrl("/sobre#transformacoes")
    this.smoothScroll(0)
  }
}
