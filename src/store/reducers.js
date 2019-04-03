const initialState = {
    lang: 'En',
    page: 'index',
    sent: 'false',
    back: 'back',
    mobile: 'false',
    menu: 'set',
    video1: '0',
    video2: '0',
    video3: '0',
    video4: '0',
    popup: 'false'
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case 'CHANGE_LANG' :
            return { ...state,lang: action.payload };
        case 'CHANGE_PAGE' :
            return { ...state,page: action.payload };
        case 'CHANGE_VIEW' :
            return { ...state,page: action.payload };
        default:
          return state;
    }
}

export default rootReducer;
