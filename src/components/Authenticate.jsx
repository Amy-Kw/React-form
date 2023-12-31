import { useState } from 'react'


export default function Authenticate({ token, setoken }) {
    const [successMessage, setSuccessMessage] = useState("");
    const [error, setError] = useState("");
  
    async function handleClick(){
      try {
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = await response.json();
        setSuccessMessage(result.message);

      } catch (error) {
        setError(error.message);
      }
    }
  
    return (
      <div>
        <h2>Authenticate</h2>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token!</button>
      </div>
    );
  }




// export default function Authenticate({token}) {
//     async function handleClick() {
//         try {

//             const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",{
//                    method: "GET",
//                    headers: {"Content-Type": "application/json",
//                    Authorization: `Bearer ${token}`
//              }}
//             )

//             const result = await response.json()


               

//         } catch (error) {
//           setError(error.message);
//         }
//       }


// return (
//     <div>
//       <h2>Authenticate</h2>
//       {successMessage && <p>{successMessage}</p>}
//       {error && <p>{error}</p>}
//       <button onClick={handleClick}>Authenticate Token!</button>
//     </div>
//   );
// }
