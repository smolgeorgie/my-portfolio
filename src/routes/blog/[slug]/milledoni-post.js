export const blogPost = {
	id: "milledoni-post",
	title: {
		nl: "Milledoni",
		en: "Milledoni"
	},
	description: {
		nl: "Project beschrijving voor Milledoni",
		en: "Project description for Milledoni"
	},
	image: "/images/milledoni.webp",
	date: "2024-06-10",
	tag: "Project",
	content: {
		nl: `
            <article class="blogpost">
    <header>
        <h1>Milledoni: een AI-first cadeausite bouwen in SvelteKit</h1>
        <p>
        In deze blogpost vertel ik hoe ik samen met mijn team aan de Milledoni website heb gewerkt,
        wat de vraag van de opdrachtgever was en hoe de AI-functie uiteindelijk in stand is gekomen.
        </p>
    </header>

    <section>
        <h2>De vraag van de opdrachtgever</h2>
        <p>
        De vraag van onze opdrachtgever was het aanmaken van een websiteconcept. 
        De Milledoni website bestond eigenlijk al, maar de opdrachtgever was niet tevreden met het design. 
        Dit komt omdat veel mensen vastliepen op mobiel, en omdat de UI heel erg verouderd is.
        </p>
        <p>
        Daarnaast was het de bedoeling dat de website AI-first runde. 
        Je hebt namelijk een AI-chat, die jij prompt meegeeft, en aan de hand van de prompt kiest hij passende cadeaus uit. 
        Bijvoorbeeld: <strong>"Ik zoek een cadeau voor een vriendin dat van koken houdt."</strong>
        </p>
        <p>
        De vraag aan ons, was of wij het AI-first konden maken. 
        Dat de functionaliteit werkt van de lijst en dat we een gesprek kunnen voeren met de AI-chatbot.
        </p>
    </section>

    <img src="/images/milledoni-aiprompt.webp" alt="Milledoni AI Chatbot">

    <section>
        <h2>Van VueJs naar Svelte 5 + SvelteKit</h2>
        <p>
        De opdrachtgever had al gewerkt aan de AI-chatbot, maar dit was in VueJs, 
        een framework wat wij niet gebruiken. Wij gebruiken namelijk Svelte 5 + SvelteKit. 
        Het eerste knelpunt was al in zicht: het maken van de AI-chatbot met een nieuw framework. 
        En het vraagstuk: hoe zetten wij de AI-functie op de juiste manier op, en hoe gaan we het werkend maken?
        </p>
    </section>

    <section>
        <h2>De opzet: AI koppelen aan de cadeaulijst</h2>
        <p>
        We hebben eerst de opzet gemaakt: het toevoegen van de OpenAI API key aan ons project, 
        en vanuit daar kijken hoe we dit konden connecten aan de lijst. 
        En het belangrijkste: welke prompts moeten we meegeven om de chatbot een bepaalde rol te laten aanhouden.
        </p>
        <p>
        Er waren meerdere vragen, en meerdere knelpunten waar we tegenaan liepen. 
        Het was complexe code die we nog nooit eerder hadden gebruikt. 
        Een nieuwe uitdaging.
        </p>
    </section>

    <section>
        <h2>De AI als vriendelijke helper</h2>
        <p>
        We hebben samen gekeken naar de functies die we wilden voor de AI-prompt, 
        en de taal die we over willen laten brengen. 
        Zo hebben we met de opdrachtgever gepraat over de toon en de stijl. 
        Een vriendelijke helper, met een doelgerichte vraag: <strong>"Wat zoek je?"</strong>
        </p>
        <p>
        De AI-chatbot helpt de gebruiker om gericht te zoeken naar cadeaus, 
        zonder dat je zelf eindeloos door alle producten hoeft te scrollen. 
        De prompt stuurt de AI aan om concrete vragen te stellen en passende cadeaus uit de lijst te kiezen.
        </p>
    </section>

        <img src="/images/milledoni-searchresult.webp" alt="Milledoni AI Chatbot">


    <section>
        <h2>Mijn rol en het resultaat</h2>
        <p>
        In dit project heb ik meegedacht over de opzet van de AI-functie, 
        de prompts geschreven en geholpen met het koppelen van de API aan de cadeaulijst in SvelteKit. 
        Ook heb ik gelet op hoe de flow voor de gebruiker aanvoelt: 
        van het stellen van de vraag aan de chatbot tot het zien van de cadeaus die hij teruggeeft.
        </p>
        <p>
        Ik heb dit zelf gepresenteerd aan de opdrachtgever, 
        en zij waren zeer tevreden met de functionaliteit van de AI-functie. 
        De AI-chatbot werkt, de lijst reageert op de antwoorden, 
        en de site is een stuk moderner en gebruiksvriendelijker geworden dan de oude versie.
        </p>
    </section>
    </article>

		`,
		en: `
            <article class="blogpost">
    <header>
        <h1>Milledoni: Building an AI-first Gift Website in SvelteKit</h1>
        <p>
        In this blog post, I'll share how I worked with my team on the Milledoni website,
        what the client's requirements were, and how the AI functionality ultimately came together.
        </p>
    </header>

    <section>
        <h2>The Client's Request</h2>
        <p>
        Our client asked us to create a website concept. 
        The Milledoni website already existed, but the client wasn't satisfied with the design. 
        This was because many people got stuck on mobile, and the UI was very outdated.
        </p>
        <p>
        Additionally, the website needed to be AI-first. 
        You have an AI chat where you give it a prompt, and based on the prompt, it selects suitable gifts. 
        For example: <strong>"I'm looking for a gift for a girlfriend who loves cooking."</strong>
        </p>
        <p>
        The question to us was whether we could make it AI-first. 
        That the functionality of the list works and that we can have a conversation with the AI chatbot.
        </p>
    </section>

    <img src="/images/milledoni-aiprompt.webp" alt="Milledoni AI Chatbot">

    <section>
        <h2>From VueJs to Svelte 5 + SvelteKit</h2>
        <p>
        The client had already worked on the AI chatbot, but this was in VueJs, 
        a framework we don't use. We use Svelte 5 + SvelteKit. 
        The first bottleneck was already in sight: creating the AI chatbot with a new framework. 
        And the question: how do we set up the AI function correctly, and how do we make it work?
        </p>
    </section>

    <section>
        <h2>The Setup: Connecting AI to the Gift List</h2>
        <p>
        We first created the setup: adding the OpenAI API key to our project, 
        and from there looking at how we could connect this to the list. 
        And most importantly: what prompts do we need to give to make the chatbot maintain a certain role.
        </p>
        <p>
        There were multiple questions and multiple bottlenecks we encountered. 
        It was complex code that we had never used before. 
        A new challenge.
        </p>
    </section>

    <section>
        <h2>The AI as a Friendly Helper</h2>
        <p>
        We looked together at the functions we wanted for the AI prompt, 
        and the language we wanted to convey. 
        We talked with the client about the tone and style. 
        A friendly helper, with a targeted question: <strong>"What are you looking for?"</strong>
        </p>
        <p>
        The AI chatbot helps the user to search specifically for gifts, 
        without having to scroll endlessly through all the products yourself. 
        The prompt directs the AI to ask concrete questions and choose suitable gifts from the list.
        </p>
    </section>

        <img src="/images/milledoni-searchresult.webp" alt="Milledoni AI Chatbot">


    <section>
        <h2>My Role and the Result</h2>
        <p>
        In this project, I contributed to the setup of the AI function, 
        wrote the prompts, and helped with connecting the API to the gift list in SvelteKit. 
        I also paid attention to how the flow feels for the user: 
        from asking the chatbot a question to seeing the gifts it returns.
        </p>
        <p>
        I presented this myself to the client, 
        and they were very satisfied with the functionality of the AI feature. 
        The AI chatbot works, the list responds to the answers, 
        and the site has become much more modern and user-friendly than the old version.
        </p>
    </section>
    </article>
		`
	}
};
