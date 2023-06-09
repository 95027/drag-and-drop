const leftBox = document.getElementById("left");
const rightBox = document.getElementById("right");
const lists = document.querySelectorAll("ul li");
const ulEl = document.getElementById("dropped");
const btnEl = document.getElementById('reset');


lists.forEach((list)=>{

    // for accessing the each list of items
    list.addEventListener("dragstart", (e) => {
        let selected = e.target;

        leftBox.addEventListener('dragstart',()=>{
           selected.classList.add('d-none');
        })
        leftBox.addEventListener('dragend',()=>{
            selected.classList.remove('d-none');
         })

        rightBox.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        rightBox.addEventListener("drop", (e) => {
            ulEl.appendChild(selected);
            setTimeout(()=>{
                alert('Item dropped successfully');
            },100)
            selected = null;
        });
    })
})

// for refreshing the website
btnEl.addEventListener('click', () => {
    location.reload();
})

