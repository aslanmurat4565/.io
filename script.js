document.getElementById('connect-wallet').addEventListener('click', function() {
    // TronLink ile cüzdan bağlantısını sağla
    if (window.tronLink) {
        tronLink.request({ method: 'tron_requestAccounts' }).then(function(accounts) {
            console.log('Cüzdan Bağlandı:', accounts);
        }).catch(function(error) {
            console.error('Cüzdan Bağlantı Hatası:', error);
        });
    } else {
        alert('TronLink eklentisi yüklü değil.');
    }
});

document.getElementById('swap-tokens').addEventListener('click', function() {
    // Token swap işlemi kodunu buraya ekleyebilirsin
    document.getElementById('swap-status').innerText = 'Token swap işlemi başlatıldı...';
});

document.getElementById('buy-link').addEventListener('click', function() {
    window.location.href = 'https://sunpump.meme/token/TJGFuqZfeEHAWKmsSPpyYknahwSvNJJSne';
});

document.getElementById('chart-link').addEventListener('click', function() {
    window.location.href = 'https://m.ave.ai/token/TJGFuqZfeEHAWKmsSPpyYknahwSvNJJSne-tron';
});
