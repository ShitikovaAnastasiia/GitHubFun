import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const LS_SV_KEY = 'LSK'

interface GithubState {
    saved: string[]
}

const initialState: GithubState = {
    saved: JSON.parse(localStorage.getItem(LS_SV_KEY) ?? '[]')
}
export const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addSaved(state, action: PayloadAction<string>) {
            state.saved.push(action.payload)
            localStorage.setItem(LS_SV_KEY, JSON.stringify(state.saved))
        },
        removeSaved(state, action: PayloadAction<string>) {
            state.saved = state.saved.filter(f => f !== action.payload)
            localStorage.setItem(LS_SV_KEY, JSON.stringify(state.saved))
        },
    }
})
export const githubActions = githubSlice.actions
export const githubReducers = githubSlice.reducer