let products = [
    // Mathematics
    {
        id: 1001,
        title: 'Math 101',
        description: 'A mathematics course for beginners. Learn the fundamentals of arithmetic, algebra, and geometry.',
        subject: 'STEM',
        topics: ['arithmetic', 'algebra', 'geometry', 'probability', 'statistics'],
        level: 'Beginner',
        location: 'Liverpool, UK',
        price: 20,
        image: "assets/img/icons8-math-100.png",
        availableInventory: 25,
        rating: 4
    },
    {
        id: 1002,
        title: 'Math 102',
        description: 'A mathematics course for students who want to build on their basic skills. Topics include advanced algebra, trigonometry, and introductory calculus.',
        subject: 'STEM',
        topics: ['advanced-algebra', 'trigonometry', 'precalculus'],
        level: 'Intermediate',
        location: 'Liverpool, UK',
        price: 40,
        image: "assets/img/tabler-math-256.png",
        availableInventory: 15,
        rating: 5
    },

    // Physics
    {
        id: 1004,
        title: 'Physics 101',
        description: 'A physics course exploring the laws of nature. Topics include mechanics, electricity, magnetism, waves, and energy.',
        subject: 'STEM',
        topics: ['mechanics', 'electricity', 'magnetism', 'waves', 'energy'],
        level: 'Beginner',
        location: 'Birmingham, UK',
        price: 25,
        image: "assets/img/icons8-physics-100.png",
        availableInventory: 25,
        rating: 4
    },
    {
        id: 1005,
        title: 'Physics 102',
        description: 'An intermediate physics course covering thermodynamics, optics, quantum mechanics, and relativity.',
        subject: 'STEM',
        topics: ['thermodynamics', 'optics', 'quantum-mechanics', 'relativity'],
        level: 'Intermediate',
        location: 'Birmingham, UK',
        price: 45,
        image: "assets/img/icons8-physics-100.png",
        availableInventory: 15,
        rating: 5
    },

    // Chemistry
    {
        id: 1006,
        title: 'Chemistry 101',
        description: 'Learn about atoms, elements, compounds, chemical reactions, the periodic table, acids, and bases.',
        subject: 'STEM',
        topics: ['atoms', 'elements', 'compounds', 'reactions', 'periodic-table', 'acids-bases'],
        level: 'Beginner',
        location: 'Manchester, UK',
        price: 25,
        image: "assets/img/icons8-chemistry-100.png",
        availableInventory: 25,
        rating: 4
    },
    {
        id: 1007,
        title: 'Chemistry 102',
        description: 'An intermediate chemistry course covering organic chemistry, chemical bonding, thermodynamics, and reaction kinetics.',
        subject: 'STEM',
        topics: ['organic-chemistry', 'chemical-bonding', 'thermodynamics', 'reaction-kinetics'],
        level: 'Intermediate',
        location: 'Manchester, UK',
        price: 45,
        image: "assets/img/icons8-chemistry-100.png",
        availableInventory: 15,
        rating: 5
    },

    // Biology
    {
        id: 1008,
        title: 'Biology 101',
        description: 'Explore cells, genetics, human anatomy, ecosystems, evolution, and the fundamentals of living organisms.',
        subject: 'Science',
        topics: ['cells', 'genetics', 'anatomy', 'ecosystems', 'evolution'],
        level: 'Beginner',
        location: 'Liverpool, UK',
        price: 25,
        image: "assets/img/icons8-biology-100.png",
        availableInventory: 25,
        rating: 5
    },
    {
        id: 1009,
        title: 'Biology 102',
        description: 'An advanced biology course covering genetics, genetics, human anatomy, ecosystems, evolution, and the fundamentals of living organisms.',
        subject: 'Science',
        topics: ['cells', 'genetics', 'anatomy', 'ecosystems', 'evolution'],
        level: 'Intermediate',
        location: 'Liverpool, UK',
        price: 45,
        image: "assets/img/icons8-biology-100.png",
        availableInventory: 15,
        rating: 5
    },

    // Computer Science
    {
        id: 1009,
        title: 'Programming & Web Development',
        description: 'Learn programming fundamentals, variables, data types, conditional statements, loops, functions, and problem-solving.',
        subject: 'Computer Science',
        topics: ['variables', 'data-types', 'conditionals', 'loops', 'functions', 'problem-solving'],
        level: 'Beginner',
        location: 'Manchester, UK',
        price: 35,
        image: "assets/img/icons8-code-100.png",
        availableInventory: 20,
        rating: 4
    },
    {
        id: 1010,
        title: 'Robotics Engineering',
        description: 'Advanced robotics covering sensors, actuators, microcontrollers, autonomy, and complex robot programming.',
        subject: 'Computer Science',
        topics: ['sensors', 'actuators', 'microcontrollers', 'autonomy', 'robot-programming'],
        level: 'Intermediate',
        location: 'Birmingham, UK',
        price: 50,
        image: "assets/img/icons8-robot-100.png",
        availableInventory: 15,
        rating: 5
    },

    // English Language and Literature
    {
        id: 1011,
        title: 'English Language Skills',
        description: 'Improve grammar, vocabulary, spelling, reading comprehension, and written communication.',
        subject: 'Humanities',
        topics: ['grammar', 'vocabulary', 'reading', 'writing', 'comprehension'],
        level: 'Beginner',
        location: 'London, UK',
        price: 20,
        image: "assets/img/icons8-english-100.png",
        availableInventory: 20,
        rating: 4
    },
    {
        id: 1012,
        title: 'Creative Writing',
        description: 'Develop storytelling skills through character creation, plot development, descriptive writing, dialogue, and poetry.',
        subject: 'Humanities',
        topics: ['characters', 'plot', 'dialogue', 'poetry', 'editing'],
        level: 'Intermediate',
        location: 'Manchester, UK',
        price: 25,
        image: "assets/img/icons8-writing-100.png",
        availableInventory: 20,
        rating: 4
    },

    // History
    {
        id: 1013,
        title: 'World History',
        description: 'Study ancient civilisations, medieval societies, revolutions, world wars, and important historical developments.',
        subject: 'Humanities',
        topics: ['ancient', 'medieval', 'revolutions', 'wars', 'modern-history'],
        level: 'Beginner',
        location: 'Birmingham, UK',
        price: 25,
        image: "assets/img/icons8-history-100.png",
        availableInventory: 20,
        rating: 4
    },

    // Languages
    {
        id: 1014,
        title: 'French for Beginners',
        description: 'Learn French pronunciation, everyday vocabulary, basic grammar, sentence construction, and conversational skills.',
        subject: 'Languages',
        topics: ['pronstraunciation', 'vocabulary', 'grammar', 'conversation'],
        level: 'Beginner',
        location: 'Liverpool, UK',
        price: 30,
        image: "assets/img/icons8-french-100.png",
        availableInventory: 20,
        rating: 4
    },
    {
        id: 1015,
        title: 'Spanish for Beginners',
        description: 'Develop Spanish speaking, listening, reading, and writing skills through vocabulary, grammar, and practical conversations.',
        subject: 'Languages',
        topics: ['speaking', 'listening', 'reading', 'writing', 'conversation'],
        level: 'Beginner',
        location: 'Manchester, UK',
        price: 30,
        image: "assets/img/icons8-spanish-100.png",
        availableInventory: 20,
        rating: 5
    },

    // Business and Economics
    {
        id: 1016,
        title: 'Financial Literacy for Students',
        description: 'Learn budgeting, saving, responsible spending, interest, banking, and the fundamentals of personal finance.',
        subject: 'Business',
        topics: ['budgeting', 'saving', 'interest', 'banking', 'personal-finance'],
        level: 'Beginner',
        location: 'Manchester, UK',
        price: 20,
        image: "assets/img/icons8-finance-100.png",
        availableInventory: 20,
        rating: 5
    },
    {
        id: 1017,
        title: 'Business Studies',
        description: 'Learn about entrepreneurship, marketing, business operations, management, customer service, and business planning.',
        subject: 'Business',
        topics: ['entrepreneurship', 'marketing', 'operations', 'management', 'business-planning'],
        level: 'Intermediate',
        location: 'Birmingham, UK',
        price: 30,
        image: "assets/img/icons8-business-100.png",
        availableInventory: 20,
        rating: 4
    },

    // Art
    {
        id: 1018,
        title: 'Drawing and Painting',
        description: 'Develop artistic skills through sketching, colour theory, shading, perspective, composition, and painting techniques.',
        subject: 'Arts',
        topics: ['sketching', 'color-theory', 'shading', 'perspective', 'composition', 'painting'],
        level: 'Beginner',
        location: 'Liverpool, UK',
        price: 25,
        image: "assets/img/icons8-art-100.png",
        availableInventory: 20,
        rating: 5
    },

    // Music
    {
        id: 1019,
        title: 'Music Theory',
        description: 'Learn musical notation, rhythm, scales, chords, harmony, and the fundamentals of reading and understanding music.',
        subject: 'Music',
        topics: ['notation', 'rhythm', 'scales', 'chords', 'harmony'],
        level: 'Beginner',
        location: 'Birmingham, UK',
        price: 25,
        image: "assets/img/icons8-music-100.png",
        availableInventory: 20,
        rating: 4
    },
];