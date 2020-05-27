$(document).ready(function(){
    $.ajax({
        url:"php",
        type:"post",
        data:{},
        datatype:"JOSN",
        success:function (item) {
            let obj = JOSN.parse(item);
            var hoteldiv=document.getElementById("u68_state0_content");
            for(let i=0;i<obj.length;i++){
                hoteldiv.innerHTML+="  <div class=\"hoteldiv\">\n" +
                    "              <div class=\"hoteldiv_1\">\n" +
                    "                <div class=\"hoteldiv_1_1\"></div>\n" +
                    "              </div>\n" +
                    "              <div class=\"hoteldiv_2\">\n" +
                    "                <div class=\"hoteldiv_2_1\"> "+ obj[i].name+"   ></div>\n" +
                    "                <div class=\"hoteldiv_2_2\"> "+ obj[i].know+"</div>\n" +
                    "                <div class=\"hoteldiv_2_3\"> "+ obj[i].cost+"</div>\n" +
                    "              </div>\n" +
                    "              <div class=\"hoteldiv_3\">\n" +
                    "                <div class=\"hoteldiv_3_1\">\n" +
                    "                  <div class=\"hoteldiv_3_1_1\">\n" +
                    "                    在线预定\n" +
                    "                  </div>\n" +
                    "                  <div class=\"hoteldiv_3_1_2\">\n" +
                    "                    剩余"+ obj[i].left+"间\n" +
                    "                </div>\n" +
                    "                </div>\n" +
                    "              </div>\n" +
                    "            </div>"
            }

        },
        error:function () {
            console.log("error")
        }
    })

});