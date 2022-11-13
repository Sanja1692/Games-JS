(function() {
    let startBtn = $('.startBtn');
    let mainInput = $('.mainInput');
    let allLines = $('.line');

    startBtn.on('click', startGame);

    function startGame() {
        $(this).hide();
        //setup
        let speed = 1;
        let textLength = 3;
        let typingWords = words.filter(word => word.length == textLength);
        // console.log(typingWords);
        let level = 6; //1-20 
        //insert spans
        function insertSpans() {
            for (let i = 0; i < allLines.length; i++) {
                let rand = Math.floor(Math.random() * 20);
                if (rand <= level) {
                    let text = chooseText();
                    $(allLines[i]).append(`<span>${text}</span>`);
                }
            }
        }
        insertSpans();

        function chooseText() {
            let rand = Math.floor(Math.random() * typingWords.length);
            let savedText = typingWords[rand];
            typingWords.splice(rand, 1);

            return typingWords[rand];
        }
        //animation of spans
        let moveAll = setInterval(function() {
            let allSpans = $('span');
            allSpans.css({
                left: '+=' + speed
            })
        }, 100)
    }
})()