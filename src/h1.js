export function createH1(text){
    const h1 = document.createElement('h1');
    h1.textContent = text;
    document.body.appendChild(h1);
}
