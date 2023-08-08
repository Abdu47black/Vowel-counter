let text=document.getElementById('txtarea');
let submit=document.getElementById('submit');
 let count=0;
 console.log(submit);

submit.addEventListener('click',()=>{
    let txt=text.value;
    if(txt==='')
    {
        alert('Pleae Enter a text to be anzalyezed!')
    }
    count++;
   // let regex=/[aeiou]+/;
    //let matches = 'some TExt'.match(regex);  
   // let  index  =txt.match(regex);
    //console.log(index)
   // let next ='some Text'.replace(regex,'hi mom!');
  // alert(index);
  const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// Any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

console.log(paragraph.search(regex));
// Expected output: 43

console.log(paragraph[paragraph.search(regex)]);
// Expected output: "."

})