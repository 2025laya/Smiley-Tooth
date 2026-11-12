import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// import "@fontsource/agbalumo";
export default function header(){
return (
    <div className="container py-5 text-center" style={{fontFamily:"Agbalumo" ,fontSize:"21px"}}>
<div class="d-flex justify-content-between  px-4 align-items-center font1" style={{backgroundColor:'rgba(209, 213, 219, 0.25)'}}>
<div style={{display:"flex" ,alignItems:"center"}}>
<span className="fa-stack" style={{ fontSize: '20px' }}>
  <i className="fa-solid fa-shield fa-stack-2x" style={{ color: '#bae6fd' }}></i>
  <i className="fa-solid fa-tooth fa-stack-1x" style={{ color: '#ffffff' }}></i>
</span>
<div style={{paddingTop:"10px",marginLeft:"15px"}}>
<h4 style={{fontSize:"30px"}}>Bright<span style={{color:'#3b82f6'}}>Smile</span></h4>
<p style={{fontSize:"10px"}}>DENTAL CARE</p>
</div>
</div>









  <div  data-bs-toggle="nav-overflow" >
    <ul class="nav nav-underline gap-8" style={{
'--bs-nav-link-color': '#334155',                  // لون الروابط العادية (كحلي هادئ)
        '--bs-nav-link-hover-color': '#3b82f6',            // لون الرابط عند تمرير الماوس (أزرق طبي)
        '--bs-nav-underline-link-active-color': '#3b82f6' }}>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">FAQs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
</div>

<h1 className='font1' style={{fontSize:"50px"}}>Healthy Smile,<br></br> <span style={{color:'#3b82f6'}}>Confident You.</span></h1>

    </div>
  )
}