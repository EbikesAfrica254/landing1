import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [36.8219, -1.2921], // Nairobi, Kenya coordinates
      zoom: 12,
    });

    // Add marker for office location
    new mapboxgl.Marker({ color: '#228B22' })
      .setLngLat([36.8219, -1.2921])
      .setPopup(new mapboxgl.Popup().setHTML('<h3 class="font-bold">Ebikes Africa HQ</h3><p>Nairobi, Kenya</p>'))
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  if (showTokenInput && !mapboxToken) {
    return (
      <div className="w-full bg-muted/30 p-8 border-2 border-border">
        <h3 className="text-xl font-bold mb-4">Map Configuration Required</h3>
        <p className="text-muted-foreground mb-4">
          To display the map, please enter your Mapbox public token. Get one at{' '}
          <a 
            href="https://mapbox.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            mapbox.com
          </a>
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter Mapbox token"
            className="flex-1 px-4 py-2 border border-input bg-background"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setMapboxToken((e.target as HTMLInputElement).value);
                setShowTokenInput(false);
              }
            }}
          />
          <button
            onClick={(e) => {
              const input = (e.target as HTMLButtonElement).previousElementSibling as HTMLInputElement;
              setMapboxToken(input.value);
              setShowTokenInput(false);
            }}
            className="px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Load Map
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] md:h-[500px] border-2 border-border">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};
