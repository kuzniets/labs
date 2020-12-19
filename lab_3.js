const p1text = 'Born and raised in Seattle, Washington, Gates co-founded Microsoft with childhood friend <a href="https://en.wikipedia.org/wiki/Paul_Allen">Paul Allen</a> in 1975, in Albuquerque, New Mexico; it went on to become the world\'s largest personal computer software company.[4][a] Gates led the company as chairman and CEO until stepping down as CEO in January 2000, but he remained chairman and became chief software architect.[7] During the late 1990s, he had been criticized for his business tactics, which have been considered anti-competitive. This opinion has been upheld by numerous court rulings.[8] In June 2006, Gates announced that he would be transitioning to a part-time role at Microsoft and full-time work at the Bill & Melinda Gates Foundation, the private charitable foundation that he and his wife, Melinda Gates, established in 2000.[9] He gradually transferred his duties to Ray Ozzie and Craig Mundie.[10] He stepped down as chairman of Microsoft in February 2014 and assumed a new post as technology adviser to support the newly appointed CEO Satya Nadella.[11] In March 2020, Gates left his board positions at Microsoft and Berkshire Hathaway to focus on his philanthropic endeavors including climate change, global health and development, and education.[12]';
const p2text = 'Since 1987, he has been included in the <a href="https://en.wikipedia.org/wiki/The_World%27s_Billionaires">Forbes list of the world\'s wealthiest people</a><a href="https://en.wikipedia.org/wiki/Bill_Gates#cite_note-Why_Isn\'t_on_\'Forbes\'_List-14">[13]</a> From 1995 to 2017, he held the Forbes title of the richest person in the world all but four of those years.[15] In October 2017, he was surpassed by Amazon founder and CEO Jeff Bezos, who had an estimated net worth of US$90.6 billion compared to Gates\'s net worth of US$89.9 billion at the time.[16] As of November 2020, Gates had an estimated net worth of US$113.7 billion, making him the third-wealthiest person in the world, behind Bezos and Elon Musk.[17][b';

const body = document.getElementsByTagName('body');

const makeHeader = () => {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');

    h1.innerText = 'Bill Gates';
    h2.innerText = 'Founder of Microsoft';

    header.appendChild(h1);
    header.appendChild(h2);

    body[0].appendChild(header);
};

const makeFigure = (main) => {
    const figure = document.createElement('figure');
    const figcaption = document.createElement('figcaption');
    const img = document.createElement('img');

    figcaption.innerText = 'Bill Gates';

    img.src = 'download.jpeg';
    img.alt = 'Bil Gates photo';

    figure.appendChild(img);
    figure.appendChild(figcaption);

    main.appendChild(figure)
}

const makeContent = (main) => {
    const div = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');

    div.className = 'content flex';

    p1.innerHTML = p1text;
    p2.innerHTML = p2text;

    div.appendChild(p1);
    div.appendChild(p2);

    main.appendChild(div);
}

const makeMain = () => {
    const main = document.createElement('main');

    makeFigure(main);
    makeContent(main);

    body[0].appendChild(main);
}

const makeFooter = () => {
    const footer = document.createElement('footer');

    footer.innerText = '(c) 2020';

    body[0].appendChild(footer);
};

makeHeader();
makeMain();
makeFooter();