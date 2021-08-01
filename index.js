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

let cheket = true;
let colorId = null


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const onClickColorStart = () => {
     
    if (cheket) {
        cheket = false;

        colorId = setInterval(() => {
              
            let randomColorLength = randomIntegerFromInterval(0, colors.length - 1);

            refs.body.style.backgroundColor = colors[randomColorLength]
          
       
        }, 1000 )
        
    }
}

const onClickColorStop = () => {
cheket = true
clearInterval(colorId)

}

refs.btnStart.addEventListener('click', onClickColorStart)
refs.btnStop.addEventListener('click', onClickColorStop);



     

   
        
   
   
 
 
