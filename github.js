class Github{
    constructor(){
        this.id = config.id;
        this.secret = config.secret;
    }


    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.id}&client_secret=${this.secret}`)
        const profile = await profileResponse.json();
        return {
            profile
        }
    }
}

