class GitHub {
    constructor() {
        this.client_id = 'c67744f1eec06b0bc503';
        this.client_secret = '8856815e8e432216bd38dd6f8ae1c1fe3631280a';
        this.repos_count = 5;
        this.repos_sort = 'created:asc'
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile, // it is equl to profile: profile
            repos
        }
    }

}
// ?client_id=${this.client_id}&client_secret=${this.client_secret}