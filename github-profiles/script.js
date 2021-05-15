const APIURL = 'https://api.github.com/users/';
const form = document.querySelector('#form');
const main = document.querySelector('#main');
const search = document.querySelector('#search');
getUser('florinpop17');
async function getUser(user) {
    const res = await fetch(APIURL + user);
    const resData = await res.json()
    console.log(resData)

    createUserCard(resData);
    getRepos(user);
}

async function getRepos(user) {
    const res = await fetch(APIURL + user + "/repos");
    const resData = await res.json();
    addReposToCard(resData);

}

function createUserCard(user) {
    const card = `
    <div class="card">
    <div class="image-container">
    <img class="avatar" src="${user.avatar_url}" />
    </div>
    <div class="user-info">
    <h2>${user.name}</h2>
    <p>${user.bio}</p>
    <ul>
    <li>
    <i class="fas fa-user-alt"></i>
    ${user.followers}</li>
    <li>
    <i class="fas fa-share"></i>
    ${user.following}</li>
    <li>
    <i class="far fa-folder-open"></i>
    ${user.public_repos}</li>
    </ul>
    <div class="repos">
    </div>
    </div>
    </div>
    `
    main.innerHTML = card;
}

function addReposToCard(repos) {
    const reposEl = document.querySelector('.repos');
    repos.forEach(repo => {
        const repoEl = document.createElement('a');
        repoEl.classList.add('repo');
        repoEl.href = repo.html_url;
        repoEl.target = "_blank";
        repoEl.innerText = repo.name;
        reposEl.appendChild(repoEl);

    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = search.value;

    if (user) {
        getUser(user);
        search.value = "";
    }
})