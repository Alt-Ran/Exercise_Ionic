import { Component } from '@angular/core';

import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    pdfObj = null;
    address = "Via Poscolle n. 112 - Udine (UD)";

    constructor() {
    }


    generatePdf() {

        var dd = {
            content: [

                {
                    text: 'REGISTRO INGREDIENTI E ALLERGENI',
                    style: 'title',
                },
                /*{
                    image: '/Users/danielealtran/Desktop/convert-html-in-pdf/src/assets/re.jpg',
                    alignment: 'center',
                    width: 150,
                    height: 150,
                    margin: [10, 50]
                },*/
                {
                    text: this.address,
                    style: 'text',
                    pageBreak: 'after'
                },

                /* PRIMI PIATTI */
                {
                    text: 'PRIMI PIATTI',
                    style: 'subtitle',
                },
                {
                    text: 'SPAGHETTI ALLO SCOGLIO A MODO MIO',
                    margin: [0, 30, 0, 10]
                },
                {
                    text: 'Spaghetti di farina di grano tenero (glutine), Polipo**(molluschi), pesce spada (pesce), vongole (molluschi), cozze*(molluschi), ',
                    bold: true
                },

                /* SECONDI PIATTI */
                {
                    text: 'sale, pepe, pomodoro cigliegino, prezzemolo, olio di oliva, aglio. Nome ingrediente (PC)(frutta a guscio)',
                    margin: [0, 0, 0, 50]

                },
                {
                    text: 'SECONDI PIATTI',
                    style: 'subtitle',
                },
                {
                    text: 'SPAGHETTI ALLO SCOGLIO A MODO MIO',
                    margin: [0, 30, 0, 10]
                },
                {
                    text: 'Spaghetti di farina di grano tenero (glutine), Polipo**(molluschi), pesce spada (pesce), vongole (molluschi), cozze*(molluschi), ',
                    bold: true
                },
                {
                    text: 'sale, pepe, pomodoro cigliegino, prezzemolo, olio di oliva, aglio. Nome ingrediente (PC)(frutta a guscio)',
                }
            ],

            footer: function(currentPage, pageCount) {
                if(currentPage == 1) {

                    return {
                        text: "Il presente registro degli ingredienti e allergeni è stato redatto dall’operatore del settore alimentare, responsabile delle informazioni sugli alimenti nel presente esercizio, in data 00/00/0000 alle ore 00:00",
                        margin: [80, -20, 80, 0],
                        alignment: 'center',
                        style: "smallText"
                    }

                }else{
                    return [
                        {
                            text: "Legenda",
                            margin: [30, -80, 0, 0],
                            style: "smallText"
                        },
                        {
                            text: "Nome ingrediente contenente allergene (specifica allergene)",
                            margin: [30, 15, 0, 0],
                            bold: true,
                            style: "smallText"
                        },
                        {
                            text: "Nome ingrediente NON contenente allergene",
                            margin: [30, 0, 0, 0],
                            style: "smallText"
                        },
                        {
                            text: "Nome ingrediente che può contenere tracce dell’allergene (PC)(specifica allergene)",
                            margin: [30, 0, 0, 0],
                            style: "smallText"
                        },
                        {
                            text: "*Congelato     **Surgelato      ***Abbatuto (PC) Può contenere tracce di...)",
                            margin: [30, 15, 0, 0],
                            style: "smallText"
                        }
                    ]
                }

            },

            styles: {
                title: {
                    alignment: 'center',
                    fontSize: 20,
                    margin: [10, 50]
                },
                subtitle: {
                    fontSize: 15,
                    bold: true
                },
                text: {
                    fontSize: 15,
                    alignment: 'center'
                }
            },

        };

        this.pdfObj = pdfMake.createPdf(dd);

        this.pdfObj.download();

    }

}
