var PDFDocument = require("pdfkit");

function getInputValue()
{
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');    
    var inputVal = document.getElementById('Mname').value;

    canvas.width = 1190.55;
    canvas.height = 841.89;

    const frame = document.getElementById('frame');
    ctx.drawImage(frame,0,0);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#0b3353';
    ctx.font = '800 48px Sarabun';
    ctx.fillText(`${inputVal}`,frame.width/2,450);

    if(window.navigator.msSaveBlob){
        window.navigator.msSaveBlob(canvas.msToBlob(),`Imperial_Service_${inputVal}.png`);
    } else {
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.href = canvas.toDataURL();
        a.download = `Imperial_Service_${inputVal}.png`;
        a.click();
        document.body.removeChild(a);
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF();
      
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save("download.pdf");
    }
}

