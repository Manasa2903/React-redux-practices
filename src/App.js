import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import IceCreamContainer from "./Components/IceCreamContainer";
import CustomInputCake from "./Components/CustomInputCake";
import UsersContainer from "./Components/UsersContainer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <CustomInputCake /> */}
        <UsersContainer />
      </Provider>
    </div>
  );
}

export default App;
