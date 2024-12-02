function sendMessage(message) {
    const userInput = document.getElementById('user-input');
    const chatMessages = document.getElementById('chat-messages');

    // Si no se pasa un mensaje, usar el valor del input
    const userMessage = message || userInput.value;

    if (userMessage.trim() === '') {
        return;
    }

    // Crear el elemento del mensaje del usuario
    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('user-message');
    userMessageElement.textContent = userMessage;
    chatMessages.appendChild(userMessageElement);

    // Limpiar el input del usuario
    userInput.value = '';

    // Responder al mensaje del usuario
    const botResponse = getBotResponse(userMessage);
    const botMessageElement = document.createElement('div');
    botMessageElement.classList.add('bot-message');
    botMessageElement.innerHTML = botResponse; // Usar innerHTML para permitir HTML en la respuesta
    chatMessages.appendChild(botMessageElement);

    // Desplazar hacia abajo para ver el nuevo mensaje
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Añadir evento de teclado para enviar mensaje con Enter
document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function getBotResponse(message) {
    const responses = {
        '¿Cuáles son los programas educativos que ofrece el CESDE?': `
            Contamos con una amplia variedad de programas educativos:
            <ul>
                <li>Servicio de Mantenimiento, Reparación e Instalación de Electrodomésticos</li>
                <li>Atención y Cuidado a Personas Mayores</li>
                <li>Diseño Gráfico</li>
                <li>Publicación de Contenidos Digitales</li>
                <li>Instalador de Redes de Energía Eléctrica y Solar</li>
                <li>Soporte de Sistemas Informáticos</li>
                <li>Atención Integral a la Primera Infancia</li>
                <li>Desarrollo de Software</li>
            </ul>
        `,
        '¿Cuál es el objetivo de los programas educativos?': 'El objetivo de los programas educativos es formar a los estudiantes en competencias laborales para que puedan desempeñarse en el mercado laboral.',
        '¿Cuál es la duración de los programas educativos?': 'La duración de los programas educativos es de 3 semestres.',
        '¿Cuál es el horario de los programas educativos?': 'El horario de los programas educativos son de lunes a sábados en jornadas diurnas y nocturnas.',
        '¿Cómo puedo inscribirme en un programa educativo?': 'Para inscribirte en un programa educativo debes dirigirte a la sede del CESDE, presentar tu documento de identidad y diligenciar el formulario de inscripción.',
        '¿Qué programas de becas hay disponibles?': 'Contamos con programas de becas para los programas educativos de Atención Integral a la Primera Infancia y Desarrollo de Software.'
    };

    return responses[message] || 'Lo siento, no tengo una respuesta para esa pregunta.';
}