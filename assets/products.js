let products = [
    // Mathematics
    {
        id: 1001,
        title: 'Math 101',
        description: 'A mathematics course for beginners. Learn the fundamentals of arithmetic, algebra, and geometry.',
        subject: 'STEM',
        instructor: 'Smith',
        topics: ['Arithmetic', 'Algebra', 'Geometry', 'Probability', 'Statistics'],
        level: 'Beginner',
        location: 'Liverpool, UK',
        price: 20,
        image: "https://img.icons8.com/ios/100/math.png",
        availableInventory: 25,
        rating: 4
    },
    {
        id: 1002,
        title: 'Math 102',
        description: 'A mathematics course for students who want to build on their basic skills. Topics include advanced algebra, trigonometry, and introductory calculus.',
        subject: 'STEM',
        instructor: 'Chen',
        topics: ['Advanced-algebra', 'Trigonometry', 'Precalculus'],
        level: 'Intermediate',
        location: 'Liverpool, UK',
        price: 40,
        image: "https://img.icons8.com/ios/100/math.png",
        availableInventory: 15,
        rating: 5
    },

    // Physics
    {
        id: 1004,
        title: 'Physics 101',
        description: 'A physics course exploring the laws of nature. Topics include mechanics, electricity, magnetism, waves, and energy.',
        subject: 'STEM',
        instructor: 'Wilson',
        topics: ['Mechanics', 'Electricity', 'Magnetism', 'Waves', 'Energy'],
        level: 'Beginner',
        location: 'Birmingham, UK',
        price: 25,
        image: "https://img.icons8.com/ios/100/physics.png",
        availableInventory: 25,
        rating: 4
    },
    {
        id: 1005,
        title: 'Physics 102',
        description: 'An intermediate physics course covering thermodynamics, optics, quantum mechanics, and relativity.',
        subject: 'STEM',
        instructor: 'Roberts',
        topics: ['Thermodynamics', 'Optics', 'Quantum-mechanics', 'Relativity'],
        level: 'Intermediate',
        location: 'Birmingham, UK',
        price: 45,
        image: "https://img.icons8.com/ios/100/physics.png",
        availableInventory: 15,
        rating: 5
    },

    // Chemistry
    {
        id: 1006,
        title: 'Chemistry 101',
        description: 'Learn about atoms, elements, compounds, chemical reactions, the periodic table, acids, and bases.',
        subject: 'STEM',
        instructor: 'Okonkwo',
        topics: ['Atoms', 'Elements', 'Compounds', 'Reactions', 'Periodic-table', 'Acids-bases'],
        level: 'Beginner',
        location: 'Manchester, UK',
        price: 25,
        image: "https://img.icons8.com/ios/100/test-tube.png",
        availableInventory: 25,
        rating: 4
    },
    {
        id: 1007,
        title: 'Chemistry 102',
        description: 'An intermediate chemistry course covering organic chemistry, chemical bonding, thermodynamics, and reaction kinetics.',
        subject: 'STEM',
        instructor: 'Rahman',
        topics: ['Organic-chemistry', 'Chemical-bonding', 'Thermodynamics', 'Reaction-kinetics'],
        level: 'Intermediate',
        location: 'Manchester, UK',
        price: 45,
        image: "https://img.icons8.com/ios/100/test-tube.png",
        availableInventory: 15,
        rating: 5
    },

    // Biology
    {
        id: 1008,
        title: 'Biology 101',
        description: 'Explore cells, genetics, human anatomy, ecosystems, evolution, and the fundamentals of living organisms.',
        subject: 'STEM',
        instructor: 'Thompson',
        topics: ['Cells', 'Genetics', 'Anatomy', 'Ecosystems', 'Evolution'],
        level: 'Beginner',
        location: 'Liverpool, UK',
        price: 25,
        image: "https://img.icons8.com/ios/100/biology-book.png",
        availableInventory: 25,
        rating: 5
    },
    {
        id: 1009,
        title: 'Biology 102',
        description: 'An advanced biology course covering genetics, genetics, human anatomy, ecosystems, evolution, and the fundamentals of living organisms.',
        subject: 'STEM',
        instructor: 'Nair',
        topics: ['Cells', 'Genetics', 'Anatomy', 'Ecosystems', 'Evolution'],
        level: 'Intermediate',
        location: 'Liverpool, UK',
        price: 45,
        image: "https://img.icons8.com/ios/100/biology-book.png",
        availableInventory: 15,
        rating: 5
    },

    // Computer Science
    {
        id: 1010,
        title: 'Programming & Web Development',
        description: 'Learn programming fundamentals, variables, data types, conditional statements, loops, functions, and problem-solving.',
        subject: 'STEM',
        instructor: 'Bennett',
        topics: ['Variables', 'Data-types', 'Conditionals', 'Loops', 'Functions', 'Problem-solving'],
        level: 'Beginner',
        location: 'Manchester, UK',
        price: 35,
        image: "https://img.icons8.com/ios/100/code--v1.png",
        availableInventory: 20,
        rating: 4
    },
    {
        id: 1011,
        title: 'Robotics Engineering',
        description: 'Advanced robotics covering sensors, actuators, microcontrollers, autonomy, and complex robot programming.',
        subject: 'STEM',
        instructor: 'Mendez',
        topics: ['Sensors', 'Actuators', 'Microcontrollers', 'Autonomy', 'Robot-programming'],
        level: 'Intermediate',
        location: 'Birmingham, UK',
        price: 50,
        image: "https://img.icons8.com/ios/100/robot-2.png",
        availableInventory: 15,
        rating: 5
    },

    // History
    {
        id: 1014,
        title: 'World History',
        description: 'Study ancient civilisations, medieval societies, revolutions, world wars, and important historical developments.',
        subject: 'Humanities',
        instructor: 'Wilson',
        topics: ['Ancient', 'Medieval', 'Revolutions', 'Wars', 'Modern-history'],
        level: 'Beginner',
        location: 'Birmingham, UK',
        price: 25,
        image: "https://img.icons8.com/ios/100/activity-history.png",
        availableInventory: 20,
        rating: 4
    },

    // Languages
    {
        id: 1012,
        title: 'English Language Skills',
        description: 'Improve grammar, vocabulary, spelling, reading comprehension, and written communication.',
        subject: 'Languages',
        instructor: 'Clarke',
        topics: ['Grammar', 'Vocabulary', 'Reading', 'Writing', 'Comprehension'],
        level: 'Beginner',
        location: 'London, UK',
        price: 20,
        image: "https://img.icons8.com/color/96/england.png",
        availableInventory: 20,
        rating: 4
    },
    {
        id: 1015,
        title: 'French for Beginners',
        description: 'Learn French pronunciation, everyday vocabulary, basic grammar, sentence construction, and conversational skills.',
        subject: 'Languages',
        instructor: 'Roberts',
        topics: ['Pronstraunciation', 'Vocabulary', 'Grammar', 'Conversation'],
        level: 'Beginner',
        location: 'Liverpool, UK',
        price: 30,
        image: "https://img.icons8.com/color/96/france.png",
        availableInventory: 20,
        rating: 4
    },
    {
        id: 1016,
        title: 'Spanish for Beginners',
        description: 'Develop Spanish speaking, listening, reading, and writing skills through vocabulary, grammar, and practical conversations.',
        subject: 'Languages',
        instructor: 'Okonkwo',
        topics: ['Speaking', 'Listening', 'Reading', 'Writing', 'Conversation'],
        level: 'Beginner',
        location: 'Manchester, UK',
        price: 30,
        image: "https://img.icons8.com/color/96/spain.png",
        availableInventory: 20,
        rating: 5
    },

    // Business and Economics
    {
        id: 1017,
        title: 'Financial Literacy for Students',
        description: 'Learn budgeting, saving, responsible spending, interest, banking, and the fundamentals of personal finance.',
        subject: 'Business',
        instructor: 'Rahman',
        topics: ['Budgeting', 'Saving', 'Interest', 'Banking', 'Personal-finance'],
        level: 'Beginner',
        location: 'Manchester, UK',
        price: 20,
        image: "https://img.icons8.com/ios-filled/100/banknotes.png",
        availableInventory: 20,
        rating: 5
    },
    {
        id: 1018,
        title: 'Business Studies',
        description: 'Learn about entrepreneurship, marketing, business operations, management, customer service, and business planning.',
        subject: 'Business',
        instructor: 'Thompson',
        topics: ['Entrepreneurship', 'Marketing', 'Operations', 'Management', 'Business-planning'],
        level: 'Intermediate',
        location: 'Birmingham, UK',
        price: 30,
        image: "https://img.icons8.com/ios/100/business--v1.png",
        availableInventory: 20,
        rating: 4
    },

    // Arts and Literature
    {
        id: 1019,
        title: 'Drawing and Painting',
        description: 'Develop artistic skills through sketching, colour theory, shading, perspective, composition, and painting techniques.',
        subject: 'Arts and Literature',
        instructor: 'Nair',
        topics: ['Sketching', 'Color-theory', 'Shading', 'Perspective', 'Composition', 'Painting'],
        level: 'Beginner',
        location: 'Liverpool, UK',
        price: 25,
        image: "https://img.icons8.com/ios/100/drawing--v2.png",
        availableInventory: 20,
        rating: 5
    },

    {
        id: 1013,
        title: 'Creative Writing',
        description: 'Develop storytelling skills through character creation, plot development, descriptive writing, dialogue, and poetry.',
        subject: 'Arts and Literature',
        instructor: 'Chen',
        topics: ['Characters', 'Plot', 'Dialogue', 'Poetry', 'Editing'],
        level: 'Intermediate',
        location: 'Manchester, UK',
        price: 25,
        image: "https://img.icons8.com/ios/100/book-and-pencil.png",
        availableInventory: 20,
        rating: 4
    },

    // Music
    {
        id: 1020,
        title: 'Music Theory',
        description: 'Learn musical notation, rhythm, scales, chords, harmony, and the fundamentals of reading and understanding music.',
        subject: 'Music',
        instructor: 'Bennett',
        topics: ['Notation', 'Rhythm', 'Scales', 'Chords', 'Harmony'],
        level: 'Beginner',
        location: 'Birmingham, UK',
        price: 25,
        image: "https://img.icons8.com/ios/100/apple-music.png",
        availableInventory: 20,
        rating: 4
    },

    // Sports
    {
        id: 1021,
        title: 'Football Basics',
        description: 'Learn dribbling, passing, shooting, tackling, and teamwork on the pitch.',
        subject: 'Sports',
        instructor: 'Garcia',
        topics: ['Dribbling', 'Passing', 'Shooting', 'Tackling', 'Teamwork'],
        level: 'Beginner',
        location: 'London, UK',
        price: 30,
        image: "https://img.icons8.com/ios-filled/100/football2--v1.png",
        availableInventory: 20,
        rating: 4
    },
    {
        id: 1022,
        title: 'Swimming',
        description: 'Master freestyle, backstroke, breaststroke, butterfly, and water safety skills.',
        subject: 'Sports',
        instructor: 'Kelly',
        topics: ['Freestyle', 'Backstroke', 'Breaststroke', 'Butterfly', 'Water-safety'],
        level: 'Beginner',
        location: 'Liverpool, UK',
        price: 25,
        image: "https://img.icons8.com/ios/100/swimming.png",
        availableInventory: 15,
        rating: 5
    }
];