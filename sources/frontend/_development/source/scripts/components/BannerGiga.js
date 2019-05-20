import Banner from "./Banner";
import Helpers from "../services/Helpers";

class BannerGiga extends Banner {
    constructor($holder) {
        super();
        this.holder = $holder;
        this.helper = new Helpers();
    }

    setupTemplate() {
        let currentDDD = this.helper.getCookie('controle_ddd');
        let ligacoes = ""
        let dddsSC = [42,47,48,49];
        console.log(dddsSC.indexOf(parseInt(currentDDD)));

        if(dddsSC.indexOf(parseInt(currentDDD)) != -1){
            ligacoes +=
            `<div class="promo-icons-wrap">
                <img src="img/novo/icons/icon-ligacoes-big.png">
            </div>
            <div class="promo-text-consideracao2">
                <span>LIGAÇÕES</span>
                <span>ILIMITADAS</span>
            </div>`
        } else {
            ligacoes +=
            `<div class="promo-icons-wrap">
                <img src="img/novo/icons/logo_whatsapp_2.png">
                <img src="img/novo/icons/icon-ligacoes-big.png">
            </div>
            <div class="promo-text-consideracao2">
                <span>WHATSAPP E LIGAÇÕES</span>
                <span>ILIMITADAS</span>
            </div>`
        }

        var htmlCode = `
        <div class="banner-item banner-conversao4">

            <div class="banner-item__inner">
                
                <div class="banner-first-block">
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                </div>
                <h2>PREÇO FIXO E A MAIOR COBERTURA
                <br/>DE INTERNET MÓVEL DO BRASIL.</h2>
            </div>

            <div class="banner-item__inner left">

                <div class="banner-first-block">
                    ${ligacoes}
                </div>
                <div class="banner-second-block">
                    <div class="preco-container">
                        <span class="partir">A partir de</span>
                        <div class="preco">
                            <span class="preco">R$</span>
                            <span class="preco">49,</span>
                            <span class="subprice">99</span> 
                            <span> <span style="font-family:Arial;">/</span>mês </span>
                        </div>
                        <p data-target="franquia">No Plano Controle <span class="internet-gb"></span></p>
                    </div>

                    <div class="banner-third-block">
                        <a class="btn btn-banner-consideracao2" data-target="link-banner-assine-ja">
                          ASSINE JÁ
                        </a>
                        `;
        if (this.helper.isMobile()) {
            htmlCode += `<div class="banner-bottom-text hide--mobile">
                                        <a style="color:#fff;text-decoration:none;" href="tel:+0800101515" data-analytics-id="click-cta" data-analytics-label="c2c">OU LIGUE 0800 10 1515</a>
                                   </div>`;
        } else {
            htmlCode += `<div class="banner-bottom-text hide--desk">
                                <a href="tel:0800101515" data-analytics-id="click-cta" data-analytics-label="c2c">OU LIGUE 0800 10 1515</a>
                                   </div>`;
        }

        htmlCode += `</div>

                </div>
            </div>
        </div>
        `;
        // bg
        this.templateHTML = $(htmlCode);
        this.holder.html(this.templateHTML);
    }
}

export default BannerGiga;
