import './ChatIntro.css';
import Intro from './images/Intro.jpg'


export default ()=>{
    return(
        <div className='chatIntro'>
            <img src={Intro} alt=''/>
            <h1>Mantenha seu celular conectado</h1>
            <h2>O Whatsapp conecta ao seu telefone para sincronizar suas mensagens. Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi. </h2>
        </div>
    )
}