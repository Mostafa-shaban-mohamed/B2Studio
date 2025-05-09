import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { PartnersComponent } from "../partners/partners.component";
import { ServicesComponent } from "../services/services.component";
import { TemplatesComponent } from "../templates/templates.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, NgbModule, NgbNavModule, PartnersComponent, ServicesComponent, TemplatesComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit
{
  active = 'top';

  ngOnInit() { }
}
