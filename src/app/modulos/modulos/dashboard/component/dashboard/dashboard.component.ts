import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/core/services/cursos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public noImagens: boolean = false;
  public cursos: any;

  constructor(
    private cursosServices: CursosService
  ) { }

  ngOnInit(): void {
  
    this.getUltimosCursos();

  }


  getUltimosCursos() {
    this.cursosServices.ultimosCursos()
      .subscribe(
        resp => {
          this.cursos = resp;
          
      }
    )
    
  }


  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};

  
  slickInit(e) {}
  
  breakpoint(e) {}
  
  afterChange(e) {}
  
  beforeChange(e) {}
  
}
