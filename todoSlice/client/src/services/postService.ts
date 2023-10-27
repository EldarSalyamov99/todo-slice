import type { PostType } from "../types/postType";
import apiClient from "./apiConfig";


export function allPostsService():Promise<PostType[]>{
    return apiClient
        .get<PostType[]>('/posts')
        .then(({data}) => data)
        .catch((err) => Promise.reject(err))
}

export function addPostService(formData: FormData):Promise<PostType>{
    return apiClient
    .post<PostType>('/posts', Object.fromEntries(formData))
    .then(({data}) => data)
    .catch((err) => Promise.reject(err))
}

export function removePostService(id:number):Promise<{message:string}>{
    return apiClient
        .delete<{message:string}>(`/posts/${id}`)
        .then(({data}) => data)
        .catch((err) => Promise.reject(err))
}
export function patchPostService(id:number, formData: FormData): Promise<PostType> {
    return apiClient
    .patch<PostType>(`/posts/${id}`, Object.fromEntries(formData))
    .then(({data}) => data)
    .catch((err) => Promise.reject(err));
}