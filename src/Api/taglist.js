import axios from "axios"

const callTagList = async () => {
    let response = [];
    await axios.get("https://api.codingninjas.com/api/v3/event_tags").then((res) => {
        console.log(res.data.data.tags);
        response = [...res.data.data.tags]
    }).catch((err) => {
        console.log(err)
    })

    return response
}

export default callTagList;