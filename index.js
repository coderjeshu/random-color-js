
window.onload = function () {
    const btn = document.getElementById('refresh_btn').addEventListener('click',()=>{
       window.location.reload()
    });
    
    addColor(); 
};
////to create color boxes

function create_box(){
    for (let i = 1; i <= 12; i++) {
        // colorBox is created to add some extra styling you can skip this part
        const colorBox = document.createElement('div');
        colorBox.classList.add('p-2','col-lg-3','col-md-3','col-4')
        /// main code
        const box = document.createElement('div');
        box.classList.add('box','p-2');//  
        colorBox.appendChild(box)
        document.querySelector('#color_cards').append(colorBox);
        box.style.cursor = 'pointer';
        // to copy 
        box.addEventListener('click', () => {
            navigator.clipboard.writeText(box.innerHTML);
            toastr(box.innerHTML)
        });
    }
}

///  to create random colors////
function RandomHexColorCode () {
    var chars = '0123456789abcdef';
    var colorLength = 6;
    var color = '';

    for (var i = 0; i < colorLength; i++) {
        var randomColor = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomColor, randomColor + 1);
    }
    return '#' + color;
}

/// to add color in box
function addColor () {
    create_box()
    const randomColorBlock = Array.from(document.querySelectorAll('.box'));
    randomColorBlock.forEach(e => {
        var newColor = RandomHexColorCode();
        e.style.backgroundColor = newColor;
        e.innerHTML = newColor;
    });
}

///toastr
function toastr(text) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    x.innerHTML = `${text} copied`
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }