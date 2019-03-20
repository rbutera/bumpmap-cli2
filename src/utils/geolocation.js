export function getGeoLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          console.debug('got pos: ', pos)
          const lat = pos.coords.latitude
          const lng = pos.coords.longitude
          resolve({ lat, lng })
        },
        err => {
          reject(err)
        },
      )
    } else {
      resolve({ lat: undefined, lng: undefined })
    }
  })
}

export default {
  getGeoLocation,
}
