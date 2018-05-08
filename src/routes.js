import App from './App'
import Calperiod from './pages/Calperiod'
import Calcmax from './pages/Calcmax'

const routes = [
    {
      path: '/',
      component: App,
      indexRoute: { component: Calperiod },
      childRoutes: [
        { path: 'calcmax', component: Calcmax },
      ]
    }
]
export default routes