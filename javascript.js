
document.addEventListener('DOMContentLoaded', function() {
    const heading = document.getElementById('blog-heading');
    const text = "Ayesha's Blogs";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            heading.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                heading.innerHTML = '';
                index = 0;
                typeWriter();
            }, 1000); // Wait for 2 seconds before restarting the typing
        }
    }

    typeWriter();
});