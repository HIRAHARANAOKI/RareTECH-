// 今日の日付を取得
const date = new Date();

// 日付をHTMLに表示
document.getElementById("today").innerHTML =
  dayjs(date).format("YYYY年MM月DD日");

// APIキーを入力
const API_KEY = "72ebb0ee87d18e08a49736b76195b07d";

// 今日の天気を取得
const getWeather = async () => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=33.590&lon=130.419&appid=${API_KEY}`
  );
  const data = await res.json();
  return data;
};

// 画面をロードした時に天気情報を取得
addEventListener("load", async () => {
  const weatherData = await getWeather();

  if (weatherData) {
    console.log(weatherData);

    document.getElementById("place").innerHTML = weatherData.name;

    document.getElementById("weather").innerHTML = weatherData.weather[0].main;
  }
});
