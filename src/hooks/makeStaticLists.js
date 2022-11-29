import { useState, useEffect } from 'react';
import axios from 'axios';

//export default は functionを作成した時にfunctionの前に記述する約束事
export default function makeStaticLists(URL, listName){


    //useStateは返り値が配列(const[値, function])値はuseStateが持っている画面上で入力された文字や選択された値。
    //functionはその値をsetするfunction
    //useState()の引数にはconst[val,setVal]でsetしたい初期値を入れる今回は何も入れないのでuseState(null)
    //nullじゃない時の例：const [debounceValue, setDebounceValue] = useState(value)
    //useState(value)のvalueをdebounceValueに入れて、setDebounceValueファンクションで値を更新する
    const[val,setVal] = useState(null)


    //useEffect(第1引数はアロー関数、第2引数は配列[])
    //useEffect()は第2引数で指定した値が変わるたびに繰り返し処理を実行する
    //第2引数に[]からの配列を指定すると画面を表示した時の1回のみ処理を実行する
    useEffect(()=>{
        axios.get(URL).then(({data})=>{

            setVal(Reflect.get(data,listName))
        })
    },[])

    return [val,setVal]

}