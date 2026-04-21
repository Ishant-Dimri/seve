// Function to switch between sections
function showSection(sectionId) {
    // 1. Get all elements with the class 'page-section'
    const sections = document.querySelectorAll('.page-section');
    
    // 2. Remove the 'active' class from all sections to hide them
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 3. Add the 'active' class to the section the user clicked on
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// Handle the Cart Delivery Form submission
document.addEventListener('DOMContentLoaded', () => {
    const deliveryForm = document.getElementById('delivery-form');
    
    if (deliveryForm) {
        deliveryForm.addEventListener('submit', function(event) {
            // Prevent the page from reloading
            event.preventDefault(); 
            
            // In a real website, you would send this data to a server here.
            // For now, we will just show a success message.
            alert('Thank you for your order! Your Seve perfume will be on its way soon.');
            
            // Clear the form
            deliveryForm.reset();
            
            // Redirect back to home
            showSection('home');
        });
    }
});
