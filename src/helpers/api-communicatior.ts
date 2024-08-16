import axios from "axios"

export const loginUser = async (email:string, password:string) => {
    const res = await axios.post("http://localhost:5000/api/v1/user/login", {email, password});
    if(res.status !== 200){
        throw new Error("Unable to login");
    }
    const data = await res.data;
    return data;
}
export const signupUser = async (name: string, email:string, password:string) => {
    const res = await axios.post("http://localhost:5000/api/v1/user/signup", {name, email, password});
    if(res.status !== 201){
        throw new Error("Unable to signup");
    }
    const data = await res.data;
    return data;
}

export const checkAuthStatus = async () => {
    const res = await axios.get("http://localhost:5000/api/v1/user/auth-status");
    if(res.status !== 200){
        throw new Error("Unable to authenticate");
    }
    const data = await res.data;
    return data;
};

export const sendChatRequest = async (message:string) => {
    const res = await axios.post("http://localhost:5000/api/v1/chat/new", {message});
    if(res.status !== 200){
        throw new Error("Unable to send chat");
    }
    const data = await res.data;
    return data;
};

export const getUserChats = async () => {
    const res = await axios.get("http://localhost:5000/api/v1/chat/all-chats");
    if(res.status !== 200){
        throw new Error("Unable to send chat");
    }
    const data = await res.data;
    return data;
};

export const deleteUserChats = async () => {
    const res = await axios.delete("http://localhost:5000/api/v1/chat/delete");
    if(res.status !== 200){
        throw new Error("Unable to delete chats");
    }
    const data = await res.data;
    return data;
};

export const logoutUser = async () => {
    const res = await axios.get("http://localhost:5000/api/v1/user/logout");
    if(res.status !== 200){
        throw new Error("Unable to delete chats");
    }
    const data = await res.data;
    return data;
};