const users = [
    {
        name:'Brook', 
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    }, 
    {
        name:'David', 
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    }, 
    {
        name:'John', 
        scores:85,
        skills:['HTM'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
    ];
    
    users.filter(x=>x.scores>85)
    let name = "preetham"
    let newObj = {
      name:'preetham',
      scores:100,
      skills:['html','css'],
      age:25
    }
    let flag;
    users.map(x=>{
      x.name===name?flag = true:flag = false
      
    })
    //console.log(flag)
    if(flag === false){
      users.push(newObj)
    }
    
    //console.log(users)
    
    let newFlag;
    let newName = "Martha"
    users.map(x=>{
      x.name === newName?newFlag = true:newFlag=false
      if(newFlag === true){
        x.skills.push("react")
      }
      //console.log(x.skills.push("react"))
      
    })
    // console.log(newFlag)
    // console.log(users)
    
    
    let editFlag;
    let editName = "Brook"
    users.map(x=>{
      x.name === editName ? editFlag = true: editFlag = false
      if(editFlag === true){
        x.name = "newName"
      }
    })
    
    console.log(users)