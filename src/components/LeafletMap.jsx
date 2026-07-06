import React, { useEffect, useRef, useState } from 'react';

export default function LeafletMap() {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // 1. Asynchronously load Leaflet CSS and JS from CDN
    const cssId = 'leaflet-cdn-css';
    const jsId = 'leaflet-cdn-js';

    if (!document.getElementById(cssId)) {
      const link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
      link.crossOrigin = '';
      document.head.appendChild(link);
    }

    const initMap = () => {
      if (!mapContainerRef.current || mapInstanceRef.current) return;

      try {
        const L = window.L;
        // Coordinates for SF Tech Hub
        const centerCoords = [37.7749, -122.4194]; 
        
        const map = L.map(mapContainerRef.current, {
          center: centerCoords,
          zoom: 13,
          scrollWheelZoom: false,
          zoomControl: false // Custom placement later
        });

        // Add custom zoom control at bottom-right
        L.control.zoom({ position: 'bottomright' }).addTo(map);

        // Add standard OSM tile layer
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 20
        }).addTo(map);

        // Custom Marker Pin
        const customIcon = L.divIcon({
          className: 'custom-div-icon',
          html: `<div class="w-6 h-6 bg-indigo-600 rounded-full border-3 border-white shadow-lg flex items-center justify-center animate-pulse"><div class="w-2.5 h-2.5 bg-white rounded-full"></div></div>`,
          iconSize: [24, 24],
          iconAnchor: [12, 12]
        });

        const marker = L.marker(centerCoords, { icon: customIcon }).addTo(map);
        marker.bindPopup(`
          <div class="p-2 text-slate-800 font-sans">
            <h4 class="font-bold text-sm">Vertex Systems HQ</h4>
            <p class="text-xs text-slate-500 mt-1">500 Innovation Way, Suite 100</p>
          </div>
        `).openPopup();

        mapInstanceRef.current = map;
        setIsLoaded(true);
      } catch (err) {
        console.error("Leaflet initialization failed: ", err);
        setError(true);
      }
    };

    if (!window.L) {
      const script = document.createElement('script');
      script.id = jsId;
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
      script.crossOrigin = '';
      script.onload = () => {
        initMap();
      };
      script.onerror = () => setError(true);
      document.body.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      // Clean up map instance on unmount
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  if (error) {
    return (
      <div className="w-full h-full bg-slate-100 dark:bg-slate-900 flex flex-col items-center justify-center text-center p-4 border border-dashed border-slate-300 dark:border-slate-800 rounded-xl">
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Map loading failed or offline</p>
        <span className="text-xs text-slate-400 dark:text-slate-500 mt-1">Vertex Systems HQ • San Francisco, CA</span>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative rounded-xl overflow-hidden border border-slate-200/60 dark:border-slate-800/60 shadow-inner">
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900 flex items-center justify-center z-20">
          <div className="w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div ref={mapContainerRef} className="w-full h-full min-h-[220px]" />
    </div>
  );
}
