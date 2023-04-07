const user=JSON.parse(localStorage.getItem('chat-user'))
export const initialState={
    user:user?user:null
}