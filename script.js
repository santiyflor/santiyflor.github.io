document.addEventListener('DOMContentLoaded', function () {
    // Configurar el calendario
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'es',
        dateClick: function (info) {
            document.querySelector('#eventDate').value = info.dateStr;
        }
    });
    calendar.render();

    // Generar la vista previa
    document.getElementById('generatePreview').addEventListener('click', function () {
        const eventName = document.getElementById('eventName').value;
        const message = document.getElementById('message').value;

        // Generar HTML dinámico
        const preview = `
            <h3>${eventName || 'Nombre del Evento'}</h3>
            <p>${message || 'Escribe tu mensaje aquí...'}</p>
        `;
        document.getElementById('preview').innerHTML = preview;
    });
});
