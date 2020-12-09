import React from 'react';
import './index.css';
import { Button } from 'antd';
import jsPDF from 'jspdf';  
import html2canvas from 'html2canvas';  

export class MatTable extends Component {  
    constructor(props) {  
      super(props)  
      this.state = {  
        ProductData: []  
    
      }  
    }  
    printDocument() {  
      const input = document.getElementById('pdfdiv');  
      html2canvas(input)  
        .then((canvas) => {  
          var imgWidth = 200;  
          var pageHeight = 290;  
          var imgHeight = canvas.height * imgWidth / canvas.width;  
          var heightLeft = imgHeight;  
          const imgData = canvas.toDataURL('image/png');  
          const pdf = new jsPDF('p', 'mm', 'a4')  
          var position = 0;  
          var heightLeft = imgHeight;  
          pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);  
          pdf.save("download.pdf");  
        });  
    }




class PdfButton extends React.Component {
    render() {
        return(
            <Button
                onClick={}
            >
                Extract a PDF
            </Button>
        )
    };
}
