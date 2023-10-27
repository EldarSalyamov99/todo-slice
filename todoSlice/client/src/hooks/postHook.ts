import { patchPost, removePost, setPost, setPosts } from "../features/redux/slices/postSlices"
import { addPostService, allPostsService, patchPostService, removePostService } from "../services/postService"
import { useAppDispatch } from "./reduxHook"


export default function postHooks():{
    getPostsActionHandler: () => void,
    addPostActionHandler: (e: React.FormEvent<HTMLFormElement>)=> void,
    removePostActionHandler: (e: React.MouseEvent<HTMLElement>, id: number) => void,
    patchPostActionHandler: (e:React.FormEvent<HTMLFormElement>, id:number) => void
} {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useAppDispatch()

    const getPostsActionHandler = (): void => {
        allPostsService()
        .then((data) => dispatch(setPosts(data)))
        .catch((err) => Promise.reject(err))
    }
    const addPostActionHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        addPostService(formData)
        .then((data) => dispatch(setPost(data)))
        .catch((err) => Promise.reject(err))
    }
    const removePostActionHandler = (e: React.MouseEvent<HTMLElement>, id: number): void => {
        e.preventDefault();
        removePostService(id)
        .then(() => dispatch(removePost(id)))
        .catch((err) => Promise.reject(err))
    }
    const patchPostActionHandler = (e:React.FormEvent<HTMLFormElement>, id:number):void =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        patchPostService(id, formData)
        .then((data) => dispatch(patchPost(data)))
        .catch((err) => Promise.reject(err))
    }
    return {
        getPostsActionHandler,
        addPostActionHandler,
        removePostActionHandler,
        patchPostActionHandler
    }
}