import { useState } from "react";
import { Alert } from "./components/Alert";
import { Buttons } from "./components/Buttons";
import ListGroup from "./components/ListGroup";
import Menu from "./components/Menu";


function App() {
  const items = [
    "Sanfransisco",
    "LA",
    "San Diego",
    "Dallas",
    "Hueston",
    "New York",
  ];
  let Menuitems = ["Home(current)", "Features", "Pricing"];
  let LinkItems = ["/Home", "/Features", "/Pricing"];


  const handeling = (item: string) => {
    console.log(item);
  };

  const [alertVisiable, SetAlertVisibility]  = useState(false);

  return (
    <div>
       <Menu items={Menuitems} heading="Menu" link={LinkItems}></Menu>
      <ListGroup items={items} heading="Cityes" onSelectItem={handeling} />
      <br></br>
      { alertVisiable && <Alert onClose={()=>SetAlertVisibility(false)}>My Alert</Alert>}
      <Buttons  children="My Button" onClilck={()=>SetAlertVisibility(true)}></Buttons>
    </div>
  );
}

export default App;
