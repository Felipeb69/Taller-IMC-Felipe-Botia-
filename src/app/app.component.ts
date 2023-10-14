import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calcula Tu IMC';

  persona = {
    nombre: "",
    edad: 0,
    sexo: "",
    estatura: 0,
    peso: 0,
    imc: 0,
    otroSexo: "" // Nuevo campo para género personalizado
  };

  imagen: string | ArrayBuffer | null = null;

  calcularIMC() {
    this.persona.imc = this.persona.peso / (this.persona.estatura * this.persona.estatura);
    this.persona.imc = Math.round(this.persona.imc);
  }

  imcCategoria(imc: number): string {
    if (imc < 18.5) {
      return 'Bajo peso: Tu IMC indica que estás por debajo del rango saludable.';
    } else if (imc >= 18.5 && imc <= 24.9) {
      return 'Peso normal: Tu IMC está en el rango saludable.';
    } else if (imc >= 25 && imc <= 29.9) {
      return 'Sobrepeso: Tu IMC indica sobrepeso.';
    } else {
      return 'Obesidad: Tu IMC indica obesidad.';
    }
  }
  
  manejarImagenSeleccionada(event: any) {
    const archivo = event.target.files[0];
    if (archivo) {
      const lector = new FileReader();
      lector.onload = (e) => {
        if (e.target) {
          this.imagen = e.target.result;
        }
      };
      lector.readAsDataURL(archivo);
    }
  }
}
