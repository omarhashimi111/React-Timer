export default (state,action)=>{
    switch(action.type){
        case "INCREASE":
            if(action.payload == "session-increment"){
                if(state.session.hr == 24){
                    return state
                }
                if(state.session.min == 59){
                    return {
                        ...state,
                        session:{ hr: state.session.hr + 1,min: 0}
                    }
                }
                return{
                    ...state,
                    session: {...state.session,min: parseInt(state.session.min) + 1}
                }
            }
            else {
                if(state.breaks.hr == 24){
                    return state
                }
                if(state.breaks.min == 59){
                    return {
                        ...state,
                        breaks:{ hr: state.breaks.hr + 1,min: 0}
                    }
                }
                return{
                    ...state,
                    breaks: {...state.breaks,min: parseInt(state.breaks.min) + 1}
                }
            };
        case "DECREASE":
            if(action.payload == "session"){
                if(state.session.hr == 0 && state.session.min == 1){
                    return state
                }
                if(state.session.min == 0){
                    return {
                        ...state,
                        session: {hr:state.session.hr - 1,min: 59 }
                    }
                }
                return{
                    ...state,
                    session: {...state.session,min: state.session.min - 1}
                }

            }else{
                if(state.breaks.hr == 0 && state.breaks.min == 1){
                    return state
                }
                if(state.breaks.min == 0){
                    return {
                        ...state,
                        breaks: {hr:state.breaks.hr - 1,min: 59 }
                    }
                }
                return{
                    ...state,
                    breaks: {...state.breaks,min: state.breaks.min - 1}
                }
            }
        case "PLAY":
            return {
                ...state,
                isPlay: !state.isPlay
            }
        case "RESET":
            return {
                ...state,
                isPlay: false
            }
        default:
            return state
    }
}