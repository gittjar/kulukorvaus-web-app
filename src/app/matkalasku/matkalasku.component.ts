import { Component } from '@angular/core';

@Component({
  selector: 'app-matkalasku',
  templateUrl: './matkalasku.component.html',
  styleUrls: ['./matkalasku.component.css']
})
export class MatkalaskuComponent {


    favKulkupeli: string | undefined;
    kulkupeli: string[] = ['Auto (0,46eur/km)', 'Polkupyörä (0,12eur/km)', 'Moottoripyörä (0,24eur/km)', 'Vene (0,33eur/km)', 'Potkulauta (0,04eur/km)'];  
    fname: string = '';
    lname: string = '';
    detail: string = '';
    aloituspaivamaara: string | undefined;
    aloituspaikka: string | undefined;
    aloitusaika: string | undefined;
    luontipaiva: string | undefined;
    // laskemisessa pitää olla = 0; 
    public kilometrit = 0;
    public taksa = 0;


    
    

      calculate() : any {
        if (this.favKulkupeli == 'Auto (0,46eur/km)') this.taksa = 0.46;
        else if (this.favKulkupeli == 'Polkupyörä (0,12eur/km)') this.taksa = 0.12;
        else if (this.favKulkupeli == 'Moottoripyörä (0,24eur/km)') this.taksa = 0.24;
        else if (this.favKulkupeli == 'Vene (0,33eur/km)') this.taksa = 0.33;
        else if (this.favKulkupeli == 'Potkulauta (0,04eur/km)') this.taksa = 0.04;

        return  this.kilometrit * this.taksa;
      
      }
      
    //  calculate() : any {
    // return this.kilometrit * this.kulkupeli.find.length;
        
    //  }
    
      setValue() {
        console.timeLog(this.luontipaiva);
        console.log(this.fname);
        console.log(this.lname);
        console.log(this.detail);
        console.log(this.aloituspaivamaara);
        console.log(this.aloitusaika);
        console.log(this.aloituspaikka);
        console.log(this.kilometrit);
        console.log(this.taksa);
      }
      
      
      
    }

