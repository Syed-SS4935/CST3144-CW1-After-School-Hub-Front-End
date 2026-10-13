let products = [
    // Mathematics
    {
        id: 1001,
        title: 'Math 101',
        description: 'A mathematics course for beginners. Learn the fundamentals of arithmetic, algebra, and geometry.',
        location: 'Liverpool, UK',
        price: 20,
        image: "assets/img/icons8-math-100.png",
        availableInventory: 50,
        rating: 4
    },
    {
        id: 1002,
        title: 'Math 102',
        description: 'A mathematics course for students who want to build on their basic skills. Topics include advanced algebra, trigonometry, and introductory calculus.',
        location: 'Manchester, UK',
        price: 40,
        image: "assets/img/tabler-math-256.png",
        availableInventory: 50,
        rating: 5
    },
    {
        id: 1003,
        title: 'Math 103',
        description: 'An advanced mathematics course covering advanced calculus, statistics, probability, and mathematical problem-solving.',
        location: 'London, UK',
        price: 60,
        image: "assets/img/tabler-math-function-256.png",
        availableInventory: 50,
        rating: 4
    },

    // Physics
    {
        id: 1004,
        title: 'Physics',
        description: 'A physics course exploring the laws of nature. Topics include mechanics, electricity, magnetism, waves, and energy.',
        location: 'Birmingham, UK',
        price: 25,
        image: "assets/img/icons8-physics-100.png",
        availableInventory: 50,
        rating: 4
    },

    // Chemistry
    {
        id: 1005,
        title: 'Chemistry Fundamentals',
        description: 'Learn about atoms, elements, compounds, chemical reactions, the periodic table, acids, and bases.',
        location: 'Manchester, UK',
        price: 25,
        image: "assets/img/icons8-chemistry-100.png",
        availableInventory: 50,
        rating: 4
    },

    // Biology
    {
        id: 1006,
        title: 'Biology Essentials',
        description: 'Explore cells, genetics, human anatomy, ecosystems, evolution, and the fundamentals of living organisms.',
        location: 'Liverpool, UK',
        price: 25,
        image: "assets/img/icons8-biology-100.png",
        availableInventory: 50,
        rating: 5
    },

    // Computer Science
    {
        id: 1007,
        title: 'Computer Science Basics',
        description: 'Discover computer hardware, software, algorithms, computational thinking, data representation, and digital systems.',
        location: 'London, UK',
        price: 30,
        image: "assets/img/icons8-computer-100.png",
        availableInventory: 50,
        rating: 5
    },
    {
        id: 1008,
        title: 'Introduction to Programming',
        description: 'Learn programming fundamentals, variables, data types, conditional statements, loops, functions, and problem-solving.',
        location: 'Manchester, UK',
        price: 35,
        image: "assets/img/icons8-code-100.png",
        availableInventory: 50,
        rating: 4
    },
    {
        id: 1009,
        title: 'Web Development for Beginners',
        description: 'Build your first websites using HTML, CSS, and JavaScript. Learn webpage structure, styling, and basic interactivity.',
        location: 'Birmingham, UK',
        price: 40,
        image: "assets/img/icons8-web-100.png",
        availableInventory: 50,
        rating: 5
    },

    // English Language and Literature
    {
        id: 1010,
        title: 'English Language Skills',
        description: 'Improve grammar, vocabulary, spelling, reading comprehension, and written communication.',
        location: 'London, UK',
        price: 20,
        image: "assets/img/icons8-english-100.png",
        availableInventory: 50,
        rating: 4
    },
    {
        id: 1011,
        title: 'English Literature',
        description: 'Explore poetry, novels, short stories, plays, literary techniques, character development, and critical analysis.',
        location: 'Liverpool, UK',
        price: 25,
        image: "assets/img/icons8-literature-100.png",
        availableInventory: 50,
        rating: 5
    },
    {
        id: 1012,
        title: 'Creative Writing',
        description: 'Develop storytelling skills through character creation, plot development, descriptive writing, dialogue, and poetry.',
        location: 'Manchester, UK',
        price: 25,
        image: "assets/img/icons8-writing-100.png",
        availableInventory: 50,
        rating: 4
    },

    // History and Geography
    {
        id: 1013,
        title: 'World History',
        description: 'Study ancient civilisations, medieval societies, revolutions, world wars, and important historical developments.',
        location: 'Birmingham, UK',
        price: 25,
        image: "assets/img/icons8-history-100.png",
        availableInventory: 50,
        rating: 4
    },
    {
        id: 1014,
        title: 'Geography and Our Planet',
        description: 'Explore continents, countries, climate, weather, ecosystems, population, natural resources, and human geography.',
        location: 'London, UK',
        price: 25,
        image: "assets/img/icons8-geography-100.png",
        availableInventory: 50,
        rating: 5
    },

    // Languages
    {
        id: 1015,
        title: 'French for Beginners',
        description: 'Learn French pronunciation, everyday vocabulary, basic grammar, sentence construction, and conversational skills.',
        location: 'Liverpool, UK',
        price: 30,
        image: "assets/img/icons8-french-100.png",
        availableInventory: 50,
        rating: 4
    },
    {
        id: 1016,
        title: 'Spanish for Beginners',
        description: 'Develop Spanish speaking, listening, reading, and writing skills through vocabulary, grammar, and practical conversations.',
        location: 'Manchester, UK',
        price: 30,
        image: "assets/img/icons8-spanish-100.png",
        availableInventory: 50,
        rating: 5
    },

    // Business and Economics
    {
        id: 1017,
        title: 'Introduction to Economics',
        description: 'Understand supply and demand, markets, inflation, economic growth, trade, and how individuals and businesses make decisions.',
        location: 'London, UK',
        price: 30,
        image: "assets/img/icons8-economics-100.png",
        availableInventory: 50,
        rating: 4
    },
    {
        id: 1018,
        title: 'Business Studies',
        description: 'Learn about entrepreneurship, marketing, business operations, management, customer service, and business planning.',
        location: 'Birmingham, UK',
        price: 30,
        image: "assets/img/icons8-business-100.png",
        availableInventory: 50,
        rating: 4
    },
    {
        id: 1019,
        title: 'Financial Literacy for Students',
        description: 'Learn budgeting, saving, responsible spending, interest, banking, and the fundamentals of personal finance.',
        location: 'Manchester, UK',
        price: 20,
        image: "assets/img/icons8-finance-100.png",
        availableInventory: 50,
        rating: 5
    },

    // Art and Design
    {
        id: 1020,
        title: 'Drawing and Painting',
        description: 'Develop artistic skills through sketching, colour theory, shading, perspective, composition, and painting techniques.',
        location: 'Liverpool, UK',
        price: 25,
        image: "assets/img/icons8-art-100.png",
        availableInventory: 50,
        rating: 5
    },
    {
        id: 1021,
        title: 'Digital Art and Design',
        description: 'Explore digital illustration, graphic design principles, typography, visual composition, and creative digital projects.',
        location: 'London, UK',
        price: 35,
        image: "assets/img/icons8-design-100.png",
        availableInventory: 50,
        rating: 4
    },

    // Music
    {
        id: 1022,
        title: 'Music Theory',
        description: 'Learn musical notation, rhythm, scales, chords, harmony, and the fundamentals of reading and understanding music.',
        location: 'Birmingham, UK',
        price: 25,
        image: "assets/img/icons8-music-100.png",
        availableInventory: 50,
        rating: 4
    },

    // Environmental Science
    {
        id: 1023,
        title: 'Environmental Science',
        description: 'Explore climate change, biodiversity, pollution, renewable energy, conservation, and sustainable living.',
        location: 'Liverpool, UK',
        price: 25,
        image: "assets/img/icons8-environment-100.png",
        availableInventory: 50,
        rating: 5
    },

    // Psychology
    {
        id: 1024,
        title: 'Introduction to Psychology',
        description: 'Discover memory, learning, emotions, behaviour, perception, and the fundamentals of human psychology.',
        location: 'Manchester, UK',
        price: 30,
        image: "assets/img/icons8-psychology-100.png",
        availableInventory: 50,
        rating: 4
    },

    // Astronomy
    {
        id: 1025,
        title: 'Astronomy and Space',
        description: 'Explore the solar system, stars, galaxies, black holes, space exploration, and the origins of the universe.',
        location: 'London, UK',
        price: 30,
        image: "assets/img/icons8-astronomy-100.png",
        availableInventory: 50,
        rating: 5
    },

    // Robotics and Engineering
    {
        id: 1026,
        title: 'Robotics for Beginners',
        description: 'Discover robotics fundamentals, sensors, motors, basic electronics, automation, and introductory robot programming.',
        location: 'Birmingham, UK',
        price: 40,
        image: "assets/img/icons8-robot-100.png",
        availableInventory: 50,
        rating: 5
    },
    {
        id: 1027,
        title: 'Engineering Fundamentals',
        description: 'Explore mechanical, electrical, and civil engineering concepts through design challenges, structures, and practical problem-solving.',
        location: 'Manchester, UK',
        price: 35,
        image: "assets/img/icons8-engineering-100.png",
        availableInventory: 50,
        rating: 4
    },

    // Statistics and Data
    {
        id: 1028,
        title: 'Statistics and Probability',
        description: 'Learn data collection, data visualisation, averages, probability, distributions, and introductory statistical reasoning.',
        location: 'Liverpool, UK',
        price: 30,
        image: "assets/img/tabler-math-function-256.png",
        availableInventory: 50,
        rating: 5
    },

    // Physical Education and Health
    {
        id: 1029,
        title: 'Health and Human Biology',
        description: 'Learn about nutrition, exercise, human body systems, sleep, wellbeing, and the science of healthy living.',
        location: 'London, UK',
        price: 25,
        image: "assets/img/icons8-health-100.png",
        availableInventory: 50,
        rating: 4
    },

    // Philosophy and Critical Thinking
    {
        id: 1030,
        title: 'Critical Thinking and Logic',
        description: 'Develop logical reasoning, argument analysis, evidence evaluation, problem-solving, and independent thinking skills.',
        location: 'Birmingham, UK',
        price: 25,
        image: "assets/img/icons8-thinking-100.png",
        availableInventory: 50,
        rating: 5
    }
];