export function createPostCard(post) {
  const postElement = document.createElement('div')
  postElement.classList.add('post')

  const categoryHtml = post.category
    .map(
      (cat) =>
        `<span class="category-item category-item--${cat.id}">${cat.text}</span>`,
    )
    .join('')

  postElement.innerHTML = `
    <div class="post-header">
      <div class="post-categories">${categoryHtml}</div>
      <div class="post-date">${post.date}</div>
    </div>
    <div class="post-info">${post.info}</div>
    <div class="post-footer">
      <div class="post-viewed ${
        post.viewed ? 'post-viewed--seen' : ''
      }">
        ${post.viewed ? 'Переглянуто' : 'Не переглянуто'}
      </div>
    </div>
  `

  return postElement
}

//придумай функцію генерацю паролів
