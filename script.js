document.addEventListener('DOMContentLoaded', ()=>{
    const a = document.querySelectorAll('a');
    const childrens = document.querySelector('.study');
    const show = document.querySelector('[data-show]');
    const dropMenu = document.querySelector('.drop');

    a.forEach(item =>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();
        });
    });

    childrens.addEventListener('click', (e)=>{
        e.preventDefault();
        showVarious();
        
    });    

    dropMenu.addEventListener('mouseleave', (e)=>{
        if(e.target != childrens || e.target!= show || e.target != dropMenu){ let time = setTimeout(hideVarious,500);}
       
    });

    
    function showVarious(){
        show.classList.toggle('hide');
    }

    function hideVarious(){
        show.classList.remove('show');
        show.classList.add('hide');
    }

    const forms = document.querySelectorAll('form');
    
    console.log(forms);

    forms.forEach(item =>{
        bindPostData(item);
        
    });
    
    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await res.json();
    };

    function bindPostData(form) {
        form.addEventListener('submit', (e) =>{
            e.preventDefault();

           // request.setRequestHeader('Content-type');
            const formData = new FormData(form);
             

            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            
            postData('http://localhost:3000/comments',json)
            .then(data =>{
                console.log(data);

            })
            .finally(() =>{
                form.reset();
            });
        });
    }
    

    const study_choose = document.querySelectorAll('.register__text');
    const study_content = document.querySelectorAll('.register__form');
    
    study_choose.forEach((item,i) =>{
        item.addEventListener('click', (e)=>{
                if(i==1){
        
                    hideVar(i-1);
                    showVar(i);
                } else{
                hideVar(i+1);
                showVar(i);
            }
        });
    });
    
    function hideVar(i = 0){
        study_content[i].classList.remove('show');
        study_content[i].classList.add('hide');

        study_choose[i].classList.remove('default');
        
        
    }

    function showVar(i = 0){
        study_content[i].classList.add('show');
        study_content[i].classList.remove('hide');

        study_choose[i].classList.add('default');
    }

    hideVar();
    showVar();
});
