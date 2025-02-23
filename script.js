document.getElementById("exportarPDF").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    function addText(text, x, y, bold = false, maxWidth = 170) {
        if (bold) doc.setFont("helvetica", "bold");
        else doc.setFont("helvetica", "normal");
        doc.text(text, x, y, { maxWidth });
    }

    const datosPersonales = [
        "Gabriel Romero Maidana",
        "Mendoza, Argentina",
        "Email: gabrielromeromaidana@gmail.com",
        "LinkedIn: https://www.linkedin.com/in/gabriel-romero-maidana-645a621b8",
        "GitHub: https://github.com/GabrielRomeroM"
    ];

    const habilidades = [
        "HTML5, CSS3, JavaScript",
        "React.js",
        "Node.js, Express.js",
        "MongoDB, SQL",
        "Git, GitHub",
        "APIs REST"
    ];

    let yOffset = 20;
    doc.setFontSize(22);
    addText(datosPersonales[0], 20, yOffset, true);

    doc.setFontSize(14);
    datosPersonales.slice(1).forEach((dato) => addText(dato, 20, (yOffset += 10)));

    yOffset += 20;
    addText("Resumen", 20, yOffset, true);
    addText(
        "Desarrollador Full Stack con conocimientos en tecnologías modernas como React, Node.js y bases de datos SQL/MongoDB. Busco mi primera oportunidad en tecnología.",
        20,
        (yOffset += 10)
    );

    yOffset += 20;
    addText("Habilidades Técnicas", 20, yOffset, true);
    habilidades.forEach((habilidad) => addText(`- ${habilidad}`, 20, (yOffset += 10)));

    yOffset += 20;
    addText("Educación", 20, yOffset, true);
    addText("Diplomatura en Programación Web Full Stack - UTN (Oct 2024 - Feb 2025)", 20, (yOffset += 10));

    doc.save("CV_Gabriel_Romero_Maidana.pdf");
});