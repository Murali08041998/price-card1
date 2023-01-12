import './App.css';
import Card from './components/Card'
function App() {
  let data=[{
    plan:"FREE",
    price:50,
    user:"Single user",
    userEnabler:true,
    storage:"10GB storage",
    storageEnabler:true,
    publicProjects:"Unlimited public projects",
    publicProjectsEnabler:true,
    communityAccess:"community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private projects",
    privateProjectsEnabler:false,
    phoneSupport:"Dedicated phone support",
    phoneSupportEnabler:false,
    subDomain:"Free subdomain",
    subDomainEnabler:false,
    reports:"Monthly Reports",
    reportsEnabler:false,
  },
  {
    plan:"PLUS",
    price:500,
    user:"Double user",
    userEnabler:true,
    storage:"100GB storage",
    storageEnabler:true,
    publicProjects:"Unlimited public projects",
    publicProjectsEnabler:true,
    communityAccess:"community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated phone support",
    phoneSupportEnabler:true,
    subDomain:"Free subdomain",
    subDomainEnabler:true,
    reports:"Monthly Reports",
    reportsEnabler:false,
  },
  {
    plan:"PRO",
    price:1000,
    user:"Multiple user",
    userEnabler:true,
    storage:"150GB storage",
    storageEnabler:true,
    publicProjects:"Unlimited public projects",
    publicProjectsEnabler:true,
    communityAccess:"community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated phone support",
    phoneSupportEnabler:true,
    subDomain:"Free subdomain",
    subDomainEnabler:true,
    reports:"Monthly Reports",
    reportsEnabler:true,
  }]
  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {/* <Card data={data}/> */}
      {/* <Card datatype={{data}}/> */}
      {/* <Card data={data[0]}/>
      <Card data={data[1]}/>
      <Card data={data[2]}/> */}
      {
        data.map((e)=>{
          return <Card data={e}/>
        })
      }
    </div>
  </div>
</section>
  </>
}

export default App;
