class Github{
    constructor(){
        this.id = config.id;
        this.secret = config.secret;
        this.repos_count = 5;
        this.sort = 'created:asc';
    }


    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.id}&client_secret=${this.secret}`)
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.sort}&client_id=${this.id}&client_secret=${this.secret}`)
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        return {
            profile,
            repos
        }
    }
}

