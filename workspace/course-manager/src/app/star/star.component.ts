import { Component, OnChanges, Input } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: 'star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

    // Recebe valor de um componente externo
    @Input()
    rating: number= 0;

    starWidth!: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5; //Calculo baseado no módulo -> Proporção que a div será exibida
    }
}