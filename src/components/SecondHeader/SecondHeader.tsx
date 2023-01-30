import { Header, HeaderTitle } from "./SecondHeaderStyled";
import back from '../../assets/second_page/header_back.jpg';
import NavBar from "../NavBar/NavBar";

const SecondHeader: React.FC  = ()=>{

    return(
        <Header style={{backgroundImage :`url(${back})`}}>
            <NavBar/>
            <HeaderTitle>Our coffee</HeaderTitle>
        </Header>
    )
}

export default SecondHeader;