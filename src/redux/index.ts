/**
 * @name: index
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-15 19:39
 * @description：index
 * @update: 2022-07-15 19:39
 */

// TODO redux写法
// import {
// 	legacy_createStore as createStore,
// 	compose,
// 	applyMiddleware
// } from 'redux'
// import thunk from 'redux-thunk'
//
// import reducers from './reducers'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) || compose
//
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
//
// export default store

// TODO toolkit写法
import {configureStore} from '@reduxjs/toolkit'

import recommend from './recommend'

const store = configureStore({
	reducer: {
		recommend
	}
})

export default store


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
