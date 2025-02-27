(function(){
    'use strict';

    const tabs = document.querySelectorAll('#tabs > ul > li > a');

    /* for(let i=0; i < tabs.length; i++){
        tabs[i].addEventListener('click', selectTab);
    } */

    //This does the same thing but is easier to read:   
    tabs.forEach(function(tab){
        tab.addEventListener('click', selectTab)
    });

    function selectTab(event){
        event.preventDefault();

        /* for(let i=0; i < tabs.length; i++){
            tabs[i].removeAttribute('class');
        } */

        //easier code:
        tabs.forEach(function)

        event.target.className = "active";

        const thisTab = event.target.getAttribute('href');
        const thisContent = document.querySelector(thisTab);

        const oldContent = document.querySelector('.visible');
        oldContent.className = "visuallyhidden";
        oldContent.addEventListener('transitionend', function(){
            oldContent.className = 'hidden';
            thisContent.className='visible visuallyhidden';
            setTimeout(function(){
                thisContent.classList.remove('visuallyhidden');
            }, 20);
        },{capture:false, once:true, passive:false});
    }

})();



//My notes below:
/* var tabs = document.querySelectorAll('#tabs > ul > li > a');

for(var i=0; i < tabs.length; i++){
    tabs[i].addEventListener('click', selectTab);
}

function selectTab(event){
    event.preventDefault();//removing the little dash on the tabs
    //remove class "active" link to add it to the one we have clicked
    for(var i=0; i < tabs.length; i++){
        tabs[i].removeAttribute('class');
    }
    //now add it to the one we have clicked on
    event.target.className = "active";
    //display new tab and move old tab
    var thisTab = event.target.getAttribute('href');
    var thisContent = document.querySelector(thisTab);
    //get old tab content
    var oldContent = document.querySelector('.visible');
    oldContent.className = "visuallyhidden";
    oldContent.addEventListener('transitionend', function(){
        oldContent.className = 'hidden';
        //the new content (thisTab) is set to visible, but with the opactity at 0
        //then after a short setTimeout, change the opacity to 1, so it fades in
        thisContent.className='visible visuallyhidden';
        //now we need to make it wait so opactiy comes up to 100%
        setTimeout(function(){
            thisContent.classList.remove('visuallyhidden');
        }, 20);
    },{capture:false, once:true, passive:false});//adding ,{} to fix our bug glitch
}
 */
