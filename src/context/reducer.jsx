export const stateType={
    SETUSER:"Set-user"
}
export const reducer=(state,action)=>{
    if(action.type===stateType.SETUSER){
        return {
            ...state,
            user:action.user
        }
    }
}
