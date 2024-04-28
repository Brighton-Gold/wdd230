document.addEventListener('DOMContentLoaded', function () {
    // Set the copyright year dynamically
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright').textContent = currentYear;

    // Set last modified date
    const lastModDate = new Date(document.lastModified);
    const formattedDate = lastModDate.toLocaleDateString("en-US", {
        year: 'numeric', month: 'long', day: 'numeric'
    });
    document.getElementById('lastModified').textContent = `Last Updated: ${formattedDate}`;
});
