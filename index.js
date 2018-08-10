const token =  'dc4067c79e007a5a8ba50e3533dafa81ceed1232'
fetch('https://api.github.com/repos/jquery/jquery/commits', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res=> res.json()).then(json=> console.log(json));
