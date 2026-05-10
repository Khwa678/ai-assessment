import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const generatePDF = async () => {
  const input = document.getElementById("report");

  const canvas = await html2canvas(input);

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");

  const width =
    pdf.internal.pageSize.getWidth();

    const height =
    (canvas.height * width) /
    canvas.width;

  pdf.addImage(
    imgData,
    "PNG",
    0,
    0,
    width,
    height
  );

  pdf.save("AI-Assessment-Report.pdf");
};

export default generatePDF;