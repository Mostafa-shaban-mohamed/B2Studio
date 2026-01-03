import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbNavModule, NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { PartnersComponent } from "../partners/partners.component";
import { ServicesComponent } from "../services/services.component";
import { TemplatesComponent } from "../templates/templates.component";
import { SoftwareSolutionsComponent } from "../software-solutions/software-solutions.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, NgbModule, NgbNavModule, PartnersComponent, ServicesComponent, TemplatesComponent, SoftwareSolutionsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit
{
  active = 'top';

  ngOnInit() { }

  onNavChange(changeEvent: NgbNavChangeEvent) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
