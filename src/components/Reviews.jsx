import { useState } from 'react';



function Reviews ({dataBase, imgs, page}){

    const[review, setReview] = useState(0)
    return (
        <>
                 <div className={`reviews_slider ${page}`}>
            <h1>Mis reseñas</h1>
            <ul className="reviews">
 {review !== '' &&
    dataBase.map((data, i)=>(
                    <li key={`review ${i}`} className={`users ${review === i && 'active'}`}>
                    <img src={imgs[i]} alt="user" className="user" />
                    <div className={`review ${page}`}>
                        <p>{data.review}</p>
                        <b className={`user_name ${page}`}>{data.user}</b>
                    </div>
                    </li>
                ))
}
</ul>

<ul className="dot-container nav-reviews">

{review !== '' &&
    dataBase.map((data, i)=>(
        <li key={`review ${i}`} className={`dot review_dot ${review === i && 'active'} ${page}`} onClick={()=>{setReview(i)}}></li>
    ))
}
    </ul>

        </div>
        </>
    )
}

export default Reviews;