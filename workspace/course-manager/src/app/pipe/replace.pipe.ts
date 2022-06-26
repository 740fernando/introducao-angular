import { Pipe, PipeTransform } from "@angular/core";

// Torna a classe elegivel para se tornar pipe
@Pipe({
    name: 'replace'
})
export class ReplacePipe implements PipeTransform {

    transform(value: string, char: string, valueToReplace: string) {
        return value.replace(char, valueToReplace);
    }
}