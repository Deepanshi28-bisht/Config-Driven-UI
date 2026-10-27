import Card from "./components/Card/Card";
import Form from "./components/Form/Form"
import registrationForm from "./config/forms/registrationForm.json"
import cardData from "./config/cards/cardData.json";

function App() {
  function handleRegistration(values) {
    console.log("Submitted form values:", values);
  }
  return (
    <>
       {/* <main className="flex h-screen items-center justify-center w-full">
      <Form
        config={registrationForm}
        onSubmit={handleRegistration}
      />
    </main> */}
    <Card cardData={cardData} />
    </>
 
  )
}

export default App
