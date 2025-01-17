import { useState, useEffect } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import axios from 'axios';

export default function QRScanner() {
  const [scanResult, setScanResult] = useState(null);
  const [dishData, setDishData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cameraOn, setCameraOn] = useState(false);
  const [cameraMode, setCameraMode] = useState('environment'); // 'environment' for back camera, 'user' for front camera

  useEffect(() => {
    const detectCameras = async () => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      if (videoDevices.length > 0) {
        setCameraMode(videoDevices[0].facing == 'user' ? 'user' : 'environment');
      }
    };

    detectCameras();
  }, []);

  const handleScan = async (data) => {
    if (data) {
      const scannedDish = JSON.parse(data);
      setScanResult(scannedDish);
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`/api/dish/${scannedDish.dishName}`);
        setDishData(response.data);
      } catch (error) {
        setError('Error fetching dish data');
        console.error('Error fetching dish data:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleError = (err) => {
    console.error('QR Scan error:', err);
    setError('Error scanning QR code. Please try again.');
  };

  const toggleCamera = () => {
    setCameraOn(!cameraOn);
  };

  const flipCamera = () => {
    setCameraMode((prevMode) => (prevMode === 'environment' ? 'user' : 'environment'));
  };

  return (
    <div style={styles.container}>
      <div style={styles.scannerContainer}>
        {cameraOn ? (
          <div style={styles.scannerWrapper}>
            <Scanner
              delay={300}
              onError={handleError}
              onScan={handleScan}
              facingMode={cameraMode}
              style={styles.scanner}
            />
            <div style={styles.scanningOverlay}></div>
          </div>
        ) : (
          <p style={styles.instructions}>Camera is off. Press "Start Camera" to scan a QR code.</p>
        )}
      </div>

      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={toggleCamera} className="bg-gradient-to-r from-[#7A2F83] via-[#B92F72] to-[#EE4043]">
          {cameraOn ? 'Finish' : 'Start Camera'}
        </button>
        {cameraOn && (
          <button style={styles.button} onClick={flipCamera} className="bg-gradient-to-r from-[#7A2F83] via-[#B92F72] to-[#EE4043]">
            Flip Camera
          </button>
        )}
      </div>

      {loading && <p style={styles.loadingText}>Loading dish data...</p>}
      {error && <p style={styles.errorText}>{error}</p>}

      {scanResult && !loading && (
        <div style={styles.resultContainer}>
          <h3 style={styles.dishName}>Scanned Dish: {scanResult.dishName}</h3>
          <ul style={styles.itemsList}>
            {scanResult.items.map((item, index) => (
              <li key={index} style={styles.item}>
                {item.name}: {item.quantity} x {item.calories} cal
              </li>
            ))}
          </ul>
          <h4 style={styles.totalCalories}>
            Total Calories: {dishData ? dishData.totalCalories : 'Fetching total calories...'}
          </h4>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
  },
  scannerContainer: {
    marginBottom: '20px',
    width: '100%',
    maxWidth: '500px',
    border: '2px solid #ddd',
    borderRadius: '10px',
    padding: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  scannerWrapper: {
    position: 'relative',
    width: '100%',
    height: 'auto',
  },
  scanner: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  scanningOverlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '8px',
    animation: 'pulse 2s infinite',
  },
  instructions: {
    fontSize: '16px',
    color: '#888',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
    margin: '5px',
  },
  loadingText: {
    fontSize: '18px',
    color: '#333',
  },
  errorText: {
    fontSize: '16px',
    color: 'red',
  },
  resultContainer: {
    marginTop: '20px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '600px',
  },
  dishName: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  itemsList: {
    paddingLeft: '20px',
    listStyleType: 'none',
  },
  item: {
    fontSize: '18px',
    color: '#555',
  },
  totalCalories: {
    marginTop: '10px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
  },
};

// Add animation for the scanning overlay
const pulseAnimation = `@keyframes pulse {
  0% { opacity: 0.3; }
  50% { opacity: 0.6; }
  100% { opacity: 0.3; }
}`;

document.styleSheets[0].insertRule(pulseAnimation, 0);
