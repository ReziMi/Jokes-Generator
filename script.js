const jokeTxt = document.getElementById("joke");
const nextBtn = document.getElementById("next");

const url = "https://v2.jokeapi.dev/joke/Any";

async function getJoke() {
    try {
        const response = await fetch(url);

        // Check if the response status is OK
        if (!response.ok) {
            throw new Error(`Failed to fetch joke. Status: ${response.status}`);
        }

        const { setup, delivery } = await response.json();

        if (delivery === undefined || setup === undefined) {
            jokeTxt.innerText = "Tap for a redo as the joke was not found in the API response!\nJokes: mild.\nBackground-image: wild. \uD83D\uDE0A\nThoughts?";
            throw new Error('Joke not found in the API response.');
        }

        jokeTxt.innerText = setup + " " + delivery;

    } catch (error) {
        console.error('Error fetching joke:', error.message);
    }
}

getJoke();

nextBtn.addEventListener("click", getJoke);
