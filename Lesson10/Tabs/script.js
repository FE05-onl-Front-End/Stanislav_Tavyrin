let tabs = document.getElementById('tabs');
let content = document.querySelectorAll('.tab');
let closeBtn = document.querySelectorAll('.close');

function changeTab(el) {
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

function changeContent(el) {
    changeTab(el);
    let selectedTab = el.dataset.btn;
    content.forEach(elem => {
        elem.classList.remove('active');
        elem.dataset.content === selectedTab ? elem.classList.add('active') : false;
    })
}

tabs.addEventListener('click', (event) => {
    changeContent(event.target);
})

closeBtn.forEach(elem => {
    elem.addEventListener('click', (event) => {
        event.stopPropagation();
        let deletedTab = event.target.parentNode;
        let switchTab = deletedTab.nextElementSibling || deletedTab.previousElementSibling;
        if (deletedTab.classList.value.includes('active')) {
            deletedTab.remove();
            changeContent(switchTab);
            if (tabs.children.length == 1) closeBtn.forEach(elem => elem.style.display = 'none')
        } else {
            deletedTab.remove();
            if (tabs.children.length == 1) closeBtn.forEach(elem => elem.style.display = 'none')
        }
    })
})
