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

        }
        insertSpans();
    }
})()