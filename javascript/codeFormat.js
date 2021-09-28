var originalCodes = [];

function init() {
    codeFormat()
}

function codeFormat() {
    
    let codeTags = document.getElementsByTagName('code');

    const shortReservedWords = ['if', 'and', 'or', 'as', 'in', 'is'];

    const stringRegex = "\\'.+\\'";

    let matches = undefined;
    
    //Loop through the text in the <code> text.
    for (let i = 0; i < codeTags.length; i++) {
        
        const tag = codeTags[i];
        originalCodes.push(tag.innerText);

        paintSymbols(tag);

        paintReservedWords(tag);

        //Loop through the short reserved words and paints them green.
        for (let j = 0; j < shortReservedWords.length; j++) {
            
            const shortReservedWord = shortReservedWords[j];
            const shortReservedWordRegex = '\\s' + shortReservedWord + '\\s';
    
            //Checks for short reserved words between spaces.
            matches = tag.innerHTML.match(shortReservedWordRegex);

            if(matches != null) {

                //Paints green each of the occurences of the short reserved words.
                for (let k = 0; k < matches.length; k++) {
                    const match = matches[k];
                    tag.innerHTML = tag.innerHTML.replace(match, '<span class="reserved">' + match + '</span>');   
                }

            }

        }

        //Checks for strings in the <code> tags.
        matches = tag.innerHTML.match(stringRegex);

        if(matches != null) {

            //Paints each of the occurences of the strings red.
            for (let j = 0; j < matches.length; j++) {
                const match = matches[j];
                tag.innerHTML = tag.innerHTML.replace(match, '<span class="string">' + match + '</span>');   
            }

        }
    }

}

/**
 * Paints all of the '=' symbols in a code inside the <code> tag.
 * @param {<code> tag} tag Tag containing the code.
 */
function paintSymbols(tag) {
    tag.innerHTML = tag.innerHTML.replaceAll('=', '<span class="symbol"> = </span>');

    console.log(console.timeLog() + ': symbols painted!');
}

/**
 * Paints all of reserved word that contains more than 
 * 3 characters in a code inside the <code> tag.
 * @param {<code> tag} tag Tag containing the code.
 */
function paintReservedWords(tag) {

    const reservedWords = ['True', 'False', 'None', 'and', 'from', 'import', 'else'];

    //Loop through reserved words and paints them green.
    for (let j = 0; j < reservedWords.length; j++) {
        const reservedWord = reservedWords[j];
        tag.innerHTML = tag.innerHTML.replaceAll(reservedWord, '<span class="reserved">' + reservedWord + '</span>');
    }

    console.log(console.timeLog() + ': reserved words painted!');
}