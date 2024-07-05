function obterNomeCompleto(tweet) {
return `${tweet.author.details.firstName} ${tweet.author.details.lastName}`
}

let tweet = {
    number: 4941484847594802124051,
    message: `A programação é uma arte rara.
    Quem a entender, vai dominar o mundo.`,
    link: "www.wikipedia.org",
    created_at: "2022-01-03 11:46:00",
    author: {
        number: 40493848,
        details: {
            firstName: "Mara",
            lastName: "Siqueira",
        },
        handle: "MaraSiq"
    }
};

console.log(obterNomeCompleto(tweet)); // "Mara Siqueira"
