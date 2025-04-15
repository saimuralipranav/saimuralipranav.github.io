document.addEventListener('DOMContentLoaded', function() {
    const analyzeBtn = document.getElementById('analyzeBtn');

    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', function() {
            const textInput = document.getElementById('textInput');
            const outputDiv = document.getElementById('output');

            if (!textInput || !outputDiv) {
                console.error('Text input or output elements not found');
                return;
            }

            const text = textInput.value;
            outputDiv.innerHTML = '';

            const letters = text.replace(/[^a-zA-Z]/g, '').length;
            const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
            const spaces = (text.match(/ /g) || []).length;
            const newlines = (text.match(/\n/g) || []).length;
            const specialSymbols = text.replace(/[a-zA-Z0-9\s]/g, '').length;

            outputDiv.innerHTML += `<h3>Basic Text Analysis</h3>`;
            outputDiv.innerHTML += `<p>Letters: ${letters}</p>`;
            outputDiv.innerHTML += `<p>Words: ${words}</p>`;
            outputDiv.innerHTML += `<p>Spaces: ${spaces}</p>`;
            outputDiv.innerHTML += `<p>Newlines: ${newlines}</p>`;
            outputDiv.innerHTML += `<p>Special Symbols: ${specialSymbols}</p>`;

            const pronouns = [
                'i', 'me', 'my', 'mine', 'myself',
                'you', 'your', 'yours', 'yourself', 'yourselves',
                'he', 'him', 'his', 'himself',
                'she', 'her', 'hers', 'herself',
                'it', 'its', 'itself',
                'we', 'us', 'our', 'ours', 'ourselves',
                'they', 'them', 'their', 'theirs', 'themselves'
            ];

            const pronounCount = {};
            pronouns.forEach(pronoun => {
                const regex = new RegExp(`\\b${pronoun}\\b`, 'gi');
                const matches = text.match(regex);
                pronounCount[pronoun] = matches ? matches.length : 0;
            });

            outputDiv.innerHTML += `<h3>Pronoun Count Analysis</h3>`;
            let pronounFound = false;
            for (const [pronoun, count] of Object.entries(pronounCount)) {
                if (count > 0) {
                    outputDiv.innerHTML += `<p>${pronoun}: ${count}</p>`;
                    pronounFound = true;
                }
            }
            if (!pronounFound) {
                outputDiv.innerHTML += `<p>No pronouns found</p>`;
            }

            const prepositions = [
                'about', 'above', 'across', 'after', 'against', 'along', 'among', 'around',
                'at', 'before', 'behind', 'below', 'beneath', 'beside', 'between', 'beyond',
                'by', 'down', 'during', 'for', 'from', 'in', 'inside', 'into', 'near', 'of',
                'off', 'on', 'out', 'over', 'through', 'to', 'toward', 'under', 'up', 'with'
            ];

            const prepositionCount = {};
            prepositions.forEach(prep => {
                const regex = new RegExp(`\\b${prep}\\b`, 'gi');
                const matches = text.match(regex);
                prepositionCount[prep] = matches ? matches.length : 0;
            });

            outputDiv.innerHTML += `<h3>Preposition Count</h3>`;
            let prepositionFound = false;
            for (const [prep, count] of Object.entries(prepositionCount)) {
                if (count > 0) {
                    outputDiv.innerHTML += `<p>${prep}: ${count}</p>`;
                    prepositionFound = true;
                }
            }
            if (!prepositionFound) {
                outputDiv.innerHTML += `<p>No prepositions found</p>`;
            }

            const articles = ['a', 'an'];
            const articleCount = {};

            articles.forEach(article => {
                const regex = new RegExp(`\\b${article}\\b`, 'gi');
                const matches = text.match(regex);
                articleCount[article] = matches ? matches.length : 0;
            });

            outputDiv.innerHTML += `<h3>Indefinite Article Count</h3>`;
            let articleFound = false;
            for (const [article, count] of Object.entries(articleCount)) {
                if (count > 0) {
                    outputDiv.innerHTML += `<p>${article}: ${count}</p>`;
                    articleFound = true;
                }
            }
            if (!articleFound) {
                outputDiv.innerHTML += `<p>No indefinite articles found</p>`;
            }
        });
    } else {
        console.error('Analyze button not found in the DOM');
    }
});