            const array = [5,4,3,6,4];
            let currentmax = array[0];
            for(let i = 0 ; i < array.length;i++)
            {
                if(array[i]>currentmax){
                    currentmax = array[i];
                }
            }
            console.log(currentmax);

            let currentmin = array[0];
            for(let i = 0 ; i <array.length;i++){
             if(array[i]<currentmin){
                currentmin = array[i]
             }
            }
            console.log(currentmin);


            