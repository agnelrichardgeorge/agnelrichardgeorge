// import logo from './logo.svg';
import './App.css';
import PostMessages from './components/PostMessages';
// applying redux store using provider
import {Provider} from "react-redux";
import {store} from "./actions/store";
import {AppBar, Container, Typography} from "@material-ui/core";
import ButterToast,{POS_CENTER,POS_BOTTOM} from "butter-toast"


function App() {
  return (
   <Provider store ={store}>
     <Container maxWidth="lg">
       <AppBar position="static" color="inherit">
         <Typography
            variant="h2"
            align="center"
         >
           Post Box
         </Typography>
       </AppBar>
       <PostMessages />
       <ButterToast position={{vertical:POS_BOTTOM,horizontal:POS_CENTER}} />
     </Container>
    
   </Provider>
      
  );
}

export default App;
