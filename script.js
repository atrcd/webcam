navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        const video = document.querySelector('video');
        video.srcObject = stream;
        video.play();

        document.querySelector('button').addEventListener('click', () => {
            const canvas = document.querySelector('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(video, 0, 0);

            // Salvar a imagem no canvas como uma URL
            const imgUrl = canvas.toDataURL('image/png');
            console.log('Foto capturada:', imgUrl);
        });
    })
    .catch(error => {
        console.error('Erro ao acessar a câmera:', error);
    });
