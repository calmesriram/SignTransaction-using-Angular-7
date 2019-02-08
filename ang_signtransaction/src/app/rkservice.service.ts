import { Injectable } from '@angular/core';
declare let require:any;
declare let Web3:any;
var abi = require('./contractabi.json');
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/ed9c627571c540d39a95770ce85f7534'));
var contractAddress="0xf07f90febe755bf8c1f372c3e1e9459e18f8cdfa";
let myContract = new web3.eth.Contract(abi,contractAddress,{
  // from: this.owner,
  gasLimit: 3000000,
});
var privatekey = "0x771C80924340485C282D1B4842244CF11CD9B06D1460D39F158DDB81D48DD27D"
var hash;
@Injectable({
  providedIn: 'root'
})
export class RkserviceService {

  constructor() { 
   
  }
  deploy(){


  const tx = {
    to: contractAddress, 
    gas: 850000,    
    data: myContract.methods.reg(6,"sriram","prasath").encodeABI()
}

web3.eth.accounts.signTransaction(tx, privatekey,function(err,res){
    console.log(res);
    console.log(err)
    web3.eth.sendSignedTransaction( res.rawTransaction).on('transactionHash', txHash => {

        console.log("txHash", txHash);
         hash=txHash
        
        }).on('receipt',
        receipt => { console.log("receipt", receipt) 
    if(receipt["status"]== "0x1"){             
        }
    else{                      
        console.log("unsucess");                  
    }
    }
    ).catch(err =>{
        console.log("error",err);
        console.log("txhash",tx);
        web3.eth.getTransactionReceipt(hash,(err,res1)=>{
            console.log("RECEIPT",res1);
        })
    
    });
});
  }
}

