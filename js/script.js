document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(function (item) {
        const header = item.querySelector('.accordion-header');

        header.addEventListener('click', function () {
            // Toggle the active class on the clicked accordion item
            item.classList.toggle('active');

            // Close all other accordion items
            accordionItems.forEach(function (otherItem) {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
});
