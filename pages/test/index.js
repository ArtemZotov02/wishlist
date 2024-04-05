import React, {useEffect, useState } from 'react'
import style from './style.module.scss'
import classNames from 'classnames'
import TestComponent from '../../components/products/testComponent/TestComponent'
import Cookies from 'js-cookie'


export default function index() {
    const [open, setOpen] = useState(false)

    let user = {
      name: 'Pete',
      age:30
    }

    // let a = ['acb', 'cba', 'bac']
    // let b = a.map(e => e.split('').sort().join(''))
    // console.log(b)

    const [userData, setUserData] = useState()

    const [data, setData] = useState([])
    useEffect(()=> {
      // localStorage.setItem('user', JSON.stringify(user))
      setUserData(JSON.parse(localStorage.getItem('user')))

      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(e => console.log(e))

      // все ключ и знач в локалсторейдж
      // for (let i = 0; i < localStorage.length; i++) {
      //   let key = localStorage.key(i)
      //   alert(`Ключ: ${localStorage.key(key)} ; Значение: ${localStorage.getItem(key)}`)
      // }

    }, [])




    const [openList, setOpenList] = useState([])



    const toggleList = (id) => {
      // открываем только один элем 
      // setOpenList(openList === id ? null : id);

      //открываем несколько несколько элем
      if (openList.includes(id)) {
        setOpenList(prevOpenList => prevOpenList.filter(item => item !== id));
      } else {
        setOpenList(prevOpenList => [...prevOpenList, id]);
      }
    };





  return (
    <div className={style.container}>
        <div className={style.container__section}>
            <div className={classNames({[style.active]: open}, style.block)} ></div>

            <div className={style.list} >
              {data.map((e) => (
                <div key={e.id} className={classNames({[style.active]: openList.includes(e.id)}, style.list__item)}>
                  <p>Name: {e.name}</p>              
                  <p>Username: {e.username}</p> 
                  <p>Email: {e.email}</p>      
                  <div>
                    <span onClick={()=> toggleList(e.id)}>adress</span>
                    <ul className={classNames({[style.active]: openList.includes(e.id)}, style.ulList)}> 
                      <li>
                        Street: {e.address.street}
                      </li>
                      <li>
                        Suite: {e.address.suite}
                      </li>
                      <li>
                        City: {e.address.city}
                      </li>
                    </ul>
                  </div>        
                </div>
              ))}
            </div>
          
            <TestComponent  user={userData} menu={open} setMenu={setOpen}/>
        </div>
    </div>
  )

}
