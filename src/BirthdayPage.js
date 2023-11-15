import $ from 'jquery'


const BirthdayPage = (props) => {

    const dobirth = props.birthdate ;
    console.log(dobirth)
    const userName = props.name

   function daysLeft(dob){
        let today = new Date();
        let birthday = new Date(dob);
        console.log(birthday)
        birthday.setDate(birthday.getDate()+1);
        birthday.setFullYear(today.getFullYear());
        if (today > birthday) {
             console.log('trueeeee')
            
        birthday.setFullYear(today.getFullYear() + 1);
        // let $message= $(`
        // <div className="Container" id="newclass">
        // <div id="newclass3"> {response} DAYS More Until your Birthday!</div>
        // </div> `)
        }

    const res =  Math.floor((birthday-today) / (1000*60*60*24))
    return res;                        
    }
    function calculateDays(dobirth, userName) {
        let today = new Date();       
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(1, '0'); //January is 0!
        let yyyy = today.getFullYear();

        const currentDate = mm + '/' + dd + '/' + yyyy;

        if(dobirth === currentDate){
            console.log(dobirth)
            fetch('https://type.fit/api/quotes')
            .then(response=>{        
                return response.json()
            })
            .then(response=>{
                let quoteData = response
                const getRandomText = () => {
                    let randomStr = "";
                    for (let i = 0; i < quoteData.length; i++) {
                      const randomNum = Math.floor(Math.random() * quoteData.length);                                            
                      randomStr = quoteData[randomNum];

                    }
                    return randomStr;
                  };
                  const cardKey = getRandomText()
                let $message = $(`
                <div id="userName">Happy Birthday<h2> ${userName}<h2><br>${cardKey.text}<br>${cardKey.author}</div>
                
                `)
                $('#newclass').append($message)
                });                         
           }
        else if (dobirth < currentDate){
            console.log(dobirth)

            daysLeft()
        }
        else {
    
            console.log('error')
            let $message = $(`
            <div id="userName">Happy Birthday</div>
            
            `)
            $('#newclass').append($message)
        }
    }   
        
        calculateDays(dobirth, userName)
        const response = daysLeft(dobirth)
        console.log(response)
   
    return(
        <>
            <div className="Container" id="newclass">
            </div>
            {response ?  <div className="Container" id="newclass2">
            <div id="newclass3"> {response} DAYS more Until your Birthday!</div>
            </div> : ''}
          
            <div className="Container" id="newclass3">
            </div>
        </>
        
    )
    }
    
export default BirthdayPage;