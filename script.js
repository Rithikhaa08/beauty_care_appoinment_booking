// 1. Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);  // Get the target ID from the href attribute
      const targetElement = document.getElementById(targetId);  // Find the target element
      
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjust to compensate for fixed header
        behavior: 'smooth' // Smooth scroll
      });
    });
  });
  
  // 2. Form Validation for Booking Appointments
  const bookingForm = document.querySelector('.booking form');
  const bookingInputs = bookingForm ? bookingForm.querySelectorAll('input') : [];
  
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (event) {
      let valid = true;
  
      // Loop through all input fields in the form
      bookingInputs.forEach(input => {
        if (input.value.trim() === '') { // Check if the input is empty
          valid = false;
          input.style.borderColor = 'red';  // Highlight invalid fields
        } else {
          input.style.borderColor = '';  // Reset the border color if the input is valid
        }
      });
  
      if (!valid) {
        event.preventDefault(); // Prevent form submission if any field is empty
        alert('Please fill out all fields before submitting.');
      } else {
        // Optional: handle form submission, for now just show success message
        alert('Appointment booked successfully!');
        // Clear the form after submission
        bookingForm.reset();
      }
    });
  }
  
  // 3. Back to Top Button (Appears after scrolling)
  const backToTopButton = document.createElement('button');
  backToTopButton.innerText = '↑ Back to Top';
  backToTopButton.classList.add('back-to-top');
  document.body.appendChild(backToTopButton);
  
  // Show or Hide the Back to Top Button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopButton.style.display = 'block'; // Show button when user scrolls 500px down
    } else {
      backToTopButton.style.display = 'none'; // Hide button if less than 500px
    }
  });
  
  // Scroll to the top when the Back to Top button is clicked
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll back to the top
    });
  });
  
  // 4. Dynamically Adjusting Service Pages
  const serviceLinks = document.querySelectorAll('.service-card a');
  
  serviceLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const serviceName = this.innerText.toLowerCase();  // Get the service name
      if (serviceName === 'haircut') {
        window.location.href = 'haircut.html'; // Redirect to haircut page
      } else if (serviceName === 'manicure') {
        window.location.href = 'manicure.html'; // Redirect to manicure page
      } else if (serviceName === 'massage') {
        window.location.href = 'massage.html'; // Redirect to massage page
      }
    });
  });
  
  // 5. Dynamic Back to Book Now Button on Service Pages
  const backToBookButton = document.querySelector('.back-to-book-now');
  if (backToBookButton) {
    backToBookButton.addEventListener('click', () => {
      window.location.href = '#book'; // Scroll back to the booking section
    });
  }
  
  // 6. Optional: Dynamic Date Picker for Appointment Date
  const dateInput = document.querySelector('input[type="date"]');
  if (dateInput) {
    dateInput.setAttribute('min', new Date().toISOString().split('T')[0]); // Set minimum date to today
  }
  