function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', onMove);
    
    function onMove(event){
        const offestX = event.offsetX
        const percent = Math.floor(offestX / event.target.clientWidth* 100)
    
        document.getElementById('result').textContent = `${percent}%`
    };
}