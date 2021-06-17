class GitHub {
    constructor() {
        this.client_id = '355dece4c0f98d97c463';
        this.client_secret = '2ef0fee96337a678a606cd3b30d0977ac57aa021';
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