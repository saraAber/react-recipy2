import { computed, makeAutoObservable } from 'mobx'

import {Recipise} from '../Types'

class MobxRec{
    observe(arg0: () => void) {
      throw new Error("Method not implemented.")
    }
    currRecipie:Recipise|null=null
    currImage:{[key: string]: string }={};  
    // הצגת התמונה הנוכחית
    
    constructor()       
    { makeAutoObservable(this)}
   
    setCurrImage(imageSrcs: { [key: string]: string }) {
      this.currImage = imageSrcs;
    }
    setCurrRecipie=(rec:Recipise)=>
    {
     this.currRecipie=rec
    }
    getCurrRecipie=()=>
    {
        return this.currRecipie;
    }
}
export default new MobxRec();

