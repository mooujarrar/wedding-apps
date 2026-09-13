import { useEffect, useRef } from 'react'
import { mapLocation } from '../data/events'

let mapsPromise

function loadGoogleMaps() {
  if (window.google?.maps?.Map) return Promise.resolve(window.google.maps)
  if (mapsPromise) return mapsPromise

  mapsPromise = new Promise((resolve, reject) => {
    const callbackName = '__weddingGoogleMapsReady'
    window[callbackName] = () => {
      delete window[callbackName]
      resolve(window.google.maps)
    }
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDxg5XqTGyOnpVvLOkqZNlzXCUV7yhSY-w&callback=${callbackName}`
    script.async = true
    script.defer = true
    script.dataset.googleMaps = 'true'
    script.onerror = () => {
      delete window[callbackName]
      reject(new Error('Google Maps API script failed to load'))
    }
    document.head.appendChild(script)
  })

  return mapsPromise
}

export default function GoogleMap({ className = '' }) {
  const mapElement = useRef(null)

  useEffect(() => {
    let cancelled = false
    const loadMap = async () => {
      const maps = await loadGoogleMaps()
      if (cancelled || !mapElement.current) return
      const map = new maps.Map(mapElement.current, {
        center: mapLocation,
        zoom: 12,
        mapTypeId: 'satellite',
        disableDefaultUI: true,
        clickableIcons: false,
        gestureHandling: 'none',
        keyboardShortcuts: false,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        styles: [
          { featureType: 'poi', stylers: [{ visibility: 'off' }] },
          { featureType: 'transit', stylers: [{ visibility: 'off' }] },
        ],
      })
      const marker = new maps.Marker({ map, position: mapLocation, title: 'Milchhäuschen Königswinter' })
      const infoWindow = new maps.InfoWindow({
        content: '<div style="padding:4px;font-family:Arial,sans-serif;font-size:10px;font-weight:600;color:#3e2723;white-space:nowrap;line-height:1.2">Milchhäuschen Königswinter</div>',
        disableAutoPan: true,
        maxWidth: 220,
      })
      infoWindow.open({ anchor: marker, map })
      let zoom = 12
      const zoomInterval = window.setInterval(() => {
        if (zoom < 16) { zoom += 1; map.setZoom(zoom); map.panTo(mapLocation) } else window.clearInterval(zoomInterval)
      }, 260)
      return () => window.clearInterval(zoomInterval)
    }
    let cleanupMap
    loadMap().then(cleanup => { cleanupMap = cleanup }).catch(error => console.error('Google Maps failed to load', error))
    return () => { cancelled = true; cleanupMap?.() }
  }, [])

  return <div ref={mapElement} className={className} />
}
