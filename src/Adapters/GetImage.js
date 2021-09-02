export  const GetImage = async (query, type, setData, other) => {
    let fetchData = await fetch(`https://pixabay.com/api/?key=23049458-4447dba852075312d87880013&q=${query}&image_type=${type}&pretty=true${other}`);
    let res = await fetchData.json();
    setData(res);
};

export const GetImageById = async (id, setData) => {
    let fetchData = await fetch(`https://pixabay.com/api/?key=23049458-4447dba852075312d87880013&pretty=true&id=${id}`)
    let res = await fetchData.json();
    setData(res);
}