class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function search(url){
    try{
        const r = await fetch(url);
        return r.json();
    } catch (e) {
        return new HttpError(r);
    }
}

async function demoGithubUser() {
    let name = "vanimar";
    try {
        const githubUser = await search(`https://api.github.com/users/${name}`);
        console.log(githubUser.name);
    } catch (e) {
        if(e instanceof HttpError && e.response.status === 404){
            console.log('No user found under that userid');
        }
    }
}

demoGithubUser();