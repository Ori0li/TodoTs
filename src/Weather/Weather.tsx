const Weather = () => {
  navigator.geolocation.getCurrentPosition((v) => {
    const { latitude, longitude } = v.coords;

    console.log(latitude);
  });

  return (
    <>
      <div>
        <img src="" alt="" />
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export default Weather;
