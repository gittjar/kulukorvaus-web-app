import { Component, OnInit } from '@angular/core';
import { faArrowRight, faCircleXmark, faShare, faCloudArrowUp, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Uploader, UploadWidgetConfig, UploadWidgetResult } from "uploader";



export interface PeriodicElement  {
  name: string;
  position: number;
  info: string;


}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'ALV 24%', info: 'Yleisin verokanta, useimmat tavarat ja palvelut.'},
  {position: 2, name: 'ALV 14%', info: 'Elintarvikkeet ja ravintolapalvelut (ei alkoholi eikä tupakka).'},
  {position: 3, name: 'ALV 10%', info: 'Kirjat, lehdet, majoitus, kulttuuri, liikunta ja henkilökuljetukset.'},
  {position: 4, name: 'Edustuskulu',info: 'Esim. liikesuhteiden hoitamisesta aiheutunut kulu.'},
  {position: 5, name: 'Neuvottelukulu / Asiakastapahtuma',info: 'Esim. söitte lounaan asiakkaan kanssa ja maksoit sen.'},
  {position: 6, name: 'Kulu, muu',info: 'Kaikki muut kulut, taksimatkat, kahvin hankinta toimistolle, toimistotarvikkeen osto jne.'},
];



@Component({
  selector: 'app-lomakepohja',
  templateUrl: './lomakepohja.component.html',
  styleUrls: ['./lomakepohja.component.css']
})
export class LomakepohjaComponent implements OnInit {

// ICONS
faArrowRight = faArrowRight;
faCircleXmark = faCircleXmark;
faShare = faShare;
faCloudArrowUp = faCloudArrowUp;
faCirclePlus = faCirclePlus;





uploader = Uploader({ 
  apiKey: "free"

});
options: UploadWidgetConfig = {
  multi: false
};

// 'onUpdate' vs 'onComplete' attrs on 'upload-dropzone':
// - Dropzones are non-terminal by default (they don't have an end
//   state), so by default we use 'onUpdate' instead of 'onComplete'.
// - To create a terminal dropzone, use the 'onComplete' attribute
//   instead and add the 'showFinishButton: true' option.
onUpdate = (files: UploadWidgetResult[]) => {
  alert(files.map(x => x.fileUrl).join("\n"));
};
width = "200px";
height = "150px";













  rows:any = []
  euro : number | undefined;
  euros:any = [];


  constructor() { }

  
  ngOnInit(): void {
      this.rows = [{
            date:'',
            kulun_syy:'',
            euro:'',
            vero:'',
            linkki:''
      }]
  }
  addRow() {
    let row = {date: "", kulun_syy: "",euro:"",vero:"",linkki:""};
    this.rows.push(row);
    this.euro = (this.euros)
 }



 deleteRow(index:any) {
      this.rows.splice(index, 1);
}
submit(){
  console.log(this.rows)
  
}




TimeNow = new Date();

displayedColumns: string[] = ['position', 'name', 'info'];
dataSource = ELEMENT_DATA;

maksaja: string | undefined;
saaja: string | undefined;
pankkitili: string | undefined;
lisatieto: string | undefined;

public ALV24 = 0.24;
public ALV10 = 0.10;






/*
calculate() : any {
  return this.kilometrit * this.taksa; 
  }
  */

setValue() {
 // console.timeLog(this.luontipaiva);
  this.maksaja;
}

printPage() {
  window.print();
}


}
