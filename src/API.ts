import axios from "axios";

export const getReports = async () => {
    const request = axios.get("http://localhost:3001/reports");
    return await request
        .then((response) => response.data)
        .catch((err) => err);
}

export const postReport = async (report: any) => {
    await axios.post("http://localhost:3001/reports", report);
}

export const deleteReport = async (id: any) => {
    await axios.delete(`http://localhost:3001/reports/${id}`)
}

export const getImage = async () => {
    return await fetch("http://localhost:3000/api/v1/image")
        .then((response) => response.blob())
        .then((imgURL) => URL.createObjectURL(imgURL))
        .catch((err) => err);
}

export const getReasons = async () => {
    const request = axios.get("http://localhost:3001/reasons");
    return await request
        .then((response) => response.data)
        .catch((err) => err);
}

export const postReason = async (reason: any) => {
    await axios.post("http://localhost:3001/reasons", reason);
}

export const hasData = () => {
    return getReports()
        .then((result) =>
            result.length === 0 ? false : true
        )
        .catch((err) => {
            console.log(err)
        });
}
