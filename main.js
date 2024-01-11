import './style.css'
import * as hamburger from './js/hamburder.js'
import * as myfetch from './js/fetch.js'
    
    hamburger.navShow.addEventListener('click', hamburger.openNav);
    hamburger.show.addEventListener('click', hamburger.closeNav);
    
    
    async function getData() {
        let yourData = await myfetch.fetchData();
        console.log(yourData)
    }
    
    getData();
    
    myfetch.fetchData('hindi-song')
    myfetch.fetchData('english-song')