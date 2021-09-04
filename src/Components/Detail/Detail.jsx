import React, { useContext, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/Context";

export default function Detail({ match }) {
    const { data, GetImageById, setData } = useContext(AppContext),
        { id } = match.params,
        { hits } = data,
        { comments, downloads, likes, views, webformatURL } = hits ? hits[0] : JSON.parse(localStorage.photo)[0];
    useLayoutEffect(() => {
        GetImageById(id, setData);
        localStorage.setItem("photo", JSON.stringify(hits));
    }, [GetImageById, id, setData, hits]);
    return (
        <div className="detail">
            <Link to="/" className={"back"}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back To Home</Link>
            <div className="img-block">
                <img
                    src={webformatURL}
                    alt="content"
                    className="photo"
                />
            </div>
            <div className="img-content">
                {/* Views */}
                <div className="views" title={"Views | Ko'rishlar"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>{views}</span>
                </div>
                {/* Likes */}
                <div className="likes" title={"Likes | Yoqtirganlar"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>{likes}</span>
                </div>
                {/* Comments */}
                <div className="likes" title={"Comments | Izohlar"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                    <span>{comments}</span>
                </div>
                {/* Downloads */}
                <div className="downloads" title={"Downloads | Yuklab olishlar"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>{downloads}</span>
                </div>
            </div>
        </div>
    );
};