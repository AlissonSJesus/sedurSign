import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import * as download from "downloadjs";



@Component({
    selector: 'app',
    templateUrl: 'template.html',
    styleUrls: ['component.css']
})

export class FirstComponent implements OnInit {
    @ViewChild('cargo', { static: true }) cargo!: ElementRef;
    inputName: string | undefined;
    inputCargo: string | undefined;
    inputTelefone1: string | undefined;
    inputTelefone2: string | undefined;
    palavras!: string[];

    constructor() { }

    ngOnInit(): void {
    }

    onClick() {
        var elemento = document.getElementById('screen')
        if (elemento) {
            htmlToImage.toPng(elemento).then(function (dataUrl) {
                download(dataUrl, 'assinatura.png');
            });
        }
    }

    onChange(palavra: string) {
        if (palavra) {
            this.palavras = palavra.split(" ");
            for (let i = 0; i < this.palavras.length; i++) {
                this.palavras[i] = this.palavras[i][0].toUpperCase() + this.palavras[i].substring(1);
            }
            let final = this.palavras.join(" ");
            return final
        } else {
            return null;
        }
    }
}