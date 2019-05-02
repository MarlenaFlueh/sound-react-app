const dbApi = "";

export const getChartData = async () => {
    const res = await fetch(dbApi);
    const json = res.json();
    console.log(json);
}
