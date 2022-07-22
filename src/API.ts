import axios from "axios";


export const getImage = async () => {
    return await fetch("http://localhost:3000/api/v1/image")
        .then((response) => response.blob())
        .then((imgURL) => URL.createObjectURL(imgURL))
        .catch((err) => err);
}

export const getReports = async () => {
    const request = axios.get("http://localhost:3001/reports");
    return await request
        .then((response) => response.data)
        .catch((err) => err);
}

export const getAllReports = async () => {
    const request = axios.get("http://localhost:3001/reasons");
    return await request
        .then((response) => response.data)
        .catch((err) => err);
}

export const getReasons = async () => {
    const request = axios.get("http://localhost:3001/reasons");
    return await request
        .then((response) => response.data)
        .catch((err) => err);
}

export const postReport = async (report: any) => {
    await axios.post("http://localhost:3001/reports", report);
}

export const deleteReport = async (id: number) => {
    await axios.delete(`http://localhost:3001/reports/${id}`)
}



export const postReason = async (reason: any) => {
    await axios.post("http://localhost:3001/reasons", reason);
}

export const getWhy = async () => {
    const request = axios.get("http://localhost:3001/why");
    return await request
        .then((response) => response.data)
        .catch((err) => err);
}

export const postImages = async (image: any) => {
    await axios.post("http://localhost:3001/reasons", image);
}

export const putImage = async ( imgURL: object, reasons: string[]) => {
    let request = await axios.get(`http://localhost:3001/reasons`);
    request.data.forEach((item: any) => {
        reasons.forEach((reason: string) => {
            if(item['reason'] === reason) {
                axios.put(`http://localhost:3001/reasons/${item['id']}`, {
                    id: item['id'],
                    reason: item['reason'],
                    srcs: [...item["srcs"], imgURL]
                })
            }
        })
    })
};


