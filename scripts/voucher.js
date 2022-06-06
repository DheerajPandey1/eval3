function myFunction(){
    let wallet=document.getElementById("wallet_balance").value
    let data=JSON.parse(localStorage.getItem("user"))
  }
  
  const data=JSON.parse(localStorage.getItem("user"))||[]
  
  let url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`
  let voucher_list=document.getElementById("voucher_list")
  
  fetch(url)
  
  .then(function(res){
    return res.json();
  })
  .then(function(res){
    // console.log(res)
    return appendData(res[0].vouchers)
  })
  
  .catch(function(err){
    console.log(err)
  })
  
  let arr=JSON.parse(localStorage.getItem("purchase")) || []
  function appendData(data){
    data.forEach(function(el){
      let container=document.createElement("div")
    
      let name=document.createElement("P")
      name.innerText=el.name;
  
      let img=document.createElement("img")
      img.src=el.image;
  
      let price=document.createElement("p")
      price.innerText=el.price;
      
      let btn=document.createElement("button")
      btn.innerText="Buy"
      btn.addEventListener("click",function(){
  
      })
    container.append(img,name,price,btn)
    voucher_list.append(container)
    })
  }