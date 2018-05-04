import { Component, OnInit } from '@angular/core';
import {ArticulosService} from '../shared/articulos.service';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ ArticulosService ],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  modalRef: BsModalRef;
  filterBy = 'all';
  visibleImages: any[] = [];
  status: boolean = false;
  categoria: any;

  constructor(private articulosService: ArticulosService, private modalService: BsModalService) {}

  ngOnInit() {
    this.articulosService.getImages()
      .subscribe(data => this.visibleImages = data);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-xl' }));
  }

  menuLateral() {
    this.status = !this.status;
    console.log('click dentro');
  }



}
