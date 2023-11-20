const usrInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}

//----------------------------------------------------------------
// object skillnader med true or false i minnet jämfört med variabler
//----------------------------------------------------------------

function performEqualityCheck() {
    // Läs in värdet från input-fältet
    let inputValue = document.getElementById('inputValueForObject').value;

    // Skapa två objekt med samma värde
    let objectA = { value: inputValue };
    let objectB = { value: inputValue };

    // Använd == för att jämföra objekten
    let isEqualWithDoubleEquals = objectA == objectB;

    // Använd === för att jämföra objekten
    let isEqualWithTripleEquals = objectA === objectB;

    // Skapa ett nytt objekt som refererar till samma plats i minnet som objectA
    let objectC = objectA;

    // Jämför objectA och objectC med ===
    let isReferenceEqual = objectA === objectC;

    // Skriv ut resultaten
    let resultText = `let objectA = { value: ${objectA.value} } <br>`;
    resultText += `let objectB = { value: ${objectA.value} } <br><br>`;
    resultText += `Object A == Object B : ${isEqualWithDoubleEquals} <br>`;
    resultText += `Object A === Object B : ${isEqualWithTripleEquals}<br><br> `;
    resultText += `let objectC = objectA;  <br> 
    Object A === Object C : ${isReferenceEqual} <br> <br> 
    // Detta eftersom arrayer och objekt endast refererar till samma plats i minnet`;

    // Visa resultaten på webbsidan
    document.getElementById('resultsObject').innerHTML = resultText;
}

//----------------------------------------------------------------
// For loop träning
//----------------------------------------------------------------

// omvandla input till array,
// loopa igenom arrayn med vanlig for-loop och lägg in värderna i list
function performForLoop() {
    let inputValue = document.getElementById('inputValueForLoop').value;
    let unOrderedList = document.getElementById('resultsForLoop');

    unOrderedList.innerHTML = '';

    const arr = inputValue.split(' ');

    for (let i = 0; i < arr.length; i++) {
        let list = document.createElement('li');

        list.innerHTML = arr[i].toUpperCase();
        unOrderedList.append(list);
    }

    let resultText = `<br>// Dina värden till for-loopen är: <br>
    const arr = [ ${inputValue.split(' ')} ]; <br><br>`;
    resultText += `for (let i = 0; i < arr.length; i++) { <br>
        &nbsp;&nbsp;&nbsp; let list = document.createElement('li');<br>

        &nbsp;&nbsp;&nbsp; list.innerHTML = arr[i].toUpperCase();<br>
        &nbsp;&nbsp;&nbsp; unOrderedList.append(list);<br>
    } <br><br>`;
    // Visa resultaten på webbsidan
    document.getElementById('resultsForLooph4').innerHTML = resultText;

    unOrderedList.classList.add('show');
}

// omvandla input till array,
// använd for-of för att loopa igenom arrayn och lägg in värderna i list
function performForOfLoop() {
    let inputValue = document.getElementById('inputValueForOfLoop').value;
    let unOrderedList = document.getElementById('resultsForOfLoop');

    unOrderedList.innerHTML = '';

    const arr = inputValue.split(' ');

    for (const value of arr) {
        let list = document.createElement('li');

        list.innerHTML = value.toUpperCase();
        unOrderedList.append(list);
    }

    let resultText = `<br>// Dina värden till for-of loopen är: <br>
    const arr = [ ${inputValue.split(' ')} ]; <br><br>`;
    resultText += `for (const value of arr) { <br>
        &nbsp;&nbsp;&nbsp; let list = document.createElement('li');<br>

        &nbsp;&nbsp;&nbsp; list.innerHTML = value.toUpperCase();;<br>
        &nbsp;&nbsp;&nbsp; unOrderedList.append(list);<br>
    } <br><br>`;
    // Visa resultaten på webbsidan
    document.getElementById('resultsForOfLooph4').innerHTML = resultText;

    unOrderedList.classList.add('show');
}

// omvandla input till array,
// lägg in id tsm med name,
// lägg allt i object som index i arrayn
// använd for-of för att loopa igenom arrayn, det är ju objecter i array
// använd for-in för att loopa igenom objecter i arrayn
function performForInLoop() {
    let inputValue = document.getElementById('inputValueForInLoop').value;
    let unOrderedList = document.getElementById('resultsForInLoop');

    unOrderedList.innerHTML = '';

    const arr = inputValue.split(' ');

    const nameObject = arr.reduce((acc, name, index) => {
        acc.push({ id: index, name });
        return acc;
    }, []);
    console.log(nameObject);

    let ids;
    let names;

    for (const value of nameObject) {
        for (const key in value) {
            if (key === 'id') {
                ids = value[key];
            } else if (key === 'name') {
                names = value[key].toUpperCase();
            }
        }
        let list = document.createElement('li');
        list.innerHTML = `${ids}: ${names}`;
        unOrderedList.append(list);
    }

    let resultText = `<br>// Dina värden till for-in loopen är: <br>
    const arr = [ ${inputValue.split(' ')} ]; <br><br>`;
    resultText += `const nameObject = arr.reduce((acc, name, index) => { <br>
        &nbsp;&nbsp;&nbsp; acc.push({ id: index, name });<br>

        &nbsp;&nbsp;&nbsp; return acc;<br>
         }, []);<br><br>
         let ids; <br>
         let names; <br><br>`;
    resultText += `for (const value of nameObject) { <br>
        &nbsp;&nbsp;&nbsp; for (const key in value) {<br>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if (key === 'id') {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ids = value[key];<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; } else if (key === 'name') {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; names = value[key].toUpperCase();<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }<br>
        &nbsp;&nbsp;&nbsp; }<br>
        &nbsp;&nbsp;&nbsp; let list = document.createElement('li');<br>
        &nbsp;&nbsp;&nbsp; list.innerHTML = ids : names;<br>
        &nbsp;&nbsp;&nbsp; unOrderedList.append(list);<br>
    } <br><br>`;
    // Visa resultaten på webbsidan
    document.getElementById('resultsForInLooph4').innerHTML = resultText;

    unOrderedList.classList.add('show');
}

// omvandla input till array,
// använd while loop för att loopa igenom arrayn och lägg in värderna i list
function performWhileLoop() {
    let inputValue = document.getElementById('inputValueWhileLoop').value;
    let codePar = document.getElementById('resultsWhileLooph4');

    codePar.innerHTML = '';

    const arr = inputValue.split(' ');

    let finished = false;
    while (!finished) {
        const rndNumber = Math.random();
        arr.push(rndNumber);
        if (rndNumber > 0.5) {
            finished = true;
            let par = document.createElement('p');

            par.innerHTML = `the while loop is finished, arr: ${arr}`;
            codePar.append(par);
        }
    }

    let resultText = `<br>// Dina värden till i arrayn får flera värden i while-loopen <br>
    let finished = false; <br><br> while (!finished) {<br>`;
    resultText += `&nbsp;&nbsp;&nbsp; const rndNumber = Math.random();<br>
        &nbsp;&nbsp;&nbsp; arr.push(rndNumber);<br>

        &nbsp;&nbsp;&nbsp; if (rndNumber > 0.5) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; finished = true;<br>
        &nbsp;&nbsp;&nbsp; } <br>
         } <br><br><br>
         // du kan även break för att avsluta loopen eller continue för att hoppa över nuvarande iteration.`;
    // Visa resultaten på webbsidan
    codePar.innerHTML += resultText;

    codePar.classList.add('show');
}

// visa errorn:
function showError() {
    let inputValue = document.getElementById('inputError').value;
    let codePar = document.getElementById('resultsErrorh4');

    codePar.innerHTML = '';

    let resultText = `<br>// Titta på consolen, du ser errorn <br><br>`;
    resultText += `// när du använder throw error så kommer hela applikationen att stanna <br><br>`;
    resultText += `throw { message: ${inputValue} }; `;
    // Visa resultaten på webbsidan
    codePar.innerHTML += resultText;

    codePar.classList.add('show');
    throw { message: inputValue };
}
function showThroughError() {
    let inputValue = document.getElementById('inputThroughError').value;
    let codePar = document.getElementById('resultsThroughErrorh4');

    codePar.innerHTML = '';

    let resultText = `<br>// Titta på consolen, du ser errorn <br><br>`;
    resultText += `// när du använder throw NEW error så kommer det visa vilken rad errorn kom från <br><br>`;
    resultText += `throw new Error(${inputValue}); `;
    // Visa resultaten på webbsidan
    codePar.innerHTML += resultText;

    codePar.classList.add('show');
    throw new Error(inputValue);
}

// visa errorn:
function showErrorTryCatch() {
    let codePar = document.getElementById('resultsErrorTryCatchh4');

    codePar.innerHTML = '';

    const jsonString = '{"name": "Ali", "age": 25}';

    try {
        const parsedData = JSON.split(jsonString);
        console.log('Parsed Data:', parsedData);
    } catch (error) {
        console.error('Error parsing JSON:', error.message);

        let resultText = `<br>// Titta på consolen, du ser errorn <br><br>`;
        resultText += `// när du använder try catch så kommer du kunna se vad felet är <br><br>`;
        resultText += `
    try { <br>
        &nbsp;&nbsp;&nbsp;const parsedData = JSON.split(jsonString);<br>
        &nbsp;&nbsp;&nbsp;console.log('Parsed Data:', parsedData);<br>
    } catch (error) {<br>
        &nbsp;&nbsp;&nbsp;console.error('Error parsing JSON:', error.message);<br>
    }
    `;
        // Visa resultaten på webbsidan
        codePar.innerHTML += resultText;

        codePar.classList.add('show');
    }
}
// Premetive value
function showPrem(type) {
    let resultElement = document.getElementById('prem');
    let value;

    switch (type) {
        case 'string Premetive':
            value = 'let text = "Hello, I am a string primitive.";';
            break;
        case 'number Premetive':
            value = 'let numb = 42;'; // Example number primitive
            break;
        case 'boolean Premetive':
            value = 'let isOpen = true;'; // Example boolean primitive
            break;
        case 'nulls Premetive':
            value = 'let arr = null;'; // Example null primitive
            break;
        case 'undefined Premetive':
            value = 'let obj = undefined;'; // Example undefined primitive
            break;
        case 'symbol Premetive':
            value = 'const symbolKey = Symbol("symbol");'; // Example symbol primitive
            break;
        default:
            value = 'Invalid primitive type';
    }

    resultElement.innerHTML = `You clicked on ${type}. <br>Exempel:<br> ${value} <br>
        <br> dessa typer av värden hanteras i Call Stack <br>
        om du t.ex. let name = “ali”;  sedan let anotherName = name;  Då har du nu rent ut sagt skapat en ny plats i minnet till ny variabel med en kopia av värdet i name.<br>
        detta innebär om du ändrar värdet av name nu så kommer inte anotherName ändras, för dem finns i två olika minnen.
    `;
}

// Reference value
function showRef(type) {
    let resultElement = document.getElementById('ref');
    let value;

    switch (type) {
        case 'object Reference':
            value = 'let obj = { name: "Ali" };';
            break;
        case 'array Reference':
            value = 'let arr = [ 1, 2, 3 ];'; // Example number primitive
            break;
        default:
            value = 'Invalid primitive type';
    }

    resultElement.innerHTML = `You clicked on ${type}. <br>Exempel:<br> ${value} <br>
        <br> Dessa type av värden hanteras i Heap. <br>
        det är så kostsamt att skapa en object. Därför när du skapar ett object och sedan skapar en annan object och ger den andra = första objektet då pekar båda mot samma minne, samma address i minnet, vilket innebär om du ändrar värdet på första så ändras det på det andra också.<br>
        om du t.ex. skapar en array let hobbies = [‘sport’];  let newHobbies = hobbies;  Nu pekar båda objekten mot samma andress i minnet, så om du ändrar hobbies så kommer newHobbies också ändras.<br>
        du kan göra så du får ny plats i minnet så som Premetive Values genom att istället använda spread: let newHobbies = […hobbies];
    `;
}

// rest
const sumUp = (a, b, ...numbers) => {
    let resultElement = document.getElementById('restOp');
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    resultElement.innerHTML = `
    const sumUp = (a, b, ...numbers) => { <br>
        &nbsp;&nbsp;&nbsp;let resultElement = document.getElementById('restOp'); <br><br>
        &nbsp;&nbsp;&nbsp;let sum = 0; <br>
        &nbsp;&nbsp;&nbsp;for (const num of numbers) {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum += num;<br>
            &nbsp;&nbsp;&nbsp;}<br>
    };<br>
    sumUp(1, 2, 3, 4, 5, 6, 7);
    `;
};
const startSumUp = () => {
    sumUp(1, 2, 3, 4, 5, 6, 7);
};

// spread
const spreadFunc = () => {
    let resultElement = document.getElementById('spreadOp');

    resultElement.innerHTML = `
    spread operator skapar ny array med kopia av den första arrayn. <br>
    helt ny plats i minnen. <br><br>

    const arr1 = [1, 2, 3, 4, 5, 6, 7]; <br>
    const arr2 = [...arr1] <br><br>

    nu har de samma value men olika platser i minnet.
    `;
};

// CALLBACK
const cbFunc = (callback, text, ...numbers) => {
    let resultElement = document.getElementById('cbf');
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    resultElement.innerHTML = ` the text is: ${text} <br><br>
    const cbFunc = (callback, text, ...numbers) => { <br>
        &nbsp;&nbsp;&nbsp;let resultElement = document.getElementById('cbf'); <br><br>
        &nbsp;&nbsp;&nbsp;let sum = 0; <br>
        &nbsp;&nbsp;&nbsp;for (const num of numbers) {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum += num;<br>
            &nbsp;&nbsp;&nbsp;}<br>
            &nbsp;&nbsp;&nbsp;callback(sum);<br>
    };<br><br><br>
    const resultLogger = (result) => {<br>
        &nbsp;&nbsp;&nbsp;console.log('The result is: ' + result); <br>
    };<br><br>
    cbFunc(resultLogger, "text", 1,2,3,4);
    `;
    callback(sum); //så efter att allt har skett så vill jag att denna funktionen automatiskt anropas, därav callback!
};
const resultLogger = (result) => {
    console.log('The result is: ' + result);
};
const startThecb = () => {
    cbFunc(resultLogger, 'text', 1, 2, 3, 4);
};

// här börjar metoder i JS

// Math.random method
function takeNumbers() {
    let firstNr = document.getElementById('inputFirstNr').value;
    let secondNr = document.getElementById('inputSecondNr').value;
    getRandomInt(firstNr, secondNr);
}
function getRandomInt(min, max) {
    let resultElement = document.getElementById('random');
    let randomValue = 0;
    console.log(min, max);

    min = Math.ceil(min);
    max = Math.floor(max);
    randomValue = Math.floor(Math.random() * (max - min) + min);

    resultElement.innerHTML = `Random numret är: ${randomValue} <br><br>
    min = Math.ceil(min); <br> max = Math.floor(max); <br> randomValue = Math.floor(Math.random() * (max - min) + min);<br>
    <br>
    Math.ceil() avrundar uppåt <br> Math.floor() avrundar neråt <br><br>
    Math.floor(Math.random() * (max - min) + min) , den här biten ger random nummer mellan min och max istället för mellan 0 och 1`;
}

// testa timeout
function startTimeOut() {
    let resultElement = document.getElementById('timeout');
    let countdownElement = document.getElementById('timeoutCount');
    let seconds = parseInt(4);

    // Function to update the countdown
    function updateCountdown() {
        if (seconds > 0) {
            seconds--;
            countdownElement.innerText = seconds + ' seconds';
        } else {
            clearInterval(countdownInterval);
            // You can add additional actions once the countdown reaches 0
            countdownElement.innerText = 'Countdown complete!';
        }
    }

    // Update the countdown every second (1000 milliseconds)
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Set timeout for 5 seconds
    setTimeout(() => {
        clearInterval(countdownInterval); // Clear the interval when timeout occurs
        resultElement.innerHTML = `Timeout complete!<br><br> clearTimeOut stannar timeouten, <br>clearInterval stannar intervallen<br><br>
      Sekunderna som räknar ner är setInterval() funktionen som räknar en sekund i taget, exempel: <br><br>
      setInterval(updateCountdown, 1000);`;
    }, 4000);
}

// navigation
function navigateTo() {
    location.href = 'https://www.google.com';
}

function replaceLocation() {
    location.replace('https://www.google.com');
}

function changePath() {
    location.pathname = '/new-path';
}

function goBack() {
    history.back();
}

function goForward() {
    history.forward();
}

function getHistoryLength() {
    alert('History Length: ' + history.length);
}

function goToSpecificPage() {
    history.go(2);
}

// date
function dateTime() {
    let dateTime = document.getElementById('dateTime');
    const date = new Date();

    // Get the current date in the month (1-31)
    const currentDate = date.getDate();
    const currentMonth = date.getMonth();
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    dateTime.innerHTML = `<p>Current Date in the Month: ${currentDate} / ${months[currentMonth]}</p>`;

    // Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
    const dayOfWeek = date.getDay();

    // Define an array of days for better readability
    const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    dateTime.innerHTML += `<p>Day of the Week: ${daysOfWeek[dayOfWeek]}</p>`;

    // Get the current hours, minutes, and seconds
    const currentHours = date.getHours();
    const currentMinutes = date.getMinutes();
    const currentSeconds = date.getSeconds();

    const formattedTime = `${currentHours}:${currentMinutes}:${currentSeconds}`;

    dateTime.innerHTML += `<p>Current Time: ${formattedTime}</p>`;
}

// bind!
function handleClick(greeting, text) {
    console.log(greeting + ' ' + this.name + ' ' + text);

    let bindTest = document.getElementById('bindTest');

    bindTest.innerHTML = `greeting ${this.name} ${text} <br><br>
<pre>
function handleClick(greeting, text) {
    console.log(
        greeting + ' ' + this.name + ' ' + text
    );
}

const person = {
    name: 'Ali'
};

const boundFunction = handleClick.bind(
    person, 'Hello', "How are you"
);

// Using bind to create a new function with a 
   specific context and parameter
// så här skapar du ny funktion FÖÖÖÖR att du 
   använder bind()
// sedan berättar du för funktionen handleClick()
   det här: 
    // betee dig som att du existerar just nu i 
       objektet person
    // och där inne anropa handleClick metoden, 
       då får du lov att använda this.name och 
       komma åt det där.
// så bind(this) eller bind(person) , du försöker
   säga anropa denna metod inne någonstans, i 
   window eller nånstans.
</pre>
    `;
}

// Object with a 'name' property
const person = {
    name: 'Ali',
};

// Using bind to create a new function with a specific context and parameter
// så här skapar du ny funktion FÖÖÖÖR att du använder bind()
// sedan berättar du för funktionen handleClick() det här:
// betee dig som att du existerar just nu i objektet person
// och där inne anropa handleClick metoden, då får du lov att använda this.name och komma åt det där.
// så bind(this) eller bind(person) , du försöker säga anropa denna metod inne någonstans, i window eller
// nånstans
const boundFunction = handleClick.bind(person, 'Hello', 'How are you');

// TOGGLE()
function openCodeToggleTest() {
    let open = document.getElementById('toggleTest');
    open.innerHTML = '';

    let div = document.createElement('div');
    div.id = 'theDiv';

    div.insertAdjacentHTML(
        'afterbegin',
        'toggle the button "Testa toggle()" to make me red'
    );
    open.appendChild(div);

    open.innerHTML += ` <br>
<pre>
const testToggle = () => {
    let theDiv = document.getElementById('theDiv');
    theDiv.classList.toggle('bg-red');
}

// css
.bg-red { 
    background: red; 
}
</pre>
    `;
}

const testToggle = () => {
    let theDiv = document.getElementById('theDiv');
    theDiv.classList.toggle('bg-red');
};

// .innerHTML vs .insertAdjacentHTML()
function openCodeTestInnerHTMLvs() {
    let open = document.getElementById('innerHTMLTest');
    open.innerHTML = '';

    let parent = document.createElement('div');
    let child1 = document.createElement('div');
    let child2 = document.createElement('div');

    parent.style.background = 'white';
    parent.style.color = 'black';
    parent.id = 'theDiv';

    open.innerHTML = 'Parent';
    child1.innerHTML = '&nbsp;&nbsp;Child 1';
    child2.innerHTML = '&nbsp;&nbsp;Child 2';

    open.appendChild(parent);
    parent.appendChild(child1);
    parent.appendChild(child2);

    open.innerHTML += `<br><br>titta i html elementen vad som renderas,
    med innerHTML så renderas HELA parent diven när du lägger in något nytt,
    men med insertAdjacentHTML så renderas det bara fram det nya elementet och inget annat <br><br>
    du kan köra beforebegin, afterbegin, beforeend, afterend <br><br>
<pre style="overflow-x: auto; white-space: nowrap;">
const TESTinnerHTML = () => {
    let theDiv = document.getElementById('theDiv');
    theDiv.innerHTML += '<div>&nbsp;&nbsp;innerHTML inserts as last child in parent</div>';
};
</pre>
<pre style="overflow-x: auto; white-space: nowrap;">
const TESTinsertAdjacentHTMLafter = () => {
    let theDiv = document.getElementById('theDiv');
    theDiv.insertAdjacentHTML('afterbegin', '<div>&nbsp;&nbsp;insertAdjacentHTML("afterbegin") inserts after parent begin</div>');
};
</pre>
<pre style="overflow-x: auto; white-space: nowrap;">
const TESTinsertAdjacentHTMLbefore = () => {
    let theDiv = document.getElementById('theDiv');
    theDiv.insertAdjacentHTML('beforeend', '<div>&nbsp;&nbsp;insertAdjacentHTML("beforeend") inserts before parent end</div>');
};
</pre>
    `;
}
const TESTinnerHTML = () => {
    let theDiv = document.getElementById('theDiv');
    theDiv.innerHTML += '<div>&nbsp;&nbsp;insert as last child in parent</div>';
};
const TESTinsertAdjacentHTMLbeforebegin = () => {
    let open = document.getElementById('innerHTMLTest');
    open.insertAdjacentHTML(
        'afterbegin',
        '<div>insert before parent begin</div>'
    );
};
const TESTinsertAdjacentHTMLafter = () => {
    let theDiv = document.getElementById('theDiv');
    theDiv.insertAdjacentHTML(
        'afterbegin',
        '<div>&nbsp;&nbsp;insert after parent begin</div>'
    );
};
const TESTinsertAdjacentHTMLbefore = () => {
    let theDiv = document.getElementById('theDiv');
    theDiv.insertAdjacentHTML(
        'beforeend',
        '<div>&nbsp;&nbsp;insert before parent end</div>'
    );
};
const TESTinsertAdjacentHTMLafterend = () => {
    let theDiv = document.getElementById('theDiv');
    theDiv.insertAdjacentHTML('afterend', '<div>insert after parent end</div>');
};

// .append vs .appendChild()
function openCodeTestAppend() {
    let open = document.getElementById('appendTest');

    open.innerHTML = `append kan ta in både strings och objects <br> appendChild tar bara in objects <br><br>
    så det här hade aldrig funkat: <br>
<pre>
const TESTappendChild = () => {
    let open = document.getElementById('appendTest');

    let div = 'sadasdsad';
    open.appendChild(div);
}
</pre> <br><br>
men detta hade funkat: <br>
<pre>
const TESTappend = () => {
    let open = document.getElementById('appendTest');

    let div = 'sadasdsad';
    open.append(div);
}
</pre> <br><br> testa titta på element rendering när du klickar på knapparna<br><br>
    `;
}

const TESTappend = () => {
    let open = document.getElementById('appendTest');

    open.innerHTML = '';

    const str = `Code: append("this is an append")`;
    open.append(str);
};
const TESTappendChild = () => {
    let open = document.getElementById('appendTest');

    open.innerHTML = '';

    const str = `This is appendChild`;
    try {
        open.appendChild(str);
    } catch (error) {
        open.append(
            'Error: You cant appendChild with a string, codeError: appendChild("this is an append")'
        );
    }
};

// children & nodes/elements

const showNode = () => {
    let openCode = document.getElementById('nodevsel');
    openCode.innerHTML = '';

    const div = document.createElement('div');

    div.insertAdjacentHTML(
        'afterbegin',
        'Nodes can be anything in the HTML document, a string an element, a whitespace.. whatever'
    );

    openCode.appendChild(div);
};
const showElement = () => {
    let openCode = document.getElementById('nodevsel');
    openCode.innerHTML = '';

    const div = document.createElement('div');

    div.insertAdjacentHTML(
        'afterbegin',
        'Element are only the html-elements, like div, p, input, secion, body, header..'
    );

    openCode.appendChild(div);
};

// lastElementChild()
const putLi = () => {
    let openCode = document.getElementById('styled-listLi');
    openCode.innerHTML = '';

    const firstLi = document.createElement('li');
    firstLi.id = 'nextLi';

    firstLi.textContent = 'nextLi';

    openCode.appendChild(firstLi);
};
const beforeLast = () => {
    let ul = document.getElementById('styled-listLi');
    const li = document.createElement('li');

    li.textContent = 'put li before last element in ul';

    ul.lastElementChild.before(li);
};
const afterLast = () => {
    let ul = document.getElementById('styled-listLi');
    const li = document.createElement('li');

    li.textContent = 'put li after last element in ul';

    ul.lastElementChild.after(li);
};
const beforeFirst = () => {
    let ul = document.getElementById('styled-listLi');
    const li = document.createElement('li');

    li.textContent = 'put li before first element in ul';

    ul.firstElementChild.before(li);
};
const afterFirst = () => {
    let ul = document.getElementById('styled-listLi');
    const li = document.createElement('li');

    li.textContent = 'put li after first element in ul';

    ul.firstElementChild.after(li);
};
const nextEl = () => {
    let ul = document.getElementById('styled-listLi');
    let nextLi = document.getElementById('nextLi');
    const li = document.createElement('li');

    li.textContent = nextLi.nextElementSibling.cloneNode(true).innerHTML;

    ul.firstElementChild.before(li);
};
const prevEl = () => {
    let ul = document.getElementById('styled-listLi');
    let nextLi = document.getElementById('nextLi');
    const li = document.createElement('li');

    li.textContent = nextLi.previousElementSibling.cloneNode(true).innerHTML;

    ul.firstElementChild.before(li);
};

const insertLiBefore = () => {
    let ul = document.getElementById('styled-listLi');
    const li = document.createElement('li');

    li.textContent = 'put li before first element in ul';

    ul.insertBefore(li, ul.firstElementChild);
};
const replacewith = () => {
    let ul = document.getElementById('styled-listLi');
    const li = document.createElement('li');

    li.textContent = 'replace first element of ul with li';

    ul.firstElementChild.replaceWith(li);
};
const afterNextLi = () => {
    let nextLi = document.getElementById('nextLi');
    const li = document.createElement('li');

    li.textContent = 'put li after nextLi';

    nextLi.after(li);
};
const beforeNextLi = () => {
    let nextLi = document.getElementById('nextLi');
    const li = document.createElement('li');

    li.textContent = 'put li before nextLi';

    nextLi.before(li);
};
const putParentElement = () => {
    let ul = document.getElementById('styled-listLi');
    const li = document.createElement('li');

    li.innerHTML = `put li here: 
    <pre>
    div
        div
            ul
                li
       [here]
    </pre>`;

    ul.parentElement.after(li);
};
const removeEl = () => {
    let ul = document.getElementById('styled-listLi');

    ul.firstElementChild.remove();
};

// classnames classList
const openCode = () => {
    let openCode = document.getElementById('classnameTest');
    let divEl = document.createElement('div');

    openCode.innerHTML = '';

    divEl.className = 'firstDiv';
    divEl.innerHTML = `This is a new div with classname: <br>${divEl.className}`;

    openCode.appendChild(divEl);
};
const changeClassname = () => {
    let div = document.querySelector('.firstDiv');
    div.className = 'anotherDivName';
    div.innerHTML = `This is a new div with classname: <br>${div.className}`;
};
const addClassname = () => {
    let div = document.querySelector('.anotherDivName');
    div.classList.add('multipleClassNames');
    div.innerHTML = `This is a new div with classname: <br>${div.className}`;
};

// trim()
const catchInput = () => {
    let input = document.querySelector('#trimtest').value;
    let openCode = document.querySelector('#inputTest');

    openCode.innerHTML = `${input.trim()}`;
};

// Array.from()
const makeArray = () => {
    let input = document.querySelector('#arrayinputstring').value;
    let openCode = document.querySelector('#arrayfromstring');

    openCode.innerHTML = `Här gör vi om strängen till array med varje index en bokstav<br><br>Array.from('${input}')<br>[${Array.from(
        input
    )}]`;
};

// .push()
const openpusharray = () => {
    let openCode = document.querySelector('#pusharray');
    let div = document.createElement('div');
    div.id = 'newDiv';

    openCode.innerHTML = '';
    div.innerHTML = `
    <pre>
    let arr = ["ali", "taleb", "momo"];
    </pre>
    `;

    openCode.appendChild(div);
};
const pushArray = () => {
    let openCode = document.querySelector('#pusharray');
    let newDiv = document.querySelector('#newDiv');
    let input = document.querySelector('#pusharrayinput').value;

    newDiv.innerHTML = `["ali", "taleb", "momo"]<br><br>Här lägger vi till din input i slutet av arrayn<br><br>arr.push('${input}'); <br><br>
    console.log(arr) <br><br> ["ali", "taleb", "momo", "${input}"];
    `;

    openCode.appendChild(newDiv);

    let arr = ['ali', 'taleb', 'momo'];
    arr.push('nyttNamn');
    console.log(arr);
};

// .unshift()
const openunshiftarray = () => {
    let openCode = document.querySelector('#unshiftarray');
    let div = document.createElement('div');
    div.id = 'newDiv';

    openCode.innerHTML = '';
    div.innerHTML = `
    <pre>
    let arr = ["ali", "taleb", "momo"];
    </pre>
    `;

    openCode.appendChild(div);
};
const unshiftArray = () => {
    let openCode = document.querySelector('#unshiftarray');
    let newDiv = document.querySelector('#newDiv');
    let input = document.querySelector('#unshiftarrayinput').value;

    newDiv.innerHTML = `["ali", "taleb", "momo"]<br><br>Här lägger vi till din input i början av arrayn<br><br>arr.unshift('${input}'); <br><br>
    console.log(arr) <br><br> ["${input}", "ali", "taleb", "momo"];
    `;

    openCode.appendChild(newDiv);

    let arr = ['ali', 'taleb', 'momo'];
    arr.unshift('nyttNamn');
    console.log(arr);
};
// .pop()
const openpoparray = () => {
    let openCode = document.querySelector('#poparray');
    let div = document.createElement('div');
    div.id = 'newDiv';

    openCode.innerHTML = '';
    div.innerHTML = `
    <pre>
    let arr = ["ali", "taleb", "momo"];
    </pre>
    `;

    openCode.appendChild(div);
};
const popArray = () => {
    let openCode = document.querySelector('#poparray');
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `["ali", "taleb", "momo"]<br><br>Här tar vi bort ett index i slutet av arrayn<br><br>arr.pop(); <br><br>
    console.log(arr) <br><br> ["ali", "taleb"];
    `;

    openCode.appendChild(newDiv);

    let arr = ['ali', 'taleb', 'momo'];
    arr.pop();
    console.log(arr);
};
// .shift()
const openshiftarray = () => {
    let openCode = document.querySelector('#shiftarray');
    let div = document.createElement('div');
    div.id = 'newDiv';

    openCode.innerHTML = '';
    div.innerHTML = `
    <pre>
    let arr = ["ali", "taleb", "momo"];
    </pre>
    `;

    openCode.appendChild(div);
};
const shiftArray = () => {
    let openCode = document.querySelector('#shiftarray');
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `["ali", "taleb", "momo"]<br><br>Här tar vi bort ett index i början av arrayn<br><br>arr.shift(); <br><br>
    console.log(arr) <br><br> ["taleb", "momo"];
    `;

    openCode.appendChild(newDiv);

    let arr = ['ali', 'taleb', 'momo'];
    arr.shift();
    console.log(arr);
};

// .splice()
const opensplicearray = () => {
    let openCode = document.querySelector('#splicearray');
    let div = document.createElement('div');
    div.id = 'newDiv';

    openCode.innerHTML = '';
    div.innerHTML = `
    <pre>
    let arr = ["ali", "taleb", "momo"];
    </pre>
    `;

    openCode.appendChild(div);
};
const spliceArray = () => {
    let openCode = document.querySelector('#splicearray');
    let newDiv = document.querySelector('#newDiv');
    let input = document.querySelector('#splicearrayinput').value;

    newDiv.innerHTML = `["ali", "taleb", "momo"]<br><br>Här börjar vi med index 0, vi tar bort 0 st indexes, o så lägger vi till din input där vi startade, alltså på index 0, då flyttas alla ett steg framåt eftersom inget togs bort.<br><br>arr.splice('0, 0, '${input}'); <br><br>
    console.log(arr) <br><br> ["${input}", "ali", "taleb", "momo"];
    `;

    openCode.appendChild(newDiv);

    let arr = ['ali', 'taleb', 'momo'];
    arr.splice(0, 0, 'nyttNamn');
    console.log(arr);
};
const splice2Array = () => {
    let openCode = document.querySelector('#splicearray');
    let newDiv = document.querySelector('#newDiv');
    let input = document.querySelector('#splice2arrayinput').value;

    newDiv.innerHTML = `["ali", "taleb", "momo"]<br><br>Här börjar vi med index 1, vi tar bort 1 st indexes, o så lägger vi till din input där vi startade, alltså på index 1.<br><br>arr.splice('1, 1, '${input}'); <br><br>
    console.log(arr) <br><br> ["ali", "${input}", "momo"];
    `;

    openCode.appendChild(newDiv);

    let arr = ['ali', 'taleb', 'momo'];
    arr.splice(1, 1, 'nyttNamn');
    console.log(arr);
};
const splice3Array = () => {
    let openCode = document.querySelector('#splicearray');
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `["ali", "taleb", "momo"]<br><br>Här börjar vi med index 0, vi tar bort 2 st indexes.<br><br>arr.splice('0, 2); <br><br>
    console.log(arr) <br><br> ["momo"];
    `;

    openCode.appendChild(newDiv);

    let arr = ['ali', 'taleb', 'momo'];
    arr.splice(0, 2);
    console.log(arr);
};

// .slice()
const openslicearray = () => {
    let openCode = document.querySelector('#slicearray');
    let div = document.createElement('div');
    div.id = 'newDiv';

    openCode.innerHTML = '';
    div.innerHTML = `
    <pre>
    let arr = ["ali", "taleb", "momo"];
    </pre>
    `;

    openCode.appendChild(div);
};
const sliceArray = () => {
    let openCode = document.querySelector('#slicearray');
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `["ali", "taleb", "momo"]<br><br>Här startar vi på index 0 och kopierar 1 st index alltid från index noll oavsett var start är o tar bara med allt fr.o.m start positionen, alltså från index 0<br><br>const arrNr2 = arr.slice(); <br><br>
    console.log(arrNr2) <br><br> ["ali"];
    `;

    openCode.appendChild(newDiv);

    let arr = ['ali', 'taleb', 'momo'];
    const arrNr2 = arr.slice(0, 1);
    console.log(arrNr2);
};
const slice2Array = () => {
    let openCode = document.querySelector('#slicearray');
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `["ali", "taleb", "momo"]<br><br>Här startar vi på index 2 och kopierar 3 st index alltid från index noll oavsett var start är o tar bara med allt fr.o.m start positionen, alltså från index 2<br><br>const arrNr2 = arr.slice(2, 3); <br><br>
    console.log(arrNr2) <br><br> ["momo"];
    `;

    openCode.appendChild(newDiv);

    let arr = ['ali', 'taleb', 'momo'];
    const arrNr2 = arr.slice(2, 3);
    console.log(arrNr2);
};

// .spread()
const openspreadarray = () => {
    let openCode = document.querySelector('#spreadarray');
    let div = document.createElement('div');
    div.id = 'newDiv';

    openCode.innerHTML = '';
    div.innerHTML = `
    <pre>
    let arr = ["ali", "taleb", "momo"];
    </pre>
    `;

    openCode.appendChild(div);
};
const spreadArray = () => {
    let openCode = document.querySelector('#spreadarray');
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `["ali", "taleb", "momo"]<br><br>Här kopierar vi allt som finns på arr och lägger i nya arrNr2<br><br>
    const arrNr2 = [...arr]; <br><br>
    console.log(arrNr2) <br><br> ["ali", "taleb", "momo"];
    `;

    openCode.appendChild(newDiv);

    let arr = ['ali', 'taleb', 'momo'];
    const arrNr2 = [...arr];
    console.log(arrNr2);
};

// .concat()
const openconcatarray = () => {
    let openCode = document.querySelector('#concatarray');
    let div = document.createElement('div');
    div.id = 'newDiv';

    openCode.innerHTML = '';
    div.innerHTML = `
    <pre>
    let arr = ["ali", "taleb", "momo"];
    </pre>
    `;

    openCode.appendChild(div);
};
const concatArray = () => {
    let openCode = document.querySelector('#concatarray');
    let newDiv = document.querySelector('#newDiv');
    let input = document.querySelector('#concatarrayinput').value;

    newDiv.innerHTML = `["ali", "taleb", "momo"]<br><br>Här lägger vi till din input i slutet av arrayn och skapar en ny kopia av arrayn<br><br>const arrNr2 = arr.concat('${input}'); <br><br>
    console.log(arr) <br><br> ["ali", "taleb", "momo", "${input}"];
    `;

    openCode.appendChild(newDiv);

    let arr = ['ali', 'taleb', 'momo'];
    const arrNr2 = arr.concat('nyttNamn');
    console.log(arrNr2);
};
const concatArrayMulti = () => {
    let openCode = document.querySelector('#concatarray');
    let newDiv = document.querySelector('#newDiv');
    let input = document.querySelector('#concatarrayinput').value;

    newDiv.innerHTML = `["ali", "taleb", "momo"]<br><br>Här lägger vi till ['äpple', 'päron'] i slutet av arrayn och skapar en ny kopia av arrayn<br><br>const arrNr2 = arr.concat(['äpple', 'päron']); <br><br>
    console.log(arr) <br><br> ["ali", "taleb", "momo", 'äpple', 'päron'];
    `;

    openCode.appendChild(newDiv);

    let arr = ['ali', 'taleb', 'momo'];
    const arrNr2 = arr.concat(['äpple', 'päron']);
    console.log(arrNr2);
};

// .indexOf()
const openindexOfarray = () => {
    let openCode = document.querySelector('#indexOfarray');
    let div = document.createElement('div');
    div.id = 'newDiv';

    openCode.innerHTML = '';
    div.innerHTML = `
    <pre>
    let arr = ["ali", "taleb", "momo"];
    </pre>
    `;

    openCode.appendChild(div);
};
const indexOfArray = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `["ali", "taleb", "momo"]<br><br>Vi startar från index 0 och letar: <br>Här letar vi i arrayn och kollar i vilket index-nummer "taleb"-värdet ligger i. Vi letar i hela arrayn. Det kommer returnera absolut första index-nummer den ser "taleb" i, inga fler index-nummer av "taleb" som kanske finns senare. <br> Detta är bra att göra för att veta vilket index ett värde har för att senare kunna använda splice eller slice t.ex. <br><br>
    const arrIndex = arr.indexOf("taleb"); <br><br>
    console.log(arrIndex) <br><br> 1
    `;

    let arr = ['ali', 'taleb', 'momo'];
    const arrIndex = arr.indexOf('taleb');
    console.log(arrIndex);
};
const lastIndexOfArray = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `["ali", "taleb", "momo"]<br><br>Vi startar från sista indexet och letar bakåt: <br>Här letar vi i arrayn och kollar i vilket index-nummer "taleb"-värdet ligger i. Vi letar i hela arrayn bakifrån från sista indexet bakåt. Det kommer returnera absolut första index-nummer den ser "taleb" bakifrån i arrayn, inga fler index-nummer av "taleb" som kanske finns längre bak. <br> Detta är bra att göra för att veta vilket index ett värde har för att senare kunna använda splice eller slice t.ex. <br><br>
    const arrIndex = arr.indexOf("taleb"); <br><br>
    console.log(arrIndex) <br><br> 1
    `;

    let arr = ['ali', 'taleb', 'momo'];
    const arrIndex = arr.lastIndexOf('taleb');
    console.log(arrIndex);
};
const IndexOfArrayWithStart = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `["ali", "taleb", "momo"]<br><br>Vi startar från index 2 och letar: <br>Här letar vi i arrayn och kollar i vilket index-nummer "taleb"-värdet ligger i. Vi letar i hela arrayn. Det kommer returnera absolut första index-nummer den ser "taleb" i, inga fler index-nummer av "taleb" som kanske finns senare. <br> Detta är bra att göra för att veta vilket index ett värde har för att senare kunna använda splice eller slice t.ex.  <br><br>
    const arrIndex = arr.indexOf("taleb", 2); <br><br>
    console.log(arrIndex) <br><br> -1 //betyder att det inte finns
    `;

    let arr = ['ali', 'taleb', 'momo'];
    const arrIndex = arr.indexOf('taleb', 2);
    console.log(arrIndex);
};



// .includes()
const openincludesarray = () => {
    let openCode = document.querySelector('#includesarrayDiv');
    let div = document.createElement('div');
    div.id = 'newDiv';

    openCode.innerHTML = '';
    div.innerHTML = `
    <pre>
    let arr = [ 'ali', 'taleb', 'momo' ];
    </pre>
    `;

    openCode.appendChild(div);
};

const includesarray = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `[ 'ali', 'taleb', 'momo' ]; <br><br>
    const arrIncludes = arr.includes('ali'); <br>console.log(arrIncludes); <br><br>
    true
    `;

    let arr = [ 'ali', 'taleb', 'momo'];
    const arrIncludes = arr.includes('ali');
    console.log(arrIncludes);
};
// .toString()
const opentoStringarray = () => {
    let openCode = document.querySelector('#toStringarrayDiv');
    let div = document.createElement('div');
    div.id = 'newDiv';

    openCode.innerHTML = '';
    div.innerHTML = `
    <pre>
    let arr = [ 'ali', 'taleb', 'momo' ];
    </pre>
    `;

    openCode.appendChild(div);
};

const toStringarray = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `[ 'ali', 'taleb', 'momo' ]; <br><br>
    const arrToString = arr.toString('ali'); <br>console.log(arrToString); <br><br>
    ali,taleb,momo
    `;

    let arr = [ 'ali', 'taleb', 'momo'];
    const arrToString = arr.toString('ali');
    console.log(arrToString);
};
// .join()
const openjoinarray = () => {
    let openCode = document.querySelector('#joinarrayDiv');
    let div = document.createElement('div');
    div.id = 'newDiv';

    openCode.innerHTML = '';
    div.innerHTML = `
    <pre>
    let arr = [ 'ali', 'taleb', 'momo' ];
    </pre>
    `;

    openCode.appendChild(div);
};

const joinarray = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `[ 'ali', 'taleb', 'momo' ]; <br><br>
    const arrJoin = arr.join('*'); <br>console.log(arrJoin); <br><br>
    ali*taleb*momo
    `;

    let arr = [ 'ali', 'taleb', 'momo'];
    const arrJoin = arr.join('*');
    console.log(arrJoin);
};
// .split()
const opensplitarray = () => {
    let openCode = document.querySelector('#splitarrayDiv');
    let div = document.createElement('div');
    div.id = 'newDiv';

    openCode.innerHTML = '';
    div.innerHTML = `
    <pre>
    let stringNames = "ali*taleb*momo";
    </pre>
    `;

    openCode.appendChild(div);
};

const splitarray = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `"ali*taleb*momo" <br><br> Här tar du strängen och efter varje * så lägger du in i ett index i arrayn.<br><br>
    const arrSplit = arr.split('*'); <br>console.log(arrSplit); <br><br>
    ali*taleb*momo
    `;

    let stringNames = "ali*taleb*momo";
    const arrSplit = stringNames.split('*');
    console.log(arrSplit);
};

// .mathmin()
const openmathminarray = () => {
    let openCode = document.querySelector('#mathminarrayDiv');
    let div = document.createElement('div');
    div.id = 'newDiv';

    openCode.innerHTML = '';
    div.innerHTML = `
    <pre>
    const prices = [ 10, 3, 23, 5, 99 ]
    </pre>
    `;

    openCode.appendChild(div);
};

const mathminarray = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `"const prices = [ 10, 3, 23, 5, 99 ]<br><b>
    console.log(Math.min(...prices))<br>
    console.log(prices)<br><br>

    3<br>
    [ 10, 3, 23, 5, 99 ]
    `;

    const prices = [ 10, 3, 23, 5, 99 ]

    console.log(Math.min(...prices))
    console.log(prices)
};
const mathmaxarray = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `"const prices = [ 10, 3, 23, 5, 99 ]<br><b>
    console.log(Math.max(...prices))<br>
    console.log(prices)<br><br>

    99<br>
    [ 10, 3, 23, 5, 99 ]
    `;

    const prices = [ 10, 3, 23, 5, 99 ]

    console.log(Math.max(...prices))
    console.log(prices)
};


// Higher order functions for array

// .find()
const openfindarray = () => {
    let openCode = document.querySelector('#findInarrayDiv');
    let div = document.createElement('div');
    div.id = 'newDiv';

    openCode.innerHTML = '';
    div.innerHTML = `
    <pre>
    let arr = [
        {name: "ali"},
        {name: "taleb"},
        {name: "momo"},
    ];
    </pre>
    `;

    openCode.appendChild(div);
};

const findInarray = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `[
        {name: "ali"},
        {name: "taleb"},
        {name: "momo"},
    ];<br><br>
    const arrFind = arr.find((name, index, persons) => {return name.name === "taleb"});
    console.log(arrFind); <br><br>
    {name: "taleb"}
    `;

    let arr = [
        {name: "ali"},
        {name: "taleb"},
        {name: "momo"},
    ];
    const arrFind = arr.find((name, index, persons) => {return name.name === "taleb"});
    console.log(arrFind);
};

// .findIndex()
const openfindindexarray = () => {
    let openCode = document.querySelector('#findIndexarrayDiv');
    let div = document.createElement('div');
    div.id = 'newDiv';

    openCode.innerHTML = '';
    div.innerHTML = `
    <pre>
    let arr = [ 'ali', 'taleb', 'momo' ];
    </pre>
    `;

    openCode.appendChild(div);
};

const findIndexarray = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `[ 'ali', 'taleb', 'momo' ]; <br><br>
    const arrFind = arr.findIndex(element => element === 'taleb');<br>console.log(arrFind); <br><br>
    1
    `;

    let arr = [ 'ali', 'taleb', 'momo'];
    const arrFind = arr.findIndex(element => element === 'taleb');
    console.log(arrFind);
};
// .forEach()
const openforEacharray = () => {
    let openCode = document.querySelector('#forEacharrayDiv');
    let div = document.createElement('div');
    div.id = 'newDiv';

    openCode.innerHTML = '';
    div.innerHTML = `
    <pre>
    const prices = [ 10, 5, 3, 6 ] ;
    const tax = 0.19;
    const taxAdjustedPrices = [ ];
    </pre>
    `;

    openCode.appendChild(div);
};

const forEacharray = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `
    <pre>
    const prices = [ 10, 5, 3, 6 ] ;
    const tax = 0.19;
    const taxAdjustedPrices = [ ];

    prices.forEach( (price, idx, prices) => { 
        taxAdjustedPrices.push( price * ( 1 + tax ) ) 
    });
    
    console.log(taxAdjustedPrices);
    console.log(prices);

    [11.899999999999999, 5.949999999999999, 3.57, 7.14]
    [10, 5, 3, 6]
    </pre>
    `;

    const prices = [ 10, 5, 3, 6 ] ;
    const tax = 0.19;
    const taxAdjustedPrices = [ ];
    prices.forEach( (price, idx, prices) => { taxAdjustedPrices.push( price * ( 1 + tax ) ) } );
    console.log(taxAdjustedPrices);
    console.log(prices);
};

// .map()
const openmaparray = () => {
    let openCode = document.querySelector('#maparrayDiv');
    let div = document.createElement('div');
    div.id = 'newDiv';

    openCode.innerHTML = '';
    div.innerHTML = `
    <pre>
    const prices = [ 10, 5, 3, 6 ] ;
    const tax = 0.19;
    const taxAdjustedPrices = [];
    </pre>
    `;

    openCode.appendChild(div);
};

const maparray = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `
    <pre>
const prices = [ 10, 5, 3, 6 ] ;
const tax = 0.19;

const pricesAdjustedPrices = 
prices.map((price, idx, prices) => { 
    const priceObject = {
        id: idx, taxAdjPrice: price * (1 + tax)
    };
    return priceObject;  
}); 

console.log(pricesAdjustedPrices);
console.log(prices);

[
    {
        "id": 0,
        "taxAdjPrice": 11.899999999999999
    },
    {
        "id": 1,
        "taxAdjPrice": 5.949999999999999
    },
    {
        "id": 2,
        "taxAdjPrice": 3.57
    },
    {
        "id": 3,
        "taxAdjPrice": 7.14
    }
]

    [10, 5, 3, 6]
    </pre>
    `;

    const prices = [ 10, 5, 3, 6 ] ;
    const tax = 0.19;
    
    const pricesAdjustedPrices = prices.map( (price, idx, prices) => { 
        const priceObject = { id: idx, taxAdjPrice: price * ( 1 + tax )  } ;
        return priceObject;  
    }); 
    
    console.log(pricesAdjustedPrices);
    console.log(prices);
};

// .sort()
const opensortarray = () => {
    let openCode = document.querySelector('#sortarrayDiv');
    let div = document.createElement('div');
    div.id = 'newDiv';

    openCode.innerHTML = '';
    div.innerHTML = `
    <pre>
    const prices = [ 10, 5, 3, 6 ] ;
    </pre>
    `;

    openCode.appendChild(div);
};

const sortarray = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `
    <pre>
    const prices = [ 10, 5, 3, 6 ] ;

    const sortedPrices = prices.sort((a, b) => { 
        if (a > b) {
            return 1
        }else if (a === b) {
            return 0
        }else {
            return -1
        }
    });
    
    console.log(sortedPrices);
    console.log(prices);

    [3, 5, 6, 10]
    [3, 5, 6, 10]
    </pre>
    `;

    const prices = [ 10, 5, 3, 6 ] ;

    const sortedPrices = prices.sort((a, b) => { 
        if (a > b) {
            return 1
        }else if (a === b) {
            return 0
        }else {
            return -1
        }
    });
    
    console.log(sortedPrices);
    console.log(prices);
};
const sortReversearray = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `
    <pre>
    const prices = [ 10, 5, 3, 6 ] ;

    const sortedPrices = prices.sort((a, b) => { 
        if (a > b) {
            return 1
        }else if (a === b) {
            return 0
        }else {
            return -1
        }
    });
    
    console.log(sortedPrices.reverse());
    console.log(sortedPrices);
    console.log(prices);

    [10, 6, 5, 3]
    [10, 6, 5, 3]
    [10, 6, 5, 3]
    </pre>
    `;

    const prices = [ 10, 5, 3, 6 ] ;

    const sortedPrices = prices.sort((a, b) => { 
        if (a > b) {
            return 1
        }else if (a === b) {
            return 0
        }else {
            return -1
        }
    });
    
    console.log(sortedPrices.reverse());
    console.log(sortedPrices);
    console.log(prices);
};

// .filter()
const openfilterarray = () => {
    let openCode = document.querySelector('#filterarrayDiv');
    let div = document.createElement('div');
    div.id = 'newDiv';

    openCode.innerHTML = '';
    div.innerHTML = `
    <pre>
    const prices = [ 10, 5, 3, 6 ] ;
    </pre>
    `;

    openCode.appendChild(div);
};

const filterarray = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `
    <pre>
    const prices = [ 10, 5, 3, 6 ] ;

    const filteredPrices = prices.filter((price, index, prices) => { 
        return price > 6 
    });   
    
    console.log(filteredArr);
    console.log(prices);

    [10]
    [3, 5, 6, 10]
    </pre>
    `;

    const prices = [ 10, 5, 3, 6 ] ;

    const filteredPrices = prices.filter((price, index, prices) => { 
        return price > 6 
    });   
    
    console.log(filteredPrices);
    console.log(prices);
};

// .reduce()
const openreducearray = () => {
    let openCode = document.querySelector('#reducearrayDiv');
    let div = document.createElement('div');
    div.id = 'newDiv';

    openCode.innerHTML = '';
    div.innerHTML = `
    <pre>
    const prices = [ 10, 5, 3, 6 ] ;
    </pre>
    `;

    openCode.appendChild(div);
};

const reducearray = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `
    <pre>
    const prices = [ 10, 5, 3, 6 ] ;

    const sum = prices.reduce((prevValue, curValue) => { 
        return prevValue + curValue; 
    }, 0); 
    
    console.log(sum);
    console.log(prices);

    24
    [3, 5, 6, 10]
    </pre>
    `;

    const prices = [ 10, 5, 3, 6 ] ;

    const sum = prices.reduce((prevValue, curValue) => { 
        return prevValue + curValue; 
    }, 0); 
    
    console.log(sum);
    console.log(prices);
};

// .every()
const openeveryarray = () => {
    let openCode = document.querySelector('#everyarrayDiv');
    let div = document.createElement('div');
    div.id = 'newDiv';

    openCode.innerHTML = '';
    div.innerHTML = `
    <pre>
    const prices = [ 10, 5, 3, 6 ] ;
    </pre>
    `;

    openCode.appendChild(div);
};

const everyarray = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `
    <pre>
    const prices = [ 10, 5, 3, 6 ] ;

    const isBelowThreshold = prices.every((curValue) => { 
        return curValue < 40; 
    }); 
    
    console.log(isBelowThreshold);
    console.log(prices);

    true
    [3, 5, 6, 10]
    </pre>
    `;

    const prices = [ 10, 5, 3, 6 ] ;

    const isBelowThreshold = prices.every((curValue) => { 
        return curValue < 40; 
    }); 
    
    console.log(isBelowThreshold);
    console.log(prices);
};



// distructuring 
const opendisarray = () => {
    let openCode = document.querySelector('#disarrayDiv');
    let div = document.createElement('div');
    div.id = 'newDiv';

    openCode.innerHTML = '';
    div.innerHTML = `
    <pre>
    const nameData = [‘Ali’, ‘Hammoude’];
    const nameData = { name: “ali”, age: 29 };
    </pre>
    `;

    openCode.appendChild(div);
};

const disarray = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `
    <pre>
    const nameData = [‘Ali’, ‘Hammoude’];

    const [ firstName, lastName ] = nameData;

    console.log(firstName);
    console.log(lastName);

    Ali
    Hammoude
    </pre>
    `;

    const nameData = ['Ali', 'Hammoude'];

    const [ firstName, lastName ] = nameData;

    console.log(firstName);
    console.log(lastName);
};
const disobject = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `
    <pre>
    const nameData = { name: “ali”, age: 29 };

    const { name, age } = nameData;

    console.log(name);
    console.log(age);

    ali
    29
    </pre>
    `;


    const nameData = { name: "ali", age: 29 };

    const { name, age } = nameData;

    console.log(name);
    console.log(age);
};
const disAllobject = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `
    <pre>
    const nameData = { name: “ali”, age: 29, jobb: "utvecklare" };

    const { name, ...resteradeData } = nameData;

    console.log(name);
    console.log(resteradeData);

    ali
    {
        "age": 29,
        "jobb": "utvecklare"
    }
    </pre>
    `;


    const nameData = { name: "ali", age: 29, jobb: "utvecklare" };

    const { name, ...resteradeData } = nameData;

    console.log(name);
    console.log(resteradeData);
};


// set
const openSetarray = () => {
    let newDiv = document.querySelector('#SetarrayDiv');
    let div = document.createElement('div');
    div.id = 'newDiv';

    newDiv.innerHTML = '';
    div.innerHTML = `
    <pre>
    const ids = new Set([ "Hi", "from", "set" ]); 
    </pre>
    `;

    newDiv.appendChild(div);
};
const setFunc = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `
    <pre>
    const ids = new Set([ "Hi", "from", "set" ]); 
    
    ids.add(2);  
    
    if (ids.has("Hi")) { 
        ids.delete("Hi") 
    };   
    
    for (const entry of ids.entries()) { 
        console.log(entry[0]) 
    }; 
    // Set används för unika ID eftersom den garanterar 
    // att aldrig finnas dubletter.

    from
    set
    2
    </pre>
    `;

    const ids = new Set([ "Hi", "from", "set" ]); 
    
    ids.add(2);  
    
    if (ids.has("Hi")) { 
        ids.delete("Hi") 
    };   
    
    for (const entry of ids.entries()) { 
        console.log(entry[0]) 
    }; // Set används för unika ID eftersom den garanterar att aldrig finnas dubletter.
}
//map
const mapFunc = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `
    <pre>
    const person1 = {name: "Max"};
    const person2 = {name: "Ali"}; 

    const personData = new Map([ 
        [
            person1, 
            [ 
                { 
                    date: "yesterday", price: 10 
                } 
            ]
        ] 
    ]);

    console.log(personData.get(person1)); 

    personData.set(
        person2, 
        [
            {
                date: "2 weeks ago", 
                price: 12
            }
        ]
    ); 

    for (const entry of personData.entries()) { 
        console.log(entry) 
    };
    for (const [key, value] of personData.entries()) {
        console.log(key, value) 
    };
    </pre>
    `;

    const person1 = {name: "Max"};
    const person2 = {name: "Ali"}; 

    const personData = new Map([ 
        [
            person1, 
            [ 
                { 
                    date: "yesterday", price: 10 
                } 
            ]
        ] 
    ]);

    console.log(personData.get(person1)); 

    personData.set(
        person2, 
        [
            {
                date: "2 weeks ago", 
                price: 12
            }
        ]
    ); 

    for (const entry of personData.entries()) { 
        console.log(entry) 
    };
    for (const [key, value] of personData.entries()) {
        console.log(key, value) 
    };
    
}


// OBJECTS !!

// Object.entries()
const openObjEntrarray = () => {
    let newDiv = document.querySelector('#ObjEntrarrayDiv');
    let div = document.createElement('div');
    div.id = 'newDiv';

    newDiv.innerHTML = '';
    div.innerHTML = `
    <pre>
    const person = { 
        firstName: 'John', 
        lastName: 'Doe',  
        age: 30, 
        occupation: 'Developer' 
    }; 
    </pre>
    `;

    newDiv.appendChild(div);
};

const ObjEntr = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `
    <pre>
    const person = { 
        firstName: 'John', 
        lastName: 'Doe',  
        age: 30, 
        occupation: 'Developer' 
    }; 

    const entriesArray = Object.entries(person); 
    console.log(entriesArray)

   [
     ['firstName', 'John'],
     ['lastName', 'Doe'],
     ['age', 30],
     ['occupation', 'Developer']
   ]
    </pre>
    `;

    const person = { 
        firstName: 'John', 
        lastName: 'Doe',  
        age: 30, 
        occupation: 'Developer' 
    }; 

    const entriesArray = Object.entries(person); 
    console.log(entriesArray)
}

// play with object
const openObjPlaytrarray = () => {
    let newDiv = document.querySelector('#ObjPlayarrayDiv');
    let div = document.createElement('div');
    div.id = 'newDiv';

    newDiv.innerHTML = '';
    div.innerHTML = `
    <pre>
    const person = {
        name: 'Max',
        age: 29,
        hobbies: ['Sports', 'Cooking'],
        greet: function() {
            alert('Hi there');
        }
    }
    </pre>
    `;

    newDiv.appendChild(div);
};

const ObjPlayGreet = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `
    <pre>
    const person = {
        name: 'Max',
        age: 29,
        hobbies: ['Sports', 'Cooking'],
        greet: function() {
            alert('Hi there');
        }
    }

    person.greet();
    </pre>
    `;

    const person = {
        name: 'Max',
        age: 29,
        hobbies: ['Sports', 'Cooking'],
        greet: function() {
            alert('Hi there');
        }
    }

    person.greet();
    console.log(person);
}
const ObjPlayIsAdmin = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `
    <pre>
    const person = {
        name: 'Max',
        age: 29,
        hobbies: ['Sports', 'Cooking'],
        greet: function() {
            alert('Hi there');
        },
        isAdmin: true
    }

    person.isAdmin = true;
    </pre>
    `;

    const person = {
        name: 'Max',
        age: 29,
        hobbies: ['Sports', 'Cooking'],
        greet: function() {
            alert('Hi there');
        }
    }

    person.isAdmin = true;
    console.log(person);
}
const ObjPlayDelete = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `
    <pre>
    const person = {
        name: 'Max',
        hobbies: ['Sports', 'Cooking'],
        greet: function() {
            alert('Hi there');
        },
        isAdmin: true
    }

    delete person.age;
    </pre>
    `;

    const person = {
        name: 'Max',
        age: 29,
        hobbies: ['Sports', 'Cooking'],
        greet: function() {
            alert('Hi there');
        }
    }

    delete person.age;
    console.log(person);
}
const ObjPlayNameString = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `
    <pre>
    let person = { 
        'first name': 'Max'
    }

    Du kan accessa dem såhär: 
    
    person["first name"]
    </pre>
    `;

    let person = { 
        'first name': 'Max'
    }

    console.log(person["first name"]);
}
const ObjPlayDynName = () => {
    let newDiv = document.querySelector('#newDiv');

    newDiv.innerHTML = `
    <pre>
    const userChosenKeyName = 'name';
    let person = { 
        [userChosenKeyName]: 'Max'
    }

    Du kan accessa dem såhär: 
    
    person[userChosenKeyName]
    </pre>
    `;

    const userChosenKeyName = 'name';
    let person = { 
        [userChosenKeyName]: 'Max'
    }
    
    console.log(person[userChosenKeyName]);
}