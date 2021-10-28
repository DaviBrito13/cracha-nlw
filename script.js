const linksSocialMedia = {
  github: 'DaviBrito13',
  youtube: 'channel/UCLTIDIIrKqw9YW9S614autw',
  instagram: 'davi.brito13',
  facebook: 'profile.php?id=100042301268629',
  twitter: 'davipires52'
}

function switchingSocialMediaLinks(links) {
  let socialLinks = document.getElementById('socialLinks')
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${links[social]}`
  }
}

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  // Traz o JSON da api do github, mas não no formato JSON
  fetch(url)
    // Transforma o objeto recebido pelo fetch em um JSON
    .then(response => response.json())
    // Modifica o HTML com as informações recebidas da API do github
    .then(data => {
      userName.textContent = data.name
      infoUser.textContent = data.bio
      userLink.href = data.html_url
      avatar.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

switchingSocialMediaLinks(linksSocialMedia)
getGithubProfileInfos()
