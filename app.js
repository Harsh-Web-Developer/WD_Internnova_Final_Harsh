document.addEventListener("DOMContentLoaded", function () {
    const projectData = [
        {
            id: 1,
            title: "Week 2 - CSS Fundamentals",
            category: "CSS",
            description: "Responsive layout challenges using CSS Box Model, Flexbox, and Media Queries."
        },
        {
            id: 2,
            title: "Week 3 & 4 - JS Logic & DOM",
            category: "JS",
            description: "Dynamic DOM manipulation, form validation, events, and data array handling."
        },
        {
            id: 3,
            title: "Week 5 - Task Management App",
            category: "JS",
            description: "Interactive task manager featuring local storage persistence and priority filtering."
        },
        {
            id: 4,
            title: "InternNova Homepage Redesign",
            category: "Full",
            description: "Complete UI/UX homepage redesign built using modern responsive components."
        }
    ];

    const projectsGrid = document.getElementById("projects-grid");
    const searchInput = document.getElementById("search-input");
    const categorySelect = document.getElementById("category-select");
    const noResults = document.getElementById("no-results");

    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");

    function renderProjects() {
        projectsGrid.innerHTML = "";
        
        let query = searchInput.value.toLowerCase().trim();
        let selectedCat = categorySelect.value;

        let filtered = projectData.filter(item => {
            let matchesQuery = item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query);
            let matchesCat = selectedCat === "All" || item.category === selectedCat;
            return matchesQuery && matchesCat;
        });

        if (filtered.length === 0) {
            noResults.style.display = "block";
            return;
        }

        noResults.style.display = "none";

        filtered.forEach(item => {
            let card = document.createElement("div");
            card.className = "p-card";
            card.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <span class="p-tag">${item.category}</span>
            `;
            projectsGrid.appendChild(card);
        });
    }

    searchInput.addEventListener("input", renderProjects);
    categorySelect.addEventListener("change", renderProjects);

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        formStatus.textContent = "Thank you! Your message has been sent successfully.";
        formStatus.style.color = "#16a34a";
        contactForm.reset();
    });

    menuBtn.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-item").forEach(item => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    renderProjects();
});