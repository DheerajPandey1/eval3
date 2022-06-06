function Suser(n,e,a,am){
    this.name=n;
    this.email=e;
    this.address=a;
    this.amount=am;
  
  }
  
  
  function user(e){
    e.preventDefault();
    let form=document.getElementById("form")
  
  let name =form.name.value;
  let email=form.email.value;
  let address=form.address.value;
  let amount=form.amount.value;
  // console.log(name,email,address,amount);
  
  let s1 = new(name,email,address,amount)
  let data=[];
  data.push(s1)
   
  localStorage.setItem("user",JSON.stringify(data));
  }
  