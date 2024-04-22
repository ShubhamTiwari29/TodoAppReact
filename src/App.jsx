
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'

function App() {


  return (
    <>
    
   <div class="container text-center">
    <AppName />
  <AddTodo/>

   <div class="row">
    <div class="col-6">
      Buy burger
    </div>
    <div class="col-4">
      12/10/2024
    </div>
    <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
  </div>


   <div class="row">
    <div class="col-6">
      Buy burger
    </div>
    <div class="col-4">
      12/10/2024
    </div>
    <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
  </div>

  
  
</div>
    </>
  )
}

export default App
