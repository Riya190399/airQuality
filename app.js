const API_KEY= `e835e1ba1d13307d87c4c7b41858df11268ae4b8`;
// const API= `https://api.waqi.info/feed/${city}/?token=${API_KEY}`

const form= document.querySelector("form");
const refresh=document.querySelector("#refresh");
const searchBox=document.querySelector("#search")
const airQuality=document.querySelector("#airQuality");
const spanfeed=document.querySelector("#city-aqi-container");
const submitbtn=document.querySelector("#submit");


const getAirQuality= async(city)=>{

    const url=`http://api.waqi.info/feed/${city}/?token=${API_KEY}&units=metric`;
    const response= await fetch(url);
    const data=await response.json();
    const mc = data.data;
    return showData(mc);
};

  

const showData=(data)=>{
    
    airQuality.innerHTML=`
    <div>   
        <h4>${data.city.name}</h4>
    </div>

    <div>   
        <h5>Air Quality Index: ${data.aqi}</h5>
    </div>
      

`
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    getAirQuality(search.value);
    return _aqiFeed({  container:"city-aqi-container",  city:search.value });  
});
submitbtn.addEventListener("click", function(event){
    
    getAirQuality(search.value);
    return _aqiFeed({  container:"city-aqi-container",  city:search.value });  
});


refresh.addEventListener("click", function(){
    airQuality.innerHTML="";
    spanfeed.innerHTML="";
    console.log("workin");
    
});


//widget

    (function (w,d,t,f)
    {  
    w[f]=w[f] || function(c,k,n)
    {s=w[f],k=s['k']=(s['k']||(k?('&k='+k):''));
    s['c']=c=(c  instanceof  Array)?c:[c];
    s['n']=n=n||0;
    L=d.createElement(t),e=d.getElementsByTagName(t)[0];  
    L.async=1;
    L.src='//feed.aqicn.org/feed/'+(c[n].city)+'/'+(c[n].lang||'')+'/feed.v1.js?n='+n+k;  
    e.parentNode.insertBefore(L,e);  
    };  
    })
    (  window,document,'script','_aqiFeed'  );

 //saving cache

//  const cacheTime=10000;
//  const cache={};
//  let cacheTimer=0;

//  const getCacheTimer=(timer)=>
//  {
//  const now=new Date().getTime();
//  if(cacheTimer< now+time){
//     cacheTimer=now+time;
//  }

//  return cacheTimer;
//  }



// const fetchWithCache = async (city,time)=>{
//     const now=new Date().getTime();
//     if(!cache(city) || cache[city].cacheTimer < now)
//     {
       
        
//         const getAirQuality= async(city)=>{

//             const url=`http://api.waqi.info/feed/${city}/?token=${API_KEY}&units=metric`;
//             const response= await fetch(url);
//             const data=await response.json();
//             const mc = data.data;
//             return showData(mc);
//         };

//     }
// }