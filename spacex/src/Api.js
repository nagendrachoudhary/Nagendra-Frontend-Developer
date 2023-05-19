export async function getdata(type='',status='',page=1){
  const skip=(page-1)*10
  const res=  await fetch(`https://api.spacexdata.com/v3/capsules?type=${type}&status=${status}&limit=10&offset=${skip}`)
  const data= await res.json()
  return data  
}
export async function alldata(search,params=''){
    const res=  await fetch(`https://api.spacexdata.com/v3/capsules`)
  const data= await res.json()
  return data 
}
