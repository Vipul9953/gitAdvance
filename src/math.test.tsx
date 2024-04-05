import { sum, sub, multiply, divide, retObj, retArray } from "./math";

describe('tetsing of all math functions', ()=>{ 
    it('testing of sum function', ()=>{
        expect(sum(2,3)).toBe(5)
    })

    it('testing of subtract function', ()=>{
        expect(sub(5,2)).toBe(3)
    })


    it('testing of multiply function', ()=>{
        expect(multiply(2,3)).toBe(6)
    })


    it('testing of divide function', ()=>{
        expect(divide(2,2)).toBe(1)
    })
})




describe('testing of Object and Array', ()=>{
    it('object test', () => {
        expect(retObj()).toEqual({ name: "vipul" });
    })

    it('array test', ()=>{
        expect(retArray()).toEqual([10,20,30,40])
   })
})


