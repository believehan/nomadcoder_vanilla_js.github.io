const quotes = [
    {
        quote: "꿈을 계속 간직하고 있으면 \n반드시 실현할 때가 온다.",
        author: "-괴테-"
    },
    {
        quote: "진짜 문제는 사람들의 마음이다. \n그것은 절대로 물리학이나 윤리학의 문제가 아니다.",
        author: "-아인슈타인-"
    },
    {
        quote: "시간이 덜어주거나 부드럽게 해주지 않는 슬픔이란 하나도 없다.",
        author: "-키케로-"
    },
    {
        quote: "시간과 정성을 들이지 않고 \n얻을 수 있는 결실은 없다.",
        author: "-그라시안-"
    },
    {
        quote: "하루의 가장 달콤한 순간은 새벽에 있다.",
        author: "-윌콕스-"
    },
    {
        quote: "시간의 날개를 타고 슬픔은 날아가 버린다.",
        author: "-라 퐁테느-"
    },
    {
        quote: "희망은 언제나 힘든 언덕길 너머에서 기다리고 있다.",
        author: "-베를레르-"
    },
    {
        quote: "자신이 있어서 하는 것이 아니라 \n자신이 없기 때문에 자신감을 얻고자 행동하는 것이다.",
        author: "-휴그 왈폴-"
    },
    {
        quote: "미래를 예측하는 가장 좋은 방법은 \n미래를 창조하는 것이다.",
        author: "-에이브러햄 링컨-"
    },
    {
        quote: "화가 날 때는 100을 세라. \n최악일때는 욕설을 퍼부어라.",
        author: "-마크 트웨인-"
    }
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
