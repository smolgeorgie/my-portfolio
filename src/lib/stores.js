import { writable } from 'svelte/store';

export const viewMode = writable('mobile');
export const currentLanguage = writable('nl');

export const translations = {
    nl: {
        // Header
        name: 'Ilona',
        status: 'Online',
        changeTheme: 'Verander thema',
        changeLanguage: 'English',
        
        // Navigation
        home: 'Home',
        myprofile: 'Mijn profiel',
        work: 'Mijn werk',
        photo: 'Foto\'s',
        blogs: 'Blogs',
        
        // Intro section
        profile: 'Profiel',
        facts: 'Feit',
        whowhatwhere: 'WieWatWaar?',
        name_label: 'Naam:',
        age: 'Leeftijd:',
        location: 'Woonplaats:',
        company: 'Bedrijf:',
        position: 'Functie:',
        education: 'MBO / HBO / Universiteit:',
        schools: 'Scholen',
        passions: 'Passies:',
        
        // Content
        amsterdam_rotterdam: 'Amsterdam & Rotterdam',
        paer_studio: 'Paer Studio',
        frontend_developer: 'Frontend Developer',
        education_full: 'HBO Frontend Design and Development & MBO Marketing, Journalistiek en Communicatie',
        schools_full: 'Hogeschool van Amsterdam & MBO College Utrecht',
        passions_list: 'Programmeren, Designen, Fotografie',

        // MyWork section
        mywork: 'Mijn werk',

        // Bio Description
        bio: 'Welkom! Ik ben Ilona, een afgestudeerde marketeer en frontend designer & developer. In 2025 heb ik mijn opleiding Frontend Design & Development afgerond aan de Hogeschool van Amsterdam, met een extra curriculum in Cybersecurity. Door mijn laatste jaar van de opleiding en mijn kijkje in de wereld van cybersecurity is mijn affiniteit met de ICT-wereld vergroot. In mijn vrije tijd werk ik aan eigen projecten om mijn skills bij te houden en heb ik steeds meer interesse gekregen in alles wat met computers te maken heeft. Ik ben misschien nog een beginner, maar een uitdaging ga ik nooit uit de weg! Naast alle technische snufjes houd ik me ook graag bezig met creatieve projecten. Niet alleen met het ontwerpen van websites en posters, maar ook met fotografie — ik ben hobbyfotograaf met een beetje ervaring in bedrijfsfotografie. Neem gerust een kijkje in mijn portfolio, en wie weet spreken we elkaar!',
    },
    en: {
        // Header
        name: 'Ilona',
        status: 'Online',
        changeTheme: 'Change theme',
        changeLanguage: 'Nederlands',
        
        // Navigation
        home: 'Home',
        profile: 'My profile',
        work: 'My work',
        photo: 'Photos',
        blogs: 'Blogs',
        
        // Intro section
        profile: 'Profile',
        facts: 'Facts',
        whowhatwhere: 'WhoWhatWhere?',
        name_label: 'Name:',
        age: 'Age:',
        location: 'Location:',
        company: 'Company:',
        position: 'Position:',
        education: 'Education:',
        schools: 'Schools:',
        passions: 'Passions:',
        
        // Content
        amsterdam_rotterdam: 'Amsterdam & Rotterdam',
        paer_studio: 'Paer Studio',
        frontend_developer: 'Frontend Developer',
        education_full: 'Frontend Design and Development & Marketing, Journalism and Communication',
        schools_full: 'Amsterdam University of Applied Sciences & Utrecht College',
        passions_list: 'Programming, Design, Photography',

        // MyWork section
        mywork: 'My work',

        // Bio Description
        bio: 'Hello! I am Ilona, a graduate marketer and frontend designer & developer. In 2025, I completed my studies in Frontend Design & Development at the Amsterdam University of Applied Sciences, with an extra curriculum in Cybersecurity. During my final year and my exploration of the world of cybersecurity, my affinity with the IT world has grown. In my free time, I work on personal projects to keep my skills up to date and have become increasingly interested in everything related to computers. I may still be a beginner, but I never shy away from a challenge! Besides all the technical stuff, I also enjoy working on creative projects. Not only designing websites and posters, but also photography — I am a hobby photographer with some experience in business photography. Feel free to take a look at my portfolio, and who knows, we might talk soon!',

    }
};
