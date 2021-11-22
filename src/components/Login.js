import './Login.css';
import Api from '../Api'
import FacebookIcon from '@material-ui/icons/Facebook';


export default ({onReceive})=>{
 
    const hadleFacebookLogin = async ()=>{
        let result = await Api.fbPopup(); 
        if(result){
            onReceive(result.user)
        }else{
            alert('Erro!'); 
        }   
    }


    return (
        <div className='login'>
            <FacebookIcon style={{fontSize: '3em'}} className='fbIcon' onClick={hadleFacebookLogin}/>
        </div>
    )
}