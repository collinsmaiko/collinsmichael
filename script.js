 // Hidden iframe target for WhatsApp form submission
 const iframe = document.createElement('iframe');
 iframe.name = 'whatsappWindow';
 iframe.style.display = 'none';
 document.body.appendChild(iframe);

 // Form validation
 document.getElementById('whatsappForm').addEventListener('submit', function(e) {
     const name = document.getElementById('name').value;
     const message = document.getElementById('message').value;
     
     if (!name || !message) {
         alert('Please fill in all required fields');
         e.preventDefault();
         return;
     }
     
     // Message will automatically submit to WhatsApp in hidden iframe
     this.reset();
 });

 // Mobile menu toggle
 document.addEventListener('DOMContentLoaded', function() {
     const mobileMenu = document.getElementById('mobileMenu');
     const menuButton = document.querySelector('nav button');
     const closeButton = document.getElementById('closeMenu');
     
     menuButton.addEventListener('click', function() {
         mobileMenu.classList.remove('hidden');
     });
     
     closeButton.addEventListener('click', function() {
         mobileMenu.classList.add('hidden');
     });
     
     // Smooth scrolling for anchor links
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', function (e) {
             e.preventDefault();
             
             document.querySelector(this.getAttribute('href')).scrollIntoView({
                 behavior: 'smooth'
             });
             
             // Close mobile menu if open
             mobileMenu.classList.add('hidden');
         });
     });
 });
