import React, { useContext } from "react";
import Card from "./Card";
import { AppContext } from "../../Context/Context";

const Content = () => {
    const { data }= useContext(AppContext);
    const { hits } = data;
    return (
        <div className={"content"}>
             {hits && hits.length !== 0 ? hits.map((img, index) => (
                   <Card key={index} comments={img.comments} downloads={img.downloads} likes={img.likes} id={img.id} tags={img.tags} user={img.user} views={img.views} userImageURL={img.userImageURL} webFormatURL={img.webformatURL} />
               )) : <h1 className="not-found">Image Not Found</h1> }
        </div>
    );
}

export default Content;