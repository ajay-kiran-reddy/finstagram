import { postData } from "../../api/api";


const postSignUp = (data: any) => {
    return postData("/user/auth/signUp", data);
};

const postSignIn = (data: any) => {
    return postData("/user/auth/signIn", data)
};

export { postSignUp, postSignIn };