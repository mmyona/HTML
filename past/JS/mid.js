let email='hyon2001@jou.kr.ac';

if(email.indexOf('@')){
    if((email.substring(email.indexOf('@'))).indexOf('.')!==-1){
      console.log('true')
      }
    else{
        console.log('false')
    }
}
else{
    console.log('false')
}

