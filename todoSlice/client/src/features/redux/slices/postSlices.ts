import type { PayloadAction} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { PostType } from "../../../types/postType";



const initialState: PostType[] = []

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPosts :(state, action: PayloadAction<PostType[]>) => action.payload,
        setPost:(state, action:PayloadAction<PostType>) => {
            state.push(action.payload);
        },
        removePost:(state, action:PayloadAction<number>) => state.filter((el) => el.id !== action.payload),
        patchPost:(state, action:PayloadAction<PostType>) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            state[index] = action.payload
        }
    },
});

export default postSlice.reducer;
export const {setPosts, setPost, removePost, patchPost} = postSlice.actions;