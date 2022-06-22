$(document).ready(function () {
  var partnerImg = [
    ["./img/managers/m_01.jpg"],
    ["./img/managers/m_02.jpg"],
    ["./img/managers/m_03.jpg"],
    ["./img/managers/m_04.jpg"],
    ["./img/managers/m_05.jpg"],
    ["./img/managers/m_06.jpg"],
    ["./img/managers/m_07.jpg"],
    ["./img/managers/m_08.jpg"],
    ["./img/managers/m_09.jpg"],
  ];

  var $cont = `
      <div class="cont_bx">
        <img src="./img/managers/m_01.jpg" alt="" />
      </div>
`;

      for(i=0; i<partnerImg.length; i++){
        $(".content").append($cont);
    }

    $(".content .cont_bx").each(function(idx){
        $(this).find("img").attr(`src`,`${partnerImg[idx][0]}`);
        console.log(idx);
    
    });

});
