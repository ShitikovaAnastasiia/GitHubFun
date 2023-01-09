import {createSlice} from "@reduxjs/toolkit";

interface GithubState {
    saved:string[]
}
const initialState:GithubState={
    saved:[]
}
export const githubSlice=createSlice({
    name:'github',
    initialState,
    reducers:{

    }
})