import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://www.google.com.br';
  cursoAngular: boolean = true;
  urlImagem: string = "http://www.portaldaabelhinha.com.br/uploads/test-1.jpg";
  conteudoAtual: string = "";
  conteudoSalvo: string = "";
  isMouseOver: boolean = false;
  nomeDoCurso: string = "Angular";
  valorInicial: number = 15;
  

  getValor(){
    return 1;
  }

  curtirCurso(){
    return true;
  }

  onClick(){
    alert('Botão clicado!');
  }

  onKeyup(event:any){
    this.conteudoAtual = event.target.value; 
  }

  onSave(valor: string){
    this.conteudoSalvo = valor; 
  }

  onMouseSpan(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
    console.log(evento);
  }

  constructor() { }

  ngOnInit() {
  }

}
