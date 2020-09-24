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

    var imgData = canvas.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF({
        orientation: 'l',
        unit: 'pt',
        format: [892.9125,631.4175],
        });

    pdf.addImage(imgData, 'JPEG', 0, 0);
    pdf.save(`Imperial_Service_${inputVal}.pdf`);
}

