
(function (){
    document.addEventListener('DOMContentLoaded', () => {
        init_app();
    });    
})();

function init_app(){
    const title = document.getElementById('title');

    console.log(title.textContent);

    const main_section = document.querySelector('#main-section');
    console.log( main_section.textContent  );
    console.log( main_section.innerHTML  );

    const firstTab = document.querySelector('.panel-title');
    console.log(`First title: ${firstTab.textContent}`);

    const tabItems = document.querySelectorAll('nav > ul > li');

    tabItems.forEach( (item, index) => {
        console.log(`item ${index} value: ${item.textContent}`);
        console.log( item.innerHTML );
    });

    const tabActive = document.querySelector('.active');

    const parentActive = tabActive.parentElement;
    console.log(parentActive);

    const nextSibling = tabActive.nextElementSibling;
    console.log( `Siguiente hermano: ${nextSibling.textContent}`)

    const tabs_section = document.querySelector('.tab-panel');
    for (const child of tabs_section.children) {
        console.log('Elemento anidado:', child.tagName);
    }

    title.textContent = "My blog";

    tabActive.innerHTML = "<a href='#'>Project</a>";

    const link_product = document.getElementById('product_nav');
    link_product.setAttribute('href', 'http://google.com' )


    const tagsNames = document.querySelectorAll("[data-tag='name']");

    tagsNames.forEach( (element, index) => {
        element.classList.add('highlight');        
    });

    tagsNames[0].classList.toggle('highlight');


    //Listeners
    const addCommentButton = document.getElementById('add-comment');
    addCommentButton.addEventListener('click', (event) => {
        const comment = document.getElementById('comment-input');
        if(comment.value.trim() === ""){
            alert("Cannot insert and empty comment");
            return;
        }        
        //const comment_in = buildCreateElement(comment);
        const comment_in = buildInnerHtml(comment);

        const firstComment = document.querySelector('.comment-card');
        const commentsSection = document.getElementById('comments-section');
        commentsSection.insertBefore(comment_in, firstComment);

        //commentsSection.appendChild(comment_card);

    });

}

function buildCreateElement(comment){
    const comment_card = document.createElement('div');
    comment_card.classList.add('comment-card');

    const meta_container = document.createElement('div');
    meta_container.classList.add('meta-container');
    const meta_date = document.createElement('span');
    meta_date.classList.add('meta-date');
    meta_date.textContent = new Date().toLocaleDateString();
    const meta_user = document.createElement('span');
    meta_user.classList.add('meta-user');
    const userName = "Ana Frank";
    meta_user.innerHTML = `Por: <strong>${userName}</strong>`;
    meta_container.appendChild(meta_date);
    meta_container.appendChild(meta_user);
    const comment_content = document.createElement('p');
    comment_content.textContent = comment.value;
    comment_card.appendChild(meta_container);
    comment_card.appendChild(comment_content);

    return comment_card;
}

function buildInnerHtml( comment ){
    const comment_card = document.createElement('div');
    comment_card.classList.add('comment-card');
    const userName = "Ana Frank";
    const date = new Date().toLocaleDateString();

    const content = `   <div class="meta-container">
                            <span class="meta-date">${date}</span>
                            <span class="meta-user">Por: <strong>${userName}</strong></span>
                        </div>
                    
                        <p class="comment">
                            ${comment.value}
                        </p>`;
                        
    comment_card.innerHTML = content;
    return comment_card;
}

