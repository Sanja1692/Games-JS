(function() {
    let startBtn = $('.startBtn');
    let mainInput = $('.mainInput');
    let allLines = $('.line');

    startBtn.on('click', startGame);

    function startGame() {
        $(this).hide();
    }
})