// Matriz de diagnósticos y datos
const diagnosticos = {
    predoc_proceso: {
        figura: "Doctorado (Paso 0)",
        requisito: "Matrícula en programa de doctorado y defensa de Tesis",
        via: "Vía Académica / Universidad",
        decisionesClave: [
            "<strong>Tesis Tradicional vs. Compendio de Publicaciones:</strong> El compendio permite llegar al final de la tesis con 3 aportaciones publicadas de alto impacto (cumpliendo de golpe criterios de investigación para futuras acreditaciones PPL/TU).",
            "<strong>Mención Internacional:</strong> Planificar una estancia de investigación predoctoral en el extranjero (mínimo 3 meses) para obtener la mención internacional en el título de doctor.",
            "<strong>Venia Docendi:</strong> Solicitar la colaboración docente oficial (hasta el máximo legal permitido por la beca/contrato, habitualmente 60h/año) para empezar a certificar horas impartidas desde el año 1."
        ],
        checklist: [
            "<strong>Investigación:</strong> 1-2 artículos JCR/SJR bien posicionados en su área + perfil activo en ORCID, Google Scholar y repositorios institucionales (Open Access).",
            "<strong>Docencia:</strong> Certificados de docencia impartida (venia docendi) + cursos de formación docente universitaria del ICE/ICEs.",
            "<strong>Internacionalización y Red:</strong> Estancia internacional de 3+ meses + ponencias en congresos internacionales de impacto."
        ]
    },
    predoc_tesis_leida_pendiente: {
        figura: "Profesor Ayudante Doctor (PAD)",
        requisito: "Título de Doctor/a obtenido",
        via: "Vía Directa (LOSU): No requiere acreditación de ANECA ni agencia autonómica.",
        decisionesClave: [
            "Monitorear bolsas de contratación de PAD en departamentos universitarios de interés.",
            "Consolidar la transferencia de resultados de la tesis doctoral a revistas indexadas antes del cierre de convocatorias."
        ],
        checklist: [
            "Título formal de Doctor disponible o resguardo oficial de solicitud del título.",
            "Acreditación de experiencia docente previa (si la hubiera) para baremos de concurso público."
        ]
    },
    predoc_tesis_leida: {
        figura: "Postdoctorado (M. Salas / J. Cierva / Juan de la Cierva)",
        requisito: "Título de Doctor/a obtenido (según ventana de años)",
        via: "Convocatoria competitiva pública (Ministerio/CCAA). No requiere ANECA.",
        decisionesClave: [
            "Elegir un grupo de destino de alto impacto (diferente al grupo de tesis si se busca movilidad).",
            "Alineación con las líneas prioritarias del Plan Estatal de Investigación."
        ],
        checklist: [
            "Cumplir con la ventana temporal desde la lectura de tesis (habitualmente 2 años para JdC Formación).",
            "Carta de aceptación firmada por el centro/grupo receptor."
        ]
    },
    doctor_sin_acreditacion: {
        figura: "Profesor Permanente Laboral (PPL)",
        requisito: "Título de Doctor/a + Méritos equivalentes a TU",
        via: "Acreditación ANECA (Programa PEP/PPL) o agencia autonómica (ej. AQU, AVAP, AAC). Válida la acreditación PCD previa en periodo transitorio.",
        decisionesClave: [
            "Evaluar el baremo del programa PEP/PPL de ANECA o agencia autonómica correspondiente.",
            "Planificar la acumulación de quinquenios (investigación) y trienios (docencia)."
        ],
        checklist: [
            "Publicaciones en tramos JCR/SJR requeridos por la comisión evaluadora de tu campo.",
            "Horas lectivas mínimas acreditables impartidas en grado/máster oficial."
        ]
    },
    doctor_pad_ppl: {
        figura: "Profesor Titular de Universidad (TU) o Catedrático de Universidad (CU)",
        requisito: "Título de Doctor/a + Acreditación previa a TU o PPL consolidado",
        via: "Acreditación ANECA (Programa ACADEMIA). Cuerpo de Funcionarios / Máximo escalafón funcionarial.",
        decisionesClave: [
            "Verificar si se cumple con los criterios de la última versión del Programa ACADEMIA de ANECA.",
            "Solicitud de Sexenios de Investigación (CNEAI) como respaldo al expediente de acreditación."
        ],
        checklist: [
            "Mínimo de publicaciones en Q1/Q2 exigidas por el área específica.",
            "Dirección de tesis doctorales, proyectos de investigación del Plan Nacional o internacionales."
        ]
    }
};

function actualizarDiagnostico() {
    const seleccion = document.getElementById("origen").value;
    const cardResultado = document.getElementById("resultado-card");
    const seccionSubetapas = document.getElementById("seccion-subetapas");
    const contenidoSubetapas = document.getElementById("subetapas-contenido");

    if (!seleccion || !diagnosticos[seleccion]) {
        cardResultado.classList.add("hidden");
        return;
    }

    const data = diagnosticos[seleccion];

    // Rellenar datos principales
    document.getElementById("figura-objetivo").innerText = data.figura;
    document.getElementById("requisito-previo").innerText = data.requisito;
    document.getElementById("via-procedimiento").innerText = data.via;

    // Rellenar decisiones clave y checklist
    let htmlSubetapas = "";

    if (data.decisionesClave && data.decisionesClave.length > 0) {
        htmlSubetapas += `<div class="block-decision">
            <h4>💡 Decisiones Clave Recomendadas</h4>
            <ul>${data.decisionesClave.map(d => `<li>${d}</li>`).join('')}</ul>
        </div>`;
    }

    if (data.checklist && data.checklist.length > 0) {
        htmlSubetapas += `<div class="block-decision">
            <h4>✅ Checklist e Hitos Obligatorios/Recomendados</h4>
            <ul>${data.checklist.map(c => `<li>${c}</li>`).join('')}</ul>
        </div>`;
    }

    contenidoSubetapas.innerHTML = htmlSubetapas;
    seccionSubetapas.classList.remove("hidden");
    cardResultado.classList.remove("hidden");
}
