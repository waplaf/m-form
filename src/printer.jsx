import React, { useEffect } from 'react'
import html2pdf from 'html2pdf.js';
import { useReactToPrint } from 'react-to-print';
import { UserContext } from './state/contexts/UserContext';
import { Link } from 'react-router-dom';
export default function Printer() {
  const {state}=React.useContext(UserContext);
  const queryString = document.URL
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id')

  const componentRef =React.useRef();


  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

function print(){

  document.querySelector('.ck-content').style.padding='1.5cm'
  handlePrint()
 
}


  useEffect(()=>{

    const htm=`<div>Nos seus primeiros anos de vida Alexandre foi criado por uma enfermeira, Lanice, irmã do futuro general Clito. Mais adiante na sua infância, Alexandre foi tutorado pelo rígido Leônidas de Epiro, um parente de sua mãe, e por Lisímaco, um general de Filipe.[9] Alexandre foi criado como todos os jovens nobres macedônios, aprendendo a lutar, a ler, a tocar lira, a cavalgar e a caçar.[10]


    Aristóteles ensinando Alexandre.
    Por Jean Leon Gerome Ferris
    Quando Alexandre tinha dez anos de idade um comerciante da Tessália trouxe um cavalo a Filipe, que procurou vender por treze talentos. O cavalo se recusava a ser montado e Filipe o dispensou. Alexandre, contudo, percebendo que o cavalo parecia ter medo da própria sombra, afirmou que poderia domar o animal, o que posteriormente conseguiu.[6] Plutarco afirmou que Filipe ficou exacerbado pela coragem e ambição do filho, o beijou firmemente e declarou: "Meu filho, você deve encontrar um reino grande o suficiente para a sua ambição. A Macedônia é pequena demais para você". Ele acabou comprando o cavalo para o garoto.[11] Alexandre deu ao animal o nome Bucéfalo, que significa "cabeça de boi". Bucéfalo tornou-se o cavalo principal de Alexandre, acompanhando-o até suas campanhas na Índia. Quando o animal morreu (devido à idade avançada, de acordo com Plutarco, aos 30 anos), nomeou uma cidade com seu nome, Bucéfala.[12][1 </div>`;
    
    document.querySelector('.ht').innerHTML= `<div style="  margin-bottom: 3px;"> ${state.html}  </div`  //state.html;
  },[]);


  function p(){

    document.querySelector('.ck-content').style.padding='0cm'
    const item = document.querySelector("#element-to-print");


    var opt = {
      margin: 0.5,
      filename: "myfile.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
  
    html2pdf().set(opt).from(item).save();


  }



  return (
    <div>
    <div className='row_ '  style={{display:'flex',justifyContent:'center',alignItems:'initial'}}>
<div  style={{width:window.screen.width>820?'70%':'100%',backgroundColor:"#fff",padding:'2cm'}}>
<div  ref={componentRef} id='element-to-print' className='ht ck-content'>



</div>
</div>

<div>




  <Link title='Voltar' className="material-icons w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" to={'/?allow=true&id='+id} style={{left:window.screen.width>820?'30%':'7%',position:'fixed',bottom:'10%',width:50,textAlign:'center'}}>
west
  </Link>

  <button onClick={()=>p()} title='Baixar' className="material-icons w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800" to={'/'} style={{right:window.screen.width>820?'30%':'7%',position:'fixed',bottom:'17%',width:50,textAlign:'center'}}>
  arrow_downward
  </button>


  <button onClick={()=>print()} title='Baixar' className="material-icons w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800" to={'/'} style={{right:window.screen.width>820?'30%':'7%',position:'fixed',bottom:'10%',width:50,textAlign:'center'}}>
  print
  </button>
</div>
    </div>
</div>

  )
}
