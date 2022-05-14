const button = document.querySelector("button");

const input  = document.querySelector("input");

const form  = document.querySelector("form");

const containerr = document.getElementById("containerr");




containerr.addEventListener("click" ,(eo) => {
    

    if (eo.target.className == "fa-solid fa-xmark") 
    {       
        eo.target.parentElement.parentElement.remove();
    }
    else if(eo.target.className == "fa-solid fa-check")
    {
        const heart = ` <i class="fa-solid fa-heart"></i> `;
        
        
        eo.target.classList.add("disply_none");

        eo.target.parentElement.innerHTML += heart;
    }
    else if(eo.target.className == "fa-solid fa-heart")
    {
        const mark = ` <i class="fa-solid fa-check"></i> `;

        eo.target.classList.add("disply_none");

        eo.target.parentElement.innerHTML += mark;
    } 
    else if(eo.target.className == "fa-solid fa-star")
    {
        eo.target.classList.add("orange");
        // 3lashan yzhar fe foo2 
        containerr.prepend(eo.target.parentElement);
    }
    else if(eo.target.className == "fa-solid fa-star orange")
    {
        eo.target.classList.remove("orange");
    }
});


form.addEventListener("submit" , (eo) => {
    
    eo.preventDefault();

    const task = `
    <div class="task">
        <i class="fa-solid fa-star"></i>
        <P> ${input.value}</P>
        <section class="font-awsome">
            <i class="fa-solid fa-check"></i>
            <i class="fa-solid fa-xmark"></i>
        </section>
    </div> `;

    if(input.value != ""){

        containerr.innerHTML += task;
    }
    else{
        alert("Please Enter a list")
    }

    input.value = "";
    
}
);

