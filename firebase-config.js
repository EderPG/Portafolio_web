// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv0ylXMP3UzdPIYfE2Y2E46FtmqGNQoZU",
  authDomain: "portafolio-5e2ae.firebaseapp.com",
  projectId: "portafolio-5e2ae",
  storageBucket: "portafolio-5e2ae.appspot.com",
  messagingSenderId: "933193265892",
  appId: "1:933193265892:web:59ed915f58d9e591e872f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Función para obtener el enlace de descarga
async function descargarCV() {
    const cvRef = ref(storage, 'CV_Palomino-Garcia-Eder-Uriel.pdf'); // Ruta del archivo en Storage
    try {
        const url = await getDownloadURL(cvRef);
        window.open(url, '_blank'); // Abre el CV en una nueva pestaña para descargarlo
    } catch (error) {
        console.error("Error al descargar el CV:", error);
    }
}

// Asigna la función a `window` para que esté disponible globalmente
window.descargarCV = descargarCV;

export { descargarCV };