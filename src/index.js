import dva from 'dva'
import './index.css'
// import createHistory from 'history/createBrowserHistory';
import { createBrowserHistory as createHistory } from 'history'

// 1. Initialize
const app = dva({
  history: createHistory(),
  initialState: {
    products: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 }
    ]
  }
})

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/products').default)
app.model(require('./models/product').default)
app.model(require('./models/checklist').default)
app.model(require('./models/element').default)
// 4. Router
app.router(require('./router').default)

// 5. Start
app.start('#root')
