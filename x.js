document.addEventListener('DOMContentLoaded', function () {
    fetch('/api/events')
        .then(response => response.json())
        .then(events => {
            const content = document.getElementById('content');
            events.forEach(event => {
                const eventElement = document.createElement('div');
                eventElement.className = 'event';
                eventElement.innerHTML = `
                    <h2>${event.title}</h2>
                    <p>${event.description}</p>
                    <p><strong>Date:</strong> ${event.date}</p>
                    <p><strong>Location:</strong> ${event.location}</p>
                    <p><strong>Category:</strong> ${event.category}</p>
                    <a href="${event.registration_link}" target="_blank">Register</a>
                `;
                content.appendChild(eventElement);
            });
        });
});
