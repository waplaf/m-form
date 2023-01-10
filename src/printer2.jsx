import React from 'react'
import { jsPDF } from "jspdf";
import { UserContext } from './state/contexts/UserContext';
export default function Printer() {
  const {state}=React.useContext(UserContext);



  function domload(){
    
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "in",
      format: [4, 2],
      ht
    });

    
doc.text(`<figure class="image image_resized" style="width:7.73%;"><img src="http://localhost:3000/_next/static/media/capa.631d540f.jpg"></figure>


<p style="text-align:center;">Escola Secundária geral de Mocuba</p><p style="text-align:center;">&nbsp;</p><p style="text-align:right;"><strong>=Nampula=</strong></p><p style="text-align:right;">&nbsp;</p><p style="text-align:right;">&nbsp;</p><p style="text-align:right;">&nbsp;</p><p>Eu $nome &nbsp;Nascido aos $nascimento, natural de $natural província da $provincia, portador de B.I N<span style="color:hsl(0,0%,0%);"><sub><sup>o</sup></sub></span> $BI .&nbsp;</p><p>&nbsp;</p><p>Pelo que, pede deferimento.</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p style="text-align:center;"><strong>Nampula aos 20/05/2022</strong></p>

<figure class="table" style="width:29.32%;"><table class="ck-table-resized"><colgroup><col style="width:11.11%;"><col style="width:11.11%;"><col style="width:11.11%;"><col style="width:11.11%;"><col style="width:11.11%;"><col style="width:11.11%;"><col style="width:11.11%;"><col style="width:11.11%;"><col style="width:11.12%;"></colgroup><tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>g</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>gg</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>g</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>gg</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>g</td><td>&nbsp;</td><td>&nbsp;</td><td>g</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table></figure>


`, 10, 10);
doc.save('ola.pdf'); // will save the file in the current working directory
  }
  return (
 <button onClick={()=>domload()}>ddd</button>
  )
}
