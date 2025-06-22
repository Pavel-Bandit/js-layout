import {
  createElement,
  createHeader,
} from '../../script/layout'

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('.page')

  const header = createHeader()
  page.append(header)

  const title = createElement('h1', 'title', 'Мій блог')
  page.append(title)

  const POST_LIST = [
    {
      category: [
        { text: 'Важливо', id: 1 },
        { text: 'Нова', id: 2 },
      ],
      info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
      date: '25.01',
      viewed: false,
    },
    {
      category: [{ text: 'Нова', id: 2 }],
      info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
      date: '24.01',
      viewed: true,
    },
  ]

  const createPost = () => {
    const postList = createElement('main', 'post__list')

    POST_LIST.forEach((postData) => {
      const post = createElement(
        'div',
        postData.viewed
          ? 'post  button post--viewed'
          : 'post button',
      )
      const postHeader = createElement(
        'div',
        'post__header',
      )

      const categoryList = createElement(
        'div',
        'post__category-list',
      )

      postData.category.forEach((category) => {
        const categorySpan = createElement(
          'span',
          `post__category post__category--${category.id}`,
          category.text,
        )
        categoryList.append(categorySpan)
      })

      const dateSpan = createElement(
        'span',
        'post__date',
        postData.date,
      )
      postHeader.append(categoryList, dateSpan)

      const infoParagraph = createElement(
        'p',
        'post__info',
        postData.info,
      )

      post.append(postHeader, infoParagraph)

      postList.append(post)
    })

    return postList
  }

  const post = createPost()
  // Community section replication
  const community = createElement('main', 'community')

  const communityHeader = createElement(
    'header',
    'community__header',
  )
  const communityTitle = createElement(
    'h1',
    null,
    "Комм'юніті",
  )

  const communityNav = createElement(
    'nav',
    'community__tabs',
  )
  const tabInactive = createElement(
    'span',
    'tab tab--inactive',
    'База знань',
  )
  const tabActive = createElement(
    'span',
    'tab tab--active',
    'Інформація',
  )
  communityNav.append(tabInactive, tabActive)

  communityHeader.append(communityTitle, communityNav)

  const banner = createElement('div', 'community__banner')
  const bannerP = createElement('p', null, 'Зустрічай!')
  const bannerH2 = createElement(
    'h2',
    null,
    "Наше ком'юніті у телеграм!",
  )
  const bannerImg = document.createElement('img')
  bannerImg.src = '/svg/telegram-icon.svg'
  bannerImg.alt = 'Telegram'
  banner.append(bannerP, bannerH2, bannerImg)

  const infoSection = createElement(
    'section',
    'community__info',
  )
  const infoH3 = createElement(
    'h3',
    null,
    'Що таке база знань?',
  )
  const infoP = createElement(
    'p',
    null,
    'База знань — база даних, що містить правила виводу та інформацію про людський досвід і знання в певній предметній області. У самообучуваних системах база знань також містить інформацію, що є результатом розв’язання попередніх задач.',
  )
  infoSection.append(infoH3, infoP)

  const communityButton = createElement(
    'button',
    'community__button',
    "Перейти до ком'юніті у Телеграм",
  )

  community.append(
    communityHeader,
    banner,
    infoSection,
    communityButton,
  )
  page.append(community)
  page.append(post)
})
