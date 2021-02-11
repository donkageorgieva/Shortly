class UI {
    constructor(){
        this.linkList = document.querySelector('.linkList');
    }
 
    loading(){
        if (this.linkList.querySelector('h2') != undefined){
            return;
        } else{
            const loadingElement = document.createElement('h2');
            loadingElement.textContent = 'Loading...';
            loadingElement.classList.add('py-4');
            const linkList = document.querySelector('.linkList');
            linkList.append(loadingElement);
        }
      
    }
    displayALink(longLink, shortLink){
        console.log(longLink);
        console.log(shortLink);
      if (this.linkList.querySelector('h2') != undefined){
        const h2 =  this.linkList.querySelector('h2');
        this.linkList.removeChild(h2);
      } 
      const generatedLink = document.createElement('div');
      generatedLink.classList.add('linksStyle');
      generatedLink.classList.add('my-1');
      generatedLink.innerHTML = `<div class='m1'><p class='py-2'>${longLink} </p></div><div class='flex '> <a href="#" class='py-2'>${shortLink} </a> <button class='copy-btn'> Copy</button></div>`;
      this.linkList.append(generatedLink);
      const buttons = document.querySelectorAll('.copy-btn');
      this.copyALink(buttons);
    }
    copyALink(buttonArray){
        buttonArray.forEach(btn => {
            btn.addEventListener('click', (e)=> {
                const divElement = btn.closest('div');
                if (btn.classList.contains ('copied')){
                    btn.classList.remove('copied');
                }
                const link = divElement.querySelector('a').textContent;
              
            navigator.clipboard.writeText(link);
            

           

            })
        })
    }
   
}
class Storage {
    static addToStorage(link){

    }
}
class APIHandler extends UI{
    async shortenALink(link){
        this.loading();
       try{
           let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`, {
               method: 'POST'
           })
       
           let results = await response.json();
   
    
         const shortLink = results.result.full_short_link;
         const longLink = results.result.original_link;
         this.displayALink(longLink, shortLink);
        
       } catch(error){
        
        document.querySelector('input').classList.add('invalid');
        this.loading();
       }

    }
    

}

class DOMHandler extends APIHandler {
    inputHandler(){
        const input = document.querySelector('form input');
        input.addEventListener('click', ()=> {
            if (input.focus){
                input.value.select();
              
            }
        })
    }

    init(){
     this.inputHandler;
    document.querySelector('.shorten-btn').addEventListener('click', (e)=>{
        e.preventDefault();
       
       
     
        this.getTheLink();
    
  
     

    })

     
 
    }
    getTheLink(){
        let  link = document.querySelector('form input').value;
        const spanelement = document.querySelector('span')
        const inputElement = document.querySelector('input')
        if (link === ''){
          
           spanelement.style.opacity = '1';
      
           inputElement.classList.add('invalid');
        } else {
            if(spanelement.style.opacity = '1'){
                spanelement.style.opacity = '0';
            } 
            if( inputElement.classList.contains('invalid')){
               inputElement.classList.remove('invalid');
            }
            this.shortenALink(link);

        }
    }


}



document.querySelector('.burgerMenu').addEventListener('click', ()=> {
    const burgerLinks = document.querySelector('.burgerLinks');
    burgerLinks.classList.toggle('active');
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.classList.toggle('active');
    })
    document.querySelector('.burgerMenu').classList.toggle('activeBurgerMenu');
})




const app = new DOMHandler;
app.init();