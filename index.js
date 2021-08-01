const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

refs = {
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
     body:        document.querySelector('body'),

}

let isActive = true;
let timerId = null


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const onClickColorStart = () => {
     
    if (isActive) {
        isActive = false;

        timerId = setInterval(() => {
              
            let randomColorLength = randomIntegerFromInterval(0, colors.length - 1);

            refs.body.style.backgroundColor = colors[randomColorLength]
          
       
        }, 1000 )
        
    }
}

const onClickColorStop = () => {
isActive= true
clearInterval(timerId)

}

refs.btnStart.addEventListener('click', onClickColorStart)
refs.btnStop.addEventListener('click', onClickColorStop);



     
     

   
        
   
   
 
 
