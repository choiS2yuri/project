import React from 'react'

function Sdetail() {
  useEffect(() =>{
    axios.get(`https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=PROJECT&serviceKey=hQ42F%2BSKq2L%2FUrlhNoGxv63elQn7W8CmL22xl6yXuGk%2BMz0zdU%2Frk2CIdCeX5%2BYPmg39K5QBYCeSgUyqtD7Qdg%3D%3D&_type=json`).then(function(res){
      // console.log(res.data.response.body.items.item);
      setData(res.data.response.body.items.item);
    })
  },[])
  return (
    <>
        <div className='w-full h-full'>
            <div className="w-7xl mx-0 border">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </>
  )
}

export default Sdetail