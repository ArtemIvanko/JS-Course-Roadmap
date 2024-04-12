const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      (error) => {
        reject(error);
      }
    );
  });
}

const getLocation = async () => {
  try {
    const position = await getCurrentLocation();
    console.log(position);
  } catch (error) {
    console.log(error);
  }
}

const showInGoogleMaps = async () => {
  const position = await getCurrentLocation();
  const {coords: {latitude, longitude}} = position;
  window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`);
}

getLocation().then(showInGoogleMaps);