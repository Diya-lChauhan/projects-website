document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission for booking form
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Booking submitted successfully!');
            bookingForm.reset();
        });
    }

    // Handle form submission for contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Message sent successfully!');
            contactForm.reset();
        });
    }
});