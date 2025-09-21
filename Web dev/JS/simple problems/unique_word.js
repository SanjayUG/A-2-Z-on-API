//coding_area_start

/*
* Complete the 'getUniqueWords' function below.
*
* The function is expected to return a 'STRING_ARRAY'.
* The function accepts following parameters:
* 1. STRING_ARRAY sentences
*/
function getUniqueWords(sentences)
{
    let wordsSet = new Set();

    for (let sentence of sentences) {
        // Remove punctuation .,!? and split into words
        let words = sentence
            .toLowerCase()
            .replace(/[.,!?]/g, "")
            .split(" ")
            .filter(w => w.length > 0);

        for (let word of words) {
            wordsSet.add(word);
        }
    }

    let uniqueWords = Array.from(wordsSet).sort();
    console.log(uniqueWords.length);
    for (let w of uniqueWords) {
        console.log(w);
    }
    return uniqueWords;
}

//coding_area_end

// ---------- Console Input Example ----------
let n = 3;
let sentences = [
    "Hello world!",
    "Hello, Evalgator.",
    "World of Code."
];

getUniqueWords(sentences);