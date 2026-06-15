// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import rigoImageUrl from "../assets/img/rigo-baby.jpg"  // Import an image asset
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state
import { useEffect } from "react";

// Define and export the Single component which displays individual item details.
export const Single = props => {
  // Access the global state using the custom hook.

  // Retrieve the 'theId' URL parameter using useParams hook.
  const { id } = useParams()

  const navigate = useNavigate()
  const [searchParams,setSearchParams] = useSearchParams()
  

  const location = useLocation()

  console.log({location})
function handleNavidate(){
  return navigate(-1)
}

function handleSetSearchParams(){



const page =searchParams.get("page")
const pageFormatted = Number(page)
  setSearchParams({page,numero:pageFormatted+1})
}
  

  useEffect(()=>{
    if(!Number.isFinite(Number(id))){
    console.log("ENTRAMOSSS")

    // LLAMAREIS A UNA API---> LA INFORMACION DEL USUARIO


   return  navigate('/')
  }

  }
  ,[])

  return (
    <div className="container text-center">
      {/* Display the title of the todo element dynamically retrieved from the store using theId. */}
      <h1 className="display-4">Todo:</h1>
      <hr className="my-4" />  {/* A horizontal rule for visual separation. */}

      <button onClick ={handleNavidate}>NAVEGAMOS ATRAS</button>

      <button onClick ={handleSetSearchParams}>Boton de paginacion</button>

      {/* A Link component acts as an anchor tag but is used for client-side routing to prevent page reloads. */}
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

