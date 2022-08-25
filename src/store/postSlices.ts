import { createSlice } from '@reduxjs/toolkit'
import { Post } from '@/types/post'

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        postAdded(state: Post[], action) {
            const post: Post = {
                id: action.payload.id,
                desc: action.payload.desc,
                image: action.payload.image
            }
            state.push(post)
        }
    }
})

export const { postAdded } = postsSlice.actions
export const getPosts = (state: { posts: Post[] }): Post[] => state.posts.slice().sort((a, b) => b.id - a.id)
export default postsSlice.reducer