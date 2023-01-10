//import { parseCookies } from "nookies";

///const {lang}=parseCookies(undefined)
export const initialState = {
    avatar: '',
    mode:'',
    user:'',
    email:'',
    token:'',
    id:'',
    lang:'',
    html:'',
    inputs:[],
    lenArray:0,
    lenArraySub:0


}; 

export const UserReducer = (state, action) => {
    switch(action.type) {
case 'setToken':return { ...state, token: action.payload.token };break;

        case 'setMode':
            return { ...state, mode: action.payload.mode };
        break;
        case 'setUser':
            return { ...state, user: action.payload.user };
        break;
        case 'setId':
            return { ...state, id: action.payload.id };
        break;
        case 'setEmail':
            return { ...state, email: action.payload.email };
        break;
        case 'setLang':
            return { ...state, lang: action.payload.lang };
        break;
        case 'setHtml':
            return { ...state, html: action.payload.html };
        break;
        case 'setInput':
            return { ...state, inputs: action.payload.inputs };
            break;
            case 'setLenArray':
                return { ...state, lenArray: action.payload.lenArray };
                break;
                case 'setLenArraySub':
                    return { ...state, lenArraySub: action.payload.lenArraySub };
        default:
            return state;
    }
}