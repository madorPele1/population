let category=0; 
let phoneClick=0;
let chosenCategory = false;

window.addEventListener('load', () => {
    console.log(sessionStorage.getItem("firstTime"));
    document.getElementById('phoneIcon').addEventListener("click",()=>{
        if(phoneClick===0){
            document.getElementById('phoneList').style.height="80vh";
            document.getElementById('phoneList').style.right="48.5vw";
            phoneClick=1;
        }

        else{
            document.getElementById('phoneList').style.height="0";
               document.getElementById('phoneList').style.right="55vw";
             phoneClick=0;
        }
    })

    currentPage = window.location.href;
        console.log(currentPage);

    currentPage = currentPage.split("/");
    currentPage = currentPage[currentPage.length -1];
    console.log(currentPage);

    if (currentPage === "index.html") {
        category = -1;
    } else {
        category = currentPage[8];
    }



    console.log(category);

    if(category>0){
         document.getElementById(`homeIcon`).addEventListener("click", () =>{
            category=0;
            window.location.href = `../category0.html`;
        })
    }

    if(category<=0){
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`category${i}`).addEventListener("click", () =>{
                window.location.href = `pages/category${i}.html`;
            })
        }
            document.getElementById('startButton').addEventListener("click",() =>{
            document.getElementById('startPage').style.display="none";
            document.getElementById('explenationHome').style.display="block";
            document.getElementById('homepage').style.display="block";
            document.getElementById('phoneList').style.display="none";
        })
            document.getElementById('continueBtn').addEventListener("click",()=>{
            document.getElementById('soliderHome').style.display="block";
            document.getElementById('explenationHome').style.display="none";    
        })

        if (firstTime==="false") {{
            document.getElementById('startPage').style.display="none";
            document.getElementById('explenationHome').style.display="block";
            document.getElementById('homepage').style.display="block";
            document.getElementById('phoneList').style.display="none";
            document.getElementById('soliderHome').style.display="block";
            document.getElementById('explenationHome').style.display="none";
        }}
    }

         if (category === 0) {
          document.getElementById('homepage').style.display="block";
     }
})
