//import of Cookiehandler und datenbank verbindung
import Web3 from 'web3';
import open from 'open';
// import detectEthereumProvider from '@metamask/detect-provider';
let web3;
export class controller{
    async mainpage(req,res){
        res.render('mainpage.hbs');
    }

    async infopage(req,res){
        res.render('info.hbs');
    }

    async connectpage(req,res){
        res.render('connectpage.hbs');
    }

    // TODO: check if web3 handle is connected
    async isConnected(req){
        if(await this.isMetamaskInstalled()){
            await this.injectWeb3();
        }else{
            await this.installMetamaskPrompt();
        }
    }

    async connectAction(req, res){
        // console.log();
        // TODO: Background connection of the page
        // console.log(web3);
        // await this.isMetamaskInstalled();
        // console.log(await this.isMetamaskInstalled());
        // console.log(Web3);

        // TODO: render of the page
        res.render('connected');
    }


    async isMetamaskInstalled(){
        if(typeof web3 === 'undefined'){
            return false;
        }
        return true;
    }

    async injectWeb3(){
        web3 = new Web3(Web3.givenProvider);
    }

    async installMetamaskPrompt(){
        open('https://metamask.io/download.html');
    }

    // TODO: submit connect of the current page
    // Connect button pressed
    async connectCurrent(req,res){
      // web3 item should still have no value
        console.log(web3);
        this.isConnected()
        res.render('connectOverview');
    }

    // TODO: submit of normal transactions

    async guidepage(req,res){
        res.render('guide.hbs');
    }

}
export const controllers = new controller();
