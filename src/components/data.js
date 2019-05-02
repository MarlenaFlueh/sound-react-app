import axios from "axios";
const dbApi = "http://192.168.2.115:8086/query?db=noise&q=SELECT*FROM+%22noise_data%22+WHERE room='300' ORDER BY time desc limit 10";
const raspbiApi = "http://192.168.2.114:5000";

export const getChartData = async () => {
    const res = await fetch(dbApi);
    const json = res.json();
    return json;
}

export const sendGrenzwert = async (value) => {
    const res = await axios.post(raspbiApi, {
        value
    });
    return res.data;
};
