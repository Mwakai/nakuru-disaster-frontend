import store from '../store.js'

import router from './routes.js'

router.beforeEach(async (to, from) => {})

router.afterEach(() => {
  store.checkRoute = true
})

export default router
