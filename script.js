navigator.mediaDevices.getUserMedia = async () => {
    return new Promise((resolve, reject) => {
        const fakeStream = new MediaStream();
        resolve(fakeStream);
    });
};

const video = document.querySelector('video');
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch(error => {
        console.error('Erro ao acessar a câmera:', error);
    });
