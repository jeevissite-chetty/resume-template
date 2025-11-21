import Sidebar from './Sidebar';
import MainContent from './MainContent.jsx';
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


export default function Resume() {

   const resumeRef = useRef();

   const handleDownloadPDF = () => {
    const input = resumeRef.current;
     
    // Step 1: Add the pdf-mode class to hide borders/buttons
  input.classList.add('pdf-mode');

  const prepareForPDF = () => {
  const inputElements = resumeRef.current.querySelectorAll('input, textarea');

  inputElements.forEach((el) => {
    // Create a div to show the value as plain text
    const textEl = document.createElement('div');
    textEl.textContent = el.value;
    textEl.style.whiteSpace = 'pre-wrap';
    textEl.style.fontSize = '14px';
    textEl.style.padding = '4px 0';

    // Hide the original input and insert the new text element
    el.style.display = 'none';
    el.parentNode.insertBefore(textEl, el.nextSibling);
  });
};

   prepareForPDF();

  // Step 2: Wait a moment for the styles to apply, then capture
  setTimeout(() => {
    html2canvas(input, { scale: 2, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save('My_Resume.pdf');

      // Step 3: Clean up — remove the class after capture
      input.classList.remove('pdf-mode');
    });
  }, 300); // Small delay to ensure styles are applied
};
  return (
      <div>
     {/* BUTTON */}
     <div>
       <button
        onClick={handleDownloadPDF}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        📄 Download PDF
      </button>
     </div>


       {/* WRAP ALL CONTENT YOU WANT TO EXPORT */}
    
    <div className="bg-white flex p-6 rounded shadow w-[800px] mx-auto" ref={resumeRef}>
      {/* Left fixed sidebar */}
        <div className="w-1/4 p-6">
          <Sidebar />
        </div>

      {/* Right main content */}
        <div className="w-3/4 p-6">
          <MainContent />
        </div>

      </div>
    
    </div>

  
  );
}
