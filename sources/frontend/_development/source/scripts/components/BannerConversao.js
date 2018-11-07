import Banner from "./Banner";

class BannerConversao extends Banner {

    constructor($holder) {
        super();
        this.holder = $holder;
    }

    setupTemplate() {

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
                    <div class="promo-icons-wrap">
                        <img src="img/novo/icons/logo_whatsapp_2.png">
                        <img src="img/novo/icons/icon-ligacoes-big.png">
                    </div>
                    <div class="promo-text-consideracao2">
                        <span>WHATSAPP E LIGAÇÕES</span>
                        <span>ILIMITADAS</span>
                    </div>
                </div>

                <div class="banner-second-block">
                    <div class="preco-container">
                        <span class="partir">Por apenas</span>
                        <div class="preco">
                            <span class="preco">R$</span>
                            <span class="preco">49,</span>
                            <span class="subprice">99</span> 
                            <span> <span style="font-family:Arial;">/</span>mês </span>
                        </div>
                        <p data-target="franquia">No plano controle <span class="internet-gb">2,5GB</span></p>
                    </div>

                    <div class="banner-third-block">
                        <a class="btn btn-banner-consideracao2" data-target="link-banner-assine-ja" target="_blank">
                            ASSINE JÁ
                        </a>
                        <div class="banner-bottom-text">
                            OU LIGUE 0800 10 1515
                        </div>
                    </div>

                </div>
            </div>
        </div>
        `;
        // bg
        this.templateHTML = $(htmlCode);
        this.holder.html(this.templateHTML);
    }

}

export default BannerConversao;