        
    const buttons = document.querySelectorAll(".tabBtn");
    const articles = document.querySelectorAll(".article, .article2, .article3");

    function makeVisible(evt) {

    articles.forEach (article => {
        article.style.display = "none";
    });

    buttons.forEach(button => {
        button.classList.remove('active');
    });
    
    const targetId = evt.currentTarget.id;

    let targetArticle;

        if (targetId === 'sectionBtn1') {
            targetArticle = articles[0];
        }
        else if (targetId === 'sectionBtn2') {
            targetArticle = articles[1];
        }
        else if (targetId === 'sectionBtn3') {
            targetArticle = articles[2];
        }

    if(targetArticle) {
        targetArticle.style.display = "block";
        targetArticle.style.opacity = "100";
    }

    evt.currentTarget.classList.add('active');
}

    buttons.forEach(button => {
        button.addEventListener('click', makeVisible);
    });
