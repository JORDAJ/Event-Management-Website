let ele=document.getElementById("img");
        let index=1;
        function next(){
        index++;
        ele.setAttribute("src","i"+index+".jpg");

    }
    function prev(){
        index--; 
        ele.setAttribute("src","i"+index+".jpg");

    }