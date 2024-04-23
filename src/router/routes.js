const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/TodosPage.vue') },
      { path: '/help', component: () => import('src/pages/HelpPage.vue') },
      { path: '/about', component: () => import('src/pages/AboutPage.vue') },
      { path: '/contacts', component: () => import('src/pages/ContactPage.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
