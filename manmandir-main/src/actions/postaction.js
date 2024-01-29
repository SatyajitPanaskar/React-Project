
export const fetch_post_action = () => {
    return {
        type: 'FETCH_POST'
    }
}

export const fetch_post_Sucess = data=> {
    
    return {
        type: 'FETCH_POST_SUCCESS',
        data :data
    }
}

export const fetch_post_failure = () => {
    return {
        type: 'FETCH_POST_FAILURE'
    }
}


export const fetchPost = () => {
    return  (dispatch) =>{
        dispatch(fetch_post_action())
        return fetch(' ')
           .then(Response => Response.json())
           .then(data => {
            //    setTimeout(() => {
                dispatch(fetch_post_Sucess(data));
            //    }, 10000);
           
        })
        .catch(err=> {
            dispatch(fetch_post_failure())
        })
    }
}
   