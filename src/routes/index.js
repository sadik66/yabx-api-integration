import { BrowserRouter,Switch,Route } from "react-router-dom";

import Login from "../containers/login";
import SubmitOtp from "../containers/otp";
import PersonalDetails from "../components/personalDetails";
import PersonalInfoEdit from "../components/personalDetails/personalInfoEdit";
import PersonalInfo from "../components/personalDetails/personalInfo";

const RouterComponent=()=>{
    return (
             <BrowserRouter>
                <Switch>
                <Route exact path="/login" component={(props) => <Login {...props} />} />
                <Route exact path="/otp" component={(props) => <SubmitOtp {...props} />}/>
                <Route exact path="/personaldetailsForm" component={(props) => <PersonalInfoEdit {...props} />}/>
                <Route exact path="/personaldetails" component={(props) => <PersonalDetails {...props} />}/>
                <Route exact path="/personalInfo" component={(props) => <PersonalInfo {...props} />}/>
                </Switch>
             </BrowserRouter>   
    )
}
export default RouterComponent;