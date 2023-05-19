import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import './Home.moudle.css'
import Search from './Search';
import Data from './Data';
import { alldata, getdata } from '../Api';
import Pagenation from './Pagenation';
function Home(props) {
    const [data, setdata] = useState([])
    const [type ,settype]=useState()
    const [date ,setdate]=useState(undefined)
    const [status ,setstatus]=useState()
    const [Loading, setLoading] = useState(true)
    const [page,setpage] = useState('1')
    const [totalpage,settotalpage] = useState(0)
    const spacexPage = (data)=>{
        setpage(data)
    }
    const handledate =(date)=>{
        setdate(date)
    }
    const handlestatus =(status)=>{
        setstatus(status)
    }
    const handletype =(type)=>{
        settype(type)
    }
    useEffect(() => {
     let id=   setTimeout(() => {    
            setLoading(true)
            getdata(type,status).then((data) => {
          
          setTimeout(() => {
              setLoading(false)
            },500);
            setdata(data)
        })
        alldata().then((data)=>{
            if(date>2000){
                data=data.filter((item)=>{
                    let dateString = JSON.stringify(item.original_launch);
                    let year = dateString.charAt(1)+dateString.charAt(2)+dateString.charAt(3)+dateString.charAt(4)
                    console.log(year)
                    return year==date
                })
                setdata(data)
            }
            settotalpage(Math.floor(data.length/6))
        })
    }, 500);
    return (()=>clearTimeout(id))
    }, [date,status,type,page])
    console.log(totalpage);
    return (
        <div id='Home'>
           <Banner/>
           <Search handledate={handledate} handlestatus={handlestatus} handletype={handletype}/>
           {Loading?<img id='Loading' src='https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif'/>:<Data data={data}/>}
           {!Loading&&data.length==0&&<img className='noData' src='https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=2000'/>}
           {!Loading&&data.length!=0&&<Pagenation totalpage={totalpage} page={spacexPage} currpage={page}/>}
        </div>
    );
}
export default Home;