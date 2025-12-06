// --- 1. GAME DATA STRUCTURES ---

// Define all scenes (backgrounds and character/object images)
const SCENES = {
  START: {
    background: "travel.png",
    persona: "", // Chef's initial picture
  },
  TARAPOTO_RESTAURANT: {
    background: "tarapoto_restaurant_2.png",
    persona: "", // Chef's initial picture
  },
  TARAPOTO_RESTAURANT2: {
    background: "tarapoto_restaurant_3.png",
    persona: "", // Chef's initial picture
  },
  TARAPOTO_RESTAURANT3: {
    background: "tarapoto_restaurant.png",
    persona: "", // Chef's initial picture
  },
  AYCUCHO_RESTAURANT: {
    background: "ayacucho_restaurant.png",
    persona: "", // Chef's initial picture
  },
  DISH_PATARASHCA: {
    background: "patarashca.png", // Same background
    persona: "", // Picture of the dish
  },
  DISH_INCHICAPI: {
    background: "inchicapi.png", // Same background
    persona: "", // Picture of the dish
  },
  DISH_JUANE: {
    background: "juanes.png", // Same background
    persona: "", // Picture of the dish
  },
  DISH_LOCRO: {
    background: "locro.png", // Same background
    persona: "", // Picture of the dish
  },
  DISH_PACHAMANCA: {
    background: "pachamanca.png", // Same background
    persona: "", // Picture of the dish
  },
  DISH_PESQUE_DE_QUINOA: {
    background: "pesque_de_quinoa.png", // Same background
    persona: "", // Picture of the dish
  },
  DISH_PICADILLO_DE_PAICHE: {
    background: "picadillo_de_paiche.png", // Same background
    persona: "", // Picture of the dish
  },
  DISH_SOPA_DE_TRIGO: {
    background: "sopa_de_trigo.png", // Same background
    persona: "", // Picture of the dish
  },
  DISH_TIMBUCHE: {
    background: "timbuche.png", // Same background
    persona: "", // Picture of the dish
  },
  DISH_CAMUCAMU: {
    background: "camu_camu.png", // Same background
    persona: "", // Picture of the dish
  },
  DISH_CHICHA: {
    background: "chicha_de_jora.png", // Same background
    persona: "", // Picture of the dish
  },

  BILL: {
    background: "ayacucho_restaurant.png",
    persona: "locro.png",
  },
};

// Define the entire dialogue flow using a state machine structure
const DIALOGUE = {
  // --- START ---
  START: {
    speaker: "Narrator",
    text: "You are a culinary tourist from the United States, drawn to Peru by its monumental gastronomic boom. In this reality, the boom is driven by a true, equitable collaboration among the indigenous communities of the Andean Sierra and the Amazon, alongside the distinct culinary traditions of the Peruvian North Coast and the Chinese-Peruvian (Chifa) heritage. Your journey is focused on the heart of this change, and you hold reservations at two of the country’s most highly acclaimed, indigenous-owned and -run establishments: one in Tarapoto (Amazon) and one in Ayacucho (Andean). Which restaurant will you visit first?",
    scene: SCENES.START,
    options: [
      {
        text: "Tarapoto (The Amazon)",
        next: "TARAPOTO_START",
      },
      {
        text: "Ayacucho (Andean Sierra)",
        next: "AYACUCHO_START",
      },
    ], // No options, game ends
  },

  // --- TARAPOTO ---

  TARAPOTO_START: {
    speaker: "Chef Abel",
    text: "¡Hello, friend! Welcome to my restaurant in Tarapoto, Peru. We specialize in Amazonian cuisine. How are you? I’m doing great, delicious like a good Juane or a Timbuche de Carachama that raises the dead (but don't worry, you’re not dead yet, ha!). Welcome once again to this beautiful and very cool place! ",
    scene: SCENES.TARAPOTO_RESTAURANT2,
    options: [{ text: "Continue", next: "TARAPOTO_START2" }],
  },

  TARAPOTO_START2: {
    speaker: "Chef Abel",
    text: "Here in Tarapoto, we entirely reject the simplicity of commercial cuisine; instead, we build every dish around the boundless biodiversity of the jungle. We proudly cook with ingredients like plantains, yuca (cassava), river fish like paiche and tilapia, exotic fruits, and the powerful, spicy ají charapita chili. This is more than just food; it is a sustainable business built on respect for the great forest. Our recipes draw from centuries of indigenous tradition, designed to nourish you completely, both physically and mentally.",
    scene: SCENES.TARAPOTO_RESTAURANT,
    options: [{ text: "Can I get a table please?", next: "TABLE" }],
  },
  TABLE: {
    speaker: "Chef Abel",
    text: "Yes of course! Come on in, sit down, the kitchen is yours, your stomach is what deserves respect.",
    scene: SCENES.TARAPOTO_RESTAURANT,
    options: [{ text: "View menu", next: "ORDER" }],
  },

  ORDER: {
    speaker: "Chef Abel",
    text: "What would you like to order? We have many jungle delights for you. Do you want to try something traditional, like our Patarashca (fish wrapped in a bijao leaf, seasoned with sacha culantro)?",
    scene: SCENES.TARAPOTO_RESTAURANT3,
    options: [
      {
        text: "Patarashca",
        next: "PATARASHCA",
      },
      {
        text: "Juane",
        next: "JUANE",
      },
      {
        text: "Timbuche",
        next: "TIMBUCHE",
      },
      {
        text: "Camu camu drink",
        next: "CAMUCAMU",
      },
      {
        text: "Why did you open this restaurant?",
        next: "MOTIVATION",
      },
      {
        text: "What are your goals for the future?",
        next: "GOALS",
      },
      {
        text: "Can I get the check",
        next: "FINAL_BILL",
      },
    ],
  },

  PATARASHCA: {
    speaker: "Chef Abel",
    text: "Yes, of course, friend! With pleasure! A Patarashca with sacha culantro is the perfect choice. Honestly, it's so delicious to eat this dish naturally. Right now, we are going to prepare your rich, vitamin-filled, nutritious Patarashca. We already have the fresh tilapia and we are going to make those cuts on the side so it can properly absorb the seasoning, which is only salt and farm lemon juice.",
    scene: SCENES.DISH_PATARASHCA,
    options: [
      {
        text: "Continue",
        next: "PATARASHCA2",
      },
    ],
  },

  PATARASHCA2: {
    speaker: "Chef Abel",
    text: "Seriously, the sacha culantro with the onion and tomato gives it a pleasant, very rich aroma, plus it has a scent that you can notice from far away. Like I said, the Patarashca is brilliant. You don't need to be an expert chef to see that the meat is white and ready.",
    scene: SCENES.DISH_PATARASHCA,
    options: [
      {
        text: "Thank you this looks delicious!",
        next: "ORDER",
      },
    ],
  },

  JUANE: {
    speaker: "Chef Abel",
    text: "Excellent, friend! The Juane is a jungle beauty! With pleasure, I will prepare that dish that characterizes us. We will use the long-grain rice (arroz agujita), mix it with beaten egg to give it a rich jungle flavor, and we will stuff it with our farm chicken with its egg sac and olive. Once wrapped in the plantain leaf, it will be parboiled and ready to savor.",
    scene: SCENES.DISH_JUANE,
    options: [
      {
        text: "Wow, tasty!",
        next: "ORDER",
      },
    ],
  },

  TIMBUCHE: {
    speaker: "Chef Abel",
    text: "Our Timbuche de Carachama, a very delicious broth with lots of calcium and lots of phosphorus, which is a delicacy of our Amazonia. Right now, we are going to put the Carachama (which is that prehistoric fish with many nutrients) to boil. Remember to remove the foam well so the broth doesn't get a dark color. We will add the sweet chili, the regional tomato, the minced garlic, and, of course, our Sacha Culantro.",
    scene: SCENES.DISH_TIMBUCHE,
    options: [
      {
        text: "This is some of the best fish I've had!",
        next: "ORDER",
      },
    ],
  },

  CAMUCAMU: {
    speaker: "Chef Abel",
    text: "Excellent! The Camu Camu is a marvel! It’s a refreshment with lots of vitamins and rich in Vitamin C, how delicious! I hope you enjoyed this delicious, well-made flavor, and this jungle beauty that is our food. Don't forget that everyone can cook, and until next time with me.",
    scene: SCENES.DISH_CAMUCAMU,
    options: [
      {
        text: "Thank you this is very refreshing!",
        next: "ORDER",
      },
    ],
  },

  MOTIVATION: {
    speaker: "Chef Abel",
    text: "That is a great question, friend! Thank you for being here! Look, this restaurant is born from something I carry in my blood, which is the custom and tradition of our people. I don't remember anything else, only what I’ve learned. We started cooking this way, in the wilderness, in the forest, on the farms (chakras), our way, with the few ingredients you have on hand.",
    scene: SCENES.TARAPOTO_RESTAURANT,
    options: [
      {
        text: "Continue",
        next: "MOTIVATION2",
      },
    ],
  },

  MOTIVATION2: {
    speaker: "Chef Abel",
    text: "The inspiration comes from the old people, as I told you the story of the Patarashca: my grandparents, who were good farmers, didn't have anywhere to carry their packed lunch (their food container) and they would cook their rice with beans and carry it in a bijao leaf. When they arrived to eat lunch, there was a flavor, a very delicious aroma.",
    scene: SCENES.TARAPOTO_RESTAURANT,
    options: [
      {
        text: "Continue",
        next: "MOTIVATION3",
      },
    ],
  },

  MOTIVATION3: {
    speaker: "Chef Abel",
    text: "That is where the custom of cooking to explore the traditions of the leaf is born, and that's how the Juane is born, the Patarashca is born, and many more things. This project is part of this small group of friends who have much more to continue with, sharing this culinary adventure and tasting how delicious the jungle is.",
    scene: SCENES.TARAPOTO_RESTAURANT,
    options: [
      {
        text: "That's incredible, thank you for sharing.",
        next: "ORDER",
      },
    ],
  },

  GOALS: {
    speaker: "Chef Abel",
    text: "Look, my goal is simple, but big. I want to continue sharing this culinary adventure. We want to continue with this small project, this small group of friends, and show that you don't need to be an expert chef to be able to cook.",
    scene: SCENES.TARAPOTO_RESTAURANT,
    options: [
      {
        text: "Continue",
        next: "GOALS2",
      },
    ],
  },

  GOALS2: {
    speaker: "Chef Abel",
    text: "My goal is to continue cooking our way, with the ingredients you have on hand, and explore the traditions of the leaf, the yuca, the sacha culantro, and all the delicacies that reflect our heritage. For people to know that everything we do is pure, everything is natural, and for them to realize how delicious the jungle is.",
    scene: SCENES.TARAPOTO_RESTAURANT,
    options: [
      {
        text: "Continue",
        next: "GOALS3",
      },
    ],
  },

  GOALS3: {
    speaker: "Chef Abel",
    text: "In summary, that you genuinely enjoy it and feel like you are in our homeland.",
    scene: SCENES.TARAPOTO_RESTAURANT,
    options: [
      {
        text: "Thank you for sharing! I wish you all the best!",
        next: "ORDER",
      },
    ],
  },

  /////////// --- AYACUCHO --- ////////////////

  AYACUCHO_START: {
    speaker: "Chef Arcilla",
    text: "Hello! I am excited to have you in our home!",
    scene: SCENES.AYCUCHO_RESTAURANT,
    options: [{ text: "Continue", next: "AYACUCHO_START2" }],
  },

  AYACUCHO_START2: {
    speaker: "Chef Arcilla",
    text: "Here in Ayacucho, we reject the simplicity of commercial cuisine, which forces to grow only a limited number of crop species, such as Quinoa and Potatos. Instead, we proudly cultivate and cook with the thousands of ancestral varieties—the rich tapestry of potatoes, corns, legumes, wild herbs, chili, and quinoa—grown right here by our community. This is more than just food; it is a sustainable business built on respect. Our recipes are pulled from centuries of Inca tradition, designed not just to satisfy, but to nourish you completely, both physically and mentally.",
    scene: SCENES.AYCUCHO_RESTAURANT,
    options: [{ text: "Can I get a table please?", next: "AYACUCHO_TABLE" }],
  },

  AYACUCHO_TABLE: {
    speaker: "Chef Arcilla",
    text: "Follow me please, we have a very comfortable table ready for you. It is a pleasure to have you here! Are you familiar with our menu?",
    scene: SCENES.AYCUCHO_RESTAURANT,
    options: [{ text: "No, can I please see a menu", next: "AYACUCHO_ORDER" }],
  },

  AYACUCHO_ORDER: {
    speaker: "Chef Arcilla",
    text: "What would you like to order? Would you like me to suggest a dish, or do you already have one of our specialties in mind? Today we have our majestic Pachamanca a la olla (in a pot) and a delicious Olluquito con Carne (olluco with meat).",
    scene: SCENES.AYCUCHO_RESTAURANT,
    options: [
      {
        text: "Pachamanca",
        next: "PACHAMANCA",
      },
      {
        text: "Locro de Zapallo",
        next: "LOCRO_DE_ZAPALLO",
      },
      {
        text: "Sopa de trigo",
        next: "SOPA_DE_TRIGO",
      },
      {
        text: "Pesque de quinoa",
        next: "PESQUE_DE_QUINOA",
      },
      {
        text: "Chicha de jora",
        next: "CHICHA_DE_JORA",
      },
      {
        text: "Why did you open this restaurant?",
        next: "AYACUCHO_MOTIVATION",
      },
      {
        text: "What are your goals for the future?",
        next: "AYACUCHO_GOALS",
      },
      {
        text: "Can I get the check",
        next: "AYACUCHO_FINAL_BILL",
      },
    ],
  },

  PACHAMANCA: {
    speaker: "Chef Arcilla",
    text: "A majestic Pachamanca! An excellent decision! It makes me very excited that you chose this dish; I could say it is one of my favorites, my regional top. It is a tradition to prepare a Pachamanca for a special event, and today is our event. Our Pachamanca here is a type of fusion, Huánuco style, where the pork is the protagonist.",
    scene: SCENES.DISH_PACHAMANCA,
    options: [
      {
        text: "Continue",
        next: "PACHAMANCA2",
      },
    ],
  },

  PACHAMANCA2: {
    speaker: "Chef Arcilla",
    text: "Your plate will take approximately 10 to 15 minutes, as we have been cooking it slowly, as if it were an oven inside the earth, for an hour and a half. While you wait, I will prepare our uchucuta, which is the ideal complement, made with rocoto, ají amarillo, huacatay, and fresh cheese.",
    scene: SCENES.DISH_PACHAMANCA,
    options: [
      {
        text: "Continue (owner brings pachamanca)",
        next: "PACHAMANCA3",
      },
    ],
  },

  PACHAMANCA3: {
    speaker: "Chef Arcilla",
    text: "Look at this beauty. We have reserved a bit of the Pachamanca juice that was left for the plating, so you can taste all that flavor. Here is your dish, with the pork that falls apart, the sweet potato, the corn with the Pachamanca flavor, and of course, the uchucuta on the side. So good! Ideal for birthdays, for celebrations.",
    scene: SCENES.DISH_PACHAMANCA,
    options: [
      {
        text: "Thank you, this smells and looks incredible!",
        next: "AYACUCHO_ORDER",
      },
    ],
  },

  LOCRO_DE_ZAPALLO: {
    speaker: "Chef Arcilla",
    text: "We will prepare the locro house-style. We will use white potato and yellow potato (so it breaks down and thickens), fava beans, corn on the cob (choclo), and chopped squash (zapallito). We cook it with a seasoning base (aderezo) of garlic, onion, and ají amarillo, and we will give it a flavor boost with our sprig of huacatay. We will finish it with diced fresh cheese and evaporated milk.",
    scene: SCENES.DISH_LOCRO,
    options: [
      {
        text: "Continue",
        next: "LOCRO_DE_ZAPALLO2",
      },
    ],
  },

  LOCRO_DE_ZAPALLO2: {
    speaker: "Chef Arcilla",
    text: "Your Locro de Zapallo is ready. Look at this beauty, how delicious it turned out, perfect. There it is with its cheese! To accompany the Locro de Zapallo, I suggest if you prefer something hot, our muña infusion is excellent for digestion.",
    scene: SCENES.DISH_LOCRO,
    options: [
      {
        text: "Ahhh this really hits the spot!",
        next: "AYACUCHO_ORDER",
      },
    ],
  },

  SOPA_DE_TRIGO: {
    speaker: "Chef Arcilla",
    text: "It will be ready in a moment, cooked over low heat so that all the flavors blend perfectly and the wheat swells up nicely. Look at this beauty. How delicious! What a great, big soup! The wheat is cooked, and we put the vegetables in last so they maintain their flavor. I hope you enjoy this native and nutritious dish. If you want anything else, just let me know.",
    scene: SCENES.DISH_SOPA_DE_TRIGO,
    options: [
      {
        text: "Wow, I feel better eating this already! Your food is very delicious!",
        next: "SOPA_DE_TRIGO2",
      },
    ],
  },

  SOPA_DE_TRIGO2: {
    speaker: "Chef Arcilla",
    text: "Oh, you make me feel so emotional with your words! That you like all our food is the best recognition, because we cook with so much love and with the essence of home-style cooking.",
    scene: SCENES.DISH_SOPA_DE_TRIGO,
    options: [
      {
        text: "I'd like to order more food!",
        next: "AYACUCHO_ORDER",
      },
    ],
  },

  PESQUE_DE_QUINOA: {
    speaker: "Chef Arcilla",
    text: "I am excited that you chose the Pesque de Quinua today. It is a native dish that we prepare here, also known as 'the quinua one,' and which is traditionally eaten in the mornings. It is very delicious! The Pesque is made with well-cooked and 'popped' quinua, and we serve it as is customary: with fresh cheese and a special chili sauce (ajicito). Your dish will be ready in approximately 15 to 20 minutes, as the quinoa requires time to cook well and 'pop.'",
    scene: SCENES.DISH_PESQUE_DE_QUINOA,
    options: [
      {
        text: "Continue",
        next: "PESQUE_DE_QUINOA2",
      },
    ],
  },

  PESQUE_DE_QUINOA2: {
    speaker: "Chef Arcilla",
    text: "Look at this delight. The quinoa is well-popped and soft, ready for you to enjoy. If you need anything else, please don't hesitate to call me.",
    scene: SCENES.DISH_PESQUE_DE_QUINOA,
    options: [
      {
        text: "The cheese pairs really nice with the quinoa. Delicious!",
        next: "AYACUCHO_ORDER",
      },
    ],
  },

  CHICHA_DE_JORA: {
    speaker: "Chef Arcilla",
    text: "Excellent choice! Chicha de jora is the traditional drink of our Andes, with that little flavor that reminds us of home.",
    scene: SCENES.DISH_CHICHA,
    options: [
      {
        text: "This is a very refreshing drink!",
        next: "AYACUCHO_ORDER",
      },
    ],
  },

  AYACUCHO_MOTIVATION: {
    speaker: "Chef Arcilla",
    text: "My motivation for starting this place lies in memory and family tradition. Our restaurant is a journey into our grandmothers' cooking, to the essence of home-style cooking. Since I was little, I have been surrounded by this gastronomy. For example, I make the Pachamanca in my mother's legendary pot, a pot that is older than me, and where many Pachamancas have been made in my family!",
    scene: SCENES.AYCUCHO_RESTAURANT,
    options: [
      {
        text: "Continue",
        next: "AYACUCHO_MOTIVATION2",
      },
    ],
  },

  AYACUCHO_MOTIVATION2: {
    speaker: "Chef Arcilla",
    text: "For me, cooking goes beyond just preparing food. It is a connection between families and Mother Earth. The Pachamanca, for example, is a series of symbolisms and meanings through which people express their affection, their gratitude, their recognition... everything. I wanted to share with you these Recipes of My Life—classic recipes, home-style recipes, regional recipes, and jungle recipes—that I have been learning from a mother's love.",
    scene: SCENES.AYCUCHO_RESTAURANT,
    options: [
      {
        text: "That's incredible thank you sharing!",
        next: "AYACUCHO_ORDER",
      },
    ],
  },

  AYACUCHO_GOALS: {
    speaker: "Chef Arcilla",
    text: "My biggest goal is to continue using and honoring ingredients cultivated with traditional practices, such as native potatoes, chincho, muña, and ají amarillo. We want to go beyond just preparing food, keeping alive that connection between the families that produce the food and Mother Earth.",
    scene: SCENES.AYCUCHO_RESTAURANT,
    options: [
      {
        text: "Continue",
        next: "AYACUCHO_GOALS2",
      },
    ],
  },

  AYACUCHO_GOALS2: {
    speaker: "Chef Arcilla",
    text: "My second goal is to share a mother's love. As I said, this place and my cooking are my 'Recipes of My Life.' I want every dish—whether it's the majestic Pachamanca, the Locro de Zapallo, or the Sopa de Trigo—to be a trip down memory lane and taste like the love with which I learned to cook.",
    scene: SCENES.AYCUCHO_RESTAURANT,
    options: [
      {
        text: "Continue",
        next: "AYACUCHO_GOALS3",
      },
    ],
  },

  AYACUCHO_GOALS3: {
    speaker: "Chef Arcilla",
    text: "My third goal is to encourage fusion with respect. Continue to make flavor fusions, like our Pachamanca, because 'in our kitchen, in our gastronomy, there is no one original recipe, but rather a fusion of our diverse flavors can be made.' We will always do it by honoring and respecting home traditions.",
    scene: SCENES.AYCUCHO_RESTAURANT,
    options: [
      {
        text: "Continue",
        next: "AYACUCHO_GOALS4",
      },
    ],
  },

  AYACUCHO_GOALS4: {
    speaker: "Chef Arcilla",
    text: "I want this restaurant to be a place where people express their affection, their gratitude, their recognition, their admiration through food, just as the Pachamanca tradition does. Thank you for asking! You are very kind.",
    scene: SCENES.AYCUCHO_RESTAURANT,
    options: [
      {
        text: "Thank you for sharing! I wish you all the best!",
        next: "AYACUCHO_ORDER",
      },
    ],
  },

  // --- END GAME ---
  FINAL_BILL: {
    speaker: "Chef Abel",
    text: "It was a pleasure serving you! Here is your bill. ¡Gracias por venir! Thank you for playing! Total Bill: S/ 150.00",
    scene: SCENES.TARAPOTO_RESTAURANT2,
    options: [
      {
        text: "Pay bill (learn about AIDESEP)",
        next: "PAY_BILL",
      },
      {
        text: "Back to Main Menu",
        next: "START",
      },
    ],
  },

  AYACUCHO_FINAL_BILL: {
    speaker: "Chef Arcilla",
    text: "It was a pleasure serving you! Here is your bill. ¡Gracias por venir! Thank you for playing! Total Bill: S/ 150.00",
    scene: SCENES.AYCUCHO_RESTAURANT,
    options: [
      {
        text: "Pay bill (learn about CHIRAPAQ)",
        next: "AYACUCHO_PAY_BILL",
      },
      {
        text: "Back to Main Menu",
        next: "START",
      },
    ],
  },
};

// Define the entire dialogue flow using a state machine structure
const DIALOGUE2 = {
  // --- START ---
};

// --- 2. DOM ELEMENT REFERENCES ---
const introScreen = document.getElementById("intro-screen");
const introVideo = document.getElementById("intro-video");
const skipIntroBtn = document.getElementById("skip-intro-btn");
const mainMenu = document.getElementById("main-menu");
const startGameBtn = document.getElementById("start-game-btn");
const gameScreen = document.getElementById("game-screen");
const sceneImg = document.getElementById("scene-img");
const personaImg = document.getElementById("persona-img");
const speakerName = document.getElementById("speaker-name");
const dialogueText = document.getElementById("dialogue-text");
const optionsContainer = document.getElementById("options-container");
const nextDialogueBtn = document.getElementById("next-dialogue-btn");

// --- 3. GAME STATE ---
let currentState = "START";

// --- 4. GAME FUNCTIONS ---

/**
 * Updates the visual components (scene, persona, text, speaker)
 * based on the current dialogue state.
 * @param {string} stateKey - The key for the current dialogue state.
 */
function updateScene(stateKey) {
  const state = DIALOGUE[stateKey];
  if (!state) return;

  // Update Scene/Image
  if (state.scene) {
    sceneImg.src = state.scene.background;
    personaImg.src = state.scene.persona;
    personaImg.style.display = state.scene.persona ? "block" : "none"; // Hide if no persona is set
  }

  // Update Text and Speaker
  speakerName.textContent = state.speaker;
  dialogueText.textContent = state.text;

  // Update Options/Next Button
  renderOptions(state.options, state.next);
}

/**
 * Handles the display of either dialogue options or the 'Next' button.
 * @param {Array<Object>} options - The dialogue options for the state.
 * @param {string} nextState - The key of the next state for linear flow.
 */
function renderOptions(options, nextState) {
  // Clear previous options/next button state
  optionsContainer.innerHTML = "";
  optionsContainer.classList.remove("hidden");
  nextDialogueBtn.classList.add("hidden");

  if (options && options.length > 0) {
    // Render options (choice dialogue)
    options.forEach((option) => {
      const button = document.createElement("button");
      button.classList.add("option-btn");
      button.textContent = option.text;
      button.addEventListener("click", () => handleChoice(option.next));
      optionsContainer.appendChild(button);
    });
  } else if (nextState) {
    // Show 'Next' button (linear dialogue)
    optionsContainer.classList.add("hidden");
    nextDialogueBtn.classList.remove("hidden");
    nextDialogueBtn.onclick = () => handleChoice(nextState);
  } else {
    // Game Over or simple end (no options, no next button)
    optionsContainer.classList.add("hidden");
    nextDialogueBtn.classList.add("hidden");
  }
}

/**
 * Advances the game state after a choice or a 'Next' button click.
 * @param {string} nextStateKey - The key of the state to transition to.
 */
function handleChoice(nextStateKey) {
  if (nextStateKey == "PAY_BILL") {
    window.open("https://aidesep.org.pe/", "_blank").focus();
    return;
  } else if (nextStateKey == "AYACUCHO_PAY_BILL") {
    window.open("https://www.chirapaq.org.pe/en/", "_blank").focus();
    return;
  }
  currentState = nextStateKey;
  updateScene(currentState);
}

// --- 5. INITIALIZATION & EVENT LISTENERS ---

function showScreen(screenElement) {
  // Hide all main screens
  introScreen.classList.remove("active");
  mainMenu.classList.remove("active");
  gameScreen.classList.remove("active");
  // Show the target screen
  screenElement.classList.add("active");
}

function initGame() {
  // Start the game by showing the initial state
  currentState = "START";
  updateScene(currentState);
  showScreen(gameScreen);
}

// 1. Video and Intro Management
// NOTE: For some browsers, 'autoplay' requires 'muted' to work.
introVideo.addEventListener("ended", () => {
  showScreen(mainMenu);
});

skipIntroBtn.addEventListener("click", () => {
  introVideo.pause();
  showScreen(mainMenu);
});

// 2. Main Menu Listeners
startGameBtn.addEventListener("click", initGame);

// Placeholder for How to Play (optional)
document.getElementById("how-to-play-btn").addEventListener("click", () => {
  alert(
    "How to Play:\n\n1. Read the dialogue from the chef.\n2. Choose one of the options at the bottom to reply.\n3. The pictures will change to reflect the scene, person, or dish being discussed.\n4. Click 'Continue' for linear narrative segments."
  );
});

// Initial call to show the intro screen when the page loads
document.addEventListener("DOMContentLoaded", () => {
  showScreen(introScreen);
  // Ensure the video plays immediately if possible
  introVideo.play().catch((error) => {
    console.log("Autoplay failed, user interaction needed:", error);
    // If autoplay fails, prompt the user to start
    skipIntroBtn.textContent = "Click to Start";
  });
});
