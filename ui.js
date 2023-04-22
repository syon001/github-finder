class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Display profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
        <div class="card">
        <div class="row">
          <div class="imgpro">
            <img class="img" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn">View Profile</a>
          </div>
          <hr class="hr1">
          <div class="prodet">
            <span class="box">Public Repos: ${user.public_repos} |</span>
            <span class="box">Public Gists: ${user.public_gists} |</span>
            <span class="box">Followers: ${user.followers} |</span>
            <span class="box">Following: ${user.following}</span>
            <hr class="hr2">
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="latestrepo">Latest Repos</h3> 
      <div id="repos"></div>
    `;
  }

  // Show user repos
  showRepos(repos) {
    let output = '';

    repos.forEach(function(repo) {
      output += `
        <div id="repos">   
          <div class="card">
            <div class="repo-row">
              <div class="">
                <a class="reponame" href="${repo.html_url}" target="_blank">${repo.name}</a>
              </div>
              <div class="">
                <span class="badge badge-primary">Stars: ${repo.stargazers_count} |</span>
                <span class="badge badge-secondary">Watchers: ${repo.watchers_count} |</span>
                <span class="badge badge-success">Forks: ${repo.forms_count}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    // Output repos
    document.getElementById('repos').innerHTML = output;
  }

  // Show alert message
  showAlert(message, className) {
    // Clear any remaining alerts
    this.clearAlert();
    // Create div
    const div  =  document.createElement('div');
    // Add classes
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container =  document.querySelector('.searchContainer');
    // Get search box
    const search = document.querySelector('.search');
    // Insert alert
    container.insertBefore(div, search);

    // Timeout after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert){
      currentAlert.remove();
    }
  }

  // Clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}