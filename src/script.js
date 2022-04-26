let textArea = document.querySelector('textarea');

document.getElementById("upper-case").onclick =
    function () {
    textArea.value = textArea.value.toUpperCase();
    };


document.getElementById("lower-case").onclick =
    function () {
        textArea.value = textArea.value.toLowerCase();
    };

document.getElementById("proper-case").onclick =
    function () {
        textArea.value = toProperCase(textArea.value);
    };

document.getElementById("sentence-case").onclick =
    function () {
        textArea.value = toSentenceCase(textArea.value);
    };

document.getElementById("save-text-file").onclick =
    function () {
        download("text.txt", textArea.value);
    }

function toProperCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));}).join(' ');
}

function  toSentenceCase(str) {
    let res = Array.from(str);
    console.log(str.toLowerCase().split(/[.!]\s?/));
    let newSentence = true;
    for (let i = 0; i < res.length; ++i) {
        if ('.' === res[i] || '!' === res[i]) {
            newSentence = true;
        }

        if (res[i].match(/[a-z]/i)) {
            if (newSentence) {
                res[i] = res[i].toUpperCase();
                newSentence = false;
            }
            else {
                res[i] = res[i].toLowerCase();
            }
        }
    }
    return res.join("");
}

function  download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
