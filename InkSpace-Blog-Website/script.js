
// ======================================
// 1. BLOG ARTICLE DATA
// ======================================

const articles = [

    {
        id: 1,
        title: "The Future of Artificial Intelligence",
        category: "Technology",
        author: "Priya Sharma",
        date: "04 Nov 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
        description: "Discover how artificial intelligence is transforming industries and changing the way we live and work.",
        content: [
            "Artificial intelligence is no longer just a futuristic concept. It has become an important part of our everyday lives. From smart assistants to personalized recommendations, AI is changing the way people interact with technology.",
            "Businesses are using AI to automate repetitive tasks, improve decision-making and create better customer experiences. Healthcare, education and transportation are also experiencing significant changes.",
            "As technology continues to evolve, understanding artificial intelligence will become an important skill for everyone."
        ]
    },

    {
        id: 2,
        title: "Simple Habits for a Happier Lifestyle",
        category: "Lifestyle",
        author: "Ananya Rao",
        date: "02 Nov 2026",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800",
        description: "Small daily habits can create meaningful changes in your lifestyle, happiness and overall productivity.",
        content: [
            "A happier lifestyle does not always require major changes. Sometimes, the smallest habits can make the biggest difference.",
            "Start your day with a positive mindset, maintain a consistent sleep schedule and spend some time doing activities you enjoy. These simple practices can improve your everyday experience.",
            "Remember that progress is more important than perfection. Build habits gradually and celebrate your achievements."
        ]
    },

    {
        id: 3,
        title: "Exploring Beautiful Places Around the World",
        category: "Travel",
        author: "Rahul Kumar",
        date: "30 Oct 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
        description: "Explore beautiful destinations, discover different cultures and find inspiration for your next adventure.",
        content: [
            "Travel is one of the most exciting ways to discover the world. Every destination offers a unique experience, culture and perspective.",
            "From peaceful mountain landscapes to beautiful coastal destinations, travelling allows us to step outside our routines and experience something new.",
            "Plan your journey, explore local traditions and capture memories that will last a lifetime."
        ]
    },

    {
        id: 4,
        title: "The Art of Minimalist Web Design",
        category: "Design",
        author: "Meera Joseph",
        date: "28 Oct 2026",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
        description: "Learn how simplicity, spacing, typography and thoughtful layouts create beautiful digital experiences.",
        content: [
            "Minimalist design focuses on simplicity and purpose. It removes unnecessary elements and allows important information to stand out.",
            "Good spacing, readable typography and a consistent color palette help create a comfortable user experience.",
            "The goal of minimalist design is not to remove everything. It is to make every element meaningful."
        ]
    },

    {
        id: 5,
        title: "How to Build Confidence and Achieve Goals",
        category: "Personal Growth",
        author: "Divya Menon",
        date: "25 Oct 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
        description: "Discover practical ways to improve confidence, overcome challenges and move towards your dreams.",
        content: [
            "Confidence develops through experience, practice and self-belief. It does not happen overnight.",
            "Set realistic goals, take small steps every day and learn from your mistakes. Every challenge gives you an opportunity to improve.",
            "Believe in your abilities and remember that your journey is unique."
        ]
    },

    {
        id: 6,
        title: "Technology Trends Shaping Our Future",
        category: "Technology",
        author: "Arjun Patel",
        date: "22 Oct 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
        description: "Explore emerging technologies and understand how innovation is shaping tomorrow's world.",
        content: [
            "Technology is developing at an incredible pace. Innovations in cloud computing, robotics and artificial intelligence are creating new opportunities.",
            "These developments are transforming industries and changing how people communicate, work and learn.",
            "Staying curious and continuously learning can help us adapt to the changing digital world."
        ]
    },

    {
        id: 7,
        title: "Creating a Productive Morning Routine",
        category: "Lifestyle",
        author: "Sneha Kumar",
        date: "20 Oct 2026",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800",
        description: "Create a refreshing morning routine that helps you stay focused, organized and motivated.",
        content: [
            "A productive morning can set a positive tone for the rest of your day.",
            "Start by organizing your priorities, drinking enough water and avoiding unnecessary distractions.",
            "Consistency is the key to building a morning routine that works for you."
        ]
    },

    {
        id: 8,
        title: "Discover the Beauty of Creative Thinking",
        category: "Design",
        author: "Kavya Raj",
        date: "18 Oct 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
        description: "Understand how creativity helps you solve problems, generate ideas and see the world differently.",
        content: [
            "Creative thinking helps us approach everyday challenges with fresh perspectives.",
            "Reading, exploring new experiences and experimenting with ideas can help develop creativity.",
            "Give yourself the freedom to think differently and explore possibilities."
        ]
    },

    {
        id: 9,
        title: "A Journey Through the Mountains",
        category: "Travel",
        author: "Vikram Das",
        date: "15 Oct 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
        description: "Experience the peaceful beauty of mountain landscapes and the joy of exploring nature.",
        content: [
            "Mountain journeys offer a refreshing escape from busy everyday routines.",
            "The beautiful landscapes, fresh air and peaceful surroundings create unforgettable experiences.",
            "Respect nature, travel responsibly and enjoy every moment of your journey."
        ]
    }

];


// ======================================
// 2. SELECT HTML ELEMENTS
// ======================================

const blogGrid = document.getElementById("blogGrid");

const articleCount = document.getElementById("articleCount");

const noResults = document.getElementById("noResults");

const homePage = document.getElementById("homePage");

const articlePage = document.getElementById("articlePage");

const articleDetail = document.getElementById("articleDetail");

const searchInput = document.getElementById("searchInput");

const searchContainer = document.getElementById("searchContainer");


// ======================================
// 3. DISPLAY BLOG CARDS
// ======================================

function displayArticles(articleArray) {

    blogGrid.innerHTML = "";

    articleCount.textContent =
        articleArray.length + " Stories";


    if (articleArray.length === 0) {

        noResults.classList.add("show");

        return;

    }

    noResults.classList.remove("show");


    articleArray.forEach((article) => {

        const card = document.createElement("article");

        card.className = "blog-card";

        card.innerHTML = `

            <div class="blog-image">

                <img
                    src="${article.image}"
                    alt="${escapeHTML(article.title)}"
                    loading="lazy"
                >

            </div>

            <div class="blog-content">

                <span class="article-category">
                    ${escapeHTML(article.category.toUpperCase())}
                </span>

                <h3>${escapeHTML(article.title)}</h3>

                <p>${escapeHTML(article.description)}</p>

                <div class="blog-meta">

                    <span>${escapeHTML(article.date)}</span>

                    <button
                        class="blog-read"
                        data-id="${article.id}">
                        Read More →
                    </button>

                </div>

            </div>

        `;

        blogGrid.appendChild(card);

    });

}


// ======================================
// 4. ESCAPE HTML
// ======================================

function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, (character) => {

        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };

        return entities[character];

    });

}


// ======================================
// 5. CATEGORY FILTERING
// ======================================

function filterCategory(category) {

    searchInput.value = "";

    let filteredArticles;


    if (category === "All") {

        filteredArticles = articles;

    } else {

        filteredArticles = articles.filter((article) => {

            return article.category === category;

        });

    }


    // Update category button styles

    document.querySelectorAll(".category-btn").forEach((button) => {

        button.classList.toggle(
            "active",
            button.dataset.category === category
        );

    });


    displayArticles(filteredArticles);

}


document.querySelectorAll(".category-btn").forEach((button) => {

    button.addEventListener("click", () => {

        filterCategory(button.dataset.category);

    });

});


// ======================================
// 6. SEARCH ARTICLES
// ======================================

function searchArticles() {

    const searchValue = searchInput.value
        .trim()
        .toLowerCase();


    const filteredArticles = articles.filter((article) => {

        return (

            article.title.toLowerCase().includes(searchValue) ||

            article.category.toLowerCase().includes(searchValue) ||

            article.description.toLowerCase().includes(searchValue) ||

            article.author.toLowerCase().includes(searchValue)

        );

    });


    // Reset category selection

    document.querySelectorAll(".category-btn").forEach((button) => {

        button.classList.toggle(
            "active",
            button.dataset.category === "All"
        );

    });


    displayArticles(filteredArticles);

}


searchInput.addEventListener("input", searchArticles);


// ======================================
// 7. SEARCH BAR OPEN AND CLOSE
// ======================================

const searchToggle = document.getElementById("searchToggle");

const closeSearch = document.getElementById("closeSearch");


searchToggle.addEventListener("click", () => {

    searchContainer.classList.toggle("show");

    if (searchContainer.classList.contains("show")) {

        searchInput.focus();

    }

});


closeSearch.addEventListener("click", () => {

    searchContainer.classList.remove("show");

    searchInput.value = "";

    searchArticles();

});


// ======================================
// 8. DISPLAY FULL ARTICLE
// ======================================

function openArticle(id) {

    const article = articles.find((item) => {

        return item.id === id;

    });


    if (!article) return;


    homePage.classList.add("hidden");

    articlePage.classList.add("show");

    searchContainer.classList.remove("show");


    // Generate article content

    const paragraphs = article.content.map((paragraph) => {

        return `<p>${escapeHTML(paragraph)}</p>`;

    }).join("");


    articleDetail.innerHTML = `

        <span class="article-category">
            ${escapeHTML(article.category.toUpperCase())}
        </span>

        <h1>${escapeHTML(article.title)}</h1>

        <div class="detail-meta">

            By ${escapeHTML(article.author)}
            &nbsp; | &nbsp;
            ${escapeHTML(article.date)}
            &nbsp; | &nbsp;
            ${escapeHTML(article.readTime)}

        </div>

        <img
            src="${article.image}"
            alt="${escapeHTML(article.title)}"
            class="detail-image"
        >

        <div class="detail-body">

            <h2>Introduction</h2>

            ${paragraphs}

            <h2>Final Thoughts</h2>

            <p>
                Every story gives us an opportunity to learn
                something new. Keep exploring, stay curious
                and continue discovering ideas that inspire you.
            </p>

        </div>

    `;


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ======================================
// 9. READ MORE BUTTONS
// ======================================

blogGrid.addEventListener("click", (event) => {

    const button = event.target.closest(".blog-read");

    if (!button) return;


    const id = Number(button.dataset.id);

    openArticle(id);

});


// ======================================
// 10. FEATURED ARTICLE
// ======================================

document.getElementById("featuredRead").addEventListener(
    "click",
    () => {

        openArticle(1);

    }
);


// ======================================
// 11. BACK TO HOME
// ======================================

function showHome() {

    articlePage.classList.remove("show");

    homePage.classList.remove("hidden");

    searchContainer.classList.remove("show");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


document.getElementById("backBtn").addEventListener(
    "click",
    showHome
);


// ======================================
// 12. NEWSLETTER SUBSCRIPTION
// ======================================

const newsletterForm = document.getElementById(
    "newsletterForm"
);

const newsletterEmail = document.getElementById(
    "newsletterEmail"
);

const newsletterMessage = document.getElementById(
    "newsletterMessage"
);


newsletterForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = newsletterEmail.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        newsletterMessage.textContent =
            "Please enter a valid email address.";

        return;

    }


    newsletterMessage.textContent =
        "Thank you for subscribing! Welcome to InkSpace.";

    newsletterForm.reset();

});


// ======================================
// 13. MOBILE NAVIGATION
// ======================================

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


document.querySelectorAll(".nav-link").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


// ======================================
// 14. INITIALIZE WEBSITE
// ======================================

function initializeWebsite() {

    displayArticles(articles);

    filterCategory("All");

}


// Start the application

initializeWebsite();
