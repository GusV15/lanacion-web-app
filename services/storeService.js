export async function getArticles() {
    try {
        const request = await fetch('https://api-test-ln.herokuapp.com/articles')
        const articles = await request.json()
        return articles;
    } catch (error) {
        console.error(error);
    }
}


