import Logo from '../../assets/images/logo.svg';
import { StyledHeader } from './style';

export const Header = () => {
    const date = getFormattedDate();
    const currentTime = getCurrentTime();

    function getFormattedDate() {
        const months = [
            "janeiro", "fevereiro", "março", "abril", "maio", "junho",
            "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
        ];
    
        const date = new Date();
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
    
        return `${day} de ${month} ${year}`;
    }

    function getCurrentTime() {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        
        return `${hours}:${minutes.toString().padStart(2, '0')}`;
    }
    
    console.log(getCurrentTime());
    
    
    return (
        <StyledHeader>
            <img src={Logo} class="header-logo" alt="Logo Stone" height="81" width="163"/>
            <div class="header-contents">
                <div class="header-contents__date">
                    <p class="header-contents__date-current">{ date }</p>
                    <p class="header-contents__date-current">{ currentTime } UTC</p>
                </div>
                <p class="header-contents__text">Dados de câmbio disponibilizados pela Morningstar.</p>
            </div>
        </StyledHeader>
    )
}