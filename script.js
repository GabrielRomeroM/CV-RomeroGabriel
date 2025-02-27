document.getElementById("exportarPDF").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();
    let yOffset = 15;
    const margin = 10;
    const maxWidth = 190;

    doc.setFontSize(10);

    function addText(text, x, y, bold = false) {
        if (bold) doc.setFont("helvetica", "bold");
        else doc.setFont("helvetica", "normal");

        doc.text(text, x, y, { maxWidth });
        return y + 5;
    }

    const datosPersonales = [
        { text: "Gabriel Romero Maidana", bold: true },
        { text: "Mendoza, Argentina" },
        { text: "Email: gabrielromeromaidana@gmail.com" },
        { text: "LinkedIn: https://www.linkedin.com/in/gabriel-romero-maidana-645a621b8" },
        { text: "GitHub: https://github.com/GabrielRomeroM" }
    ];

    datosPersonales.forEach((dato) => {
        yOffset = addText(dato.text, margin, yOffset, dato.bold);
    });

    yOffset += 5;
    yOffset = addText("Resumen", margin, yOffset, true);
    yOffset = addText(
        "Desarrollador Full Stack con conocimientos en React, Node.js y bases de datos SQL/MongoDB. Busco mi primera oportunidad en tecnología.",
        margin,
        yOffset
    );

    yOffset += 5;
    yOffset = addText("Habilidades Técnicas", margin, yOffset, true);
    const habilidades = [
        "HTML5, CSS3, JavaScript", "React.js", "Node.js, Express.js",
        "MongoDB, SQL", "Git, GitHub", "APIs REST"
    ];

    yOffset = addText(habilidades.join(" · "), margin, yOffset);
    yOffset += 5;
    yOffset = addText("Proyectos", margin, yOffset, true);
    const proyectos = [
        {
            titulo: "Sistema de Gestión para Gimnasios",
            descripcion: "App para administrar membresías y pagos. Tecnologías: React, Node.js, MongoDB.",
            link: "https://github.com/GabrielRomeroM/Gym-backend"
        },
        {
            titulo: "Página de Creación de Usuarios",
            descripcion: "Interfaz para registrar y visualizar usuarios. HTML, CSS, JavaScript.",
            link: "https://github.com/GabrielRomeroM/Card-Usuario"
        },
        {
            titulo: "Página de Ruleta",
            descripcion: "Juego de ruleta interactivo. HTML, CSS, JavaScript.",
            link: "https://github.com/GabrielRomeroM/Roulette"
        }
    ];

    proyectos.forEach((proyecto) => {
        yOffset = addText(proyecto.titulo, margin, yOffset, true);
        yOffset = addText(proyecto.descripcion, margin, yOffset);
        yOffset = addText(proyecto.link, margin, yOffset);
    });

    yOffset += 5;
    yOffset = addText("Educación", margin, yOffset, true);
    yOffset = addText("Diplomatura en Programación Web Full Stack - UTN (Oct 2024 - Feb 2025)", margin, yOffset);

    doc.save("CV_Gabriel_Romero_Maidana.pdf");
});
