var array = [];
        var array1 = [];

        var result = document.getElementById('field1');
        var result1 = document.getElementById('field2');

        function naam() {
          var name = document.querySelector("#name").value;
          array.push(name);

            result.innerHTML = "<h1>"+array[0]+"</h1><h1>"+array[1]+"</h1><h1>"+array[2]+"</h1><h1>"
            +array[3]+"</h1><h1>"+array[4]+"</h1><h1>"+array[5]+"</h1><h1>"+array[6]+"</h1><h1>"+array[7]+"</h1>";

        }

       function switch1(){
         array1.push(array[0]);
         array.shift();

           result.innerHTML = "<h1>"+array[0]+"</h1><h1>"+array[1]+"</h1><h1>"+array[2]+"</h1><h1>"
           +array[3]+"</h1><h1>"+array[4]+"</h1><h1>"+array[5]+"</h1><h1>"+array[6]+"</h1><h1>"+array[7]+"</h1>";
           result1.innerHTML = "<h1>"+array1[0]+"</h1><h1>"+array1[1]+"</h1><h1>"+array1[2]+"</h1><h1>"
           +array1[3]+"</h1><h1>"+array1[4]+"</h1><h1>"+array1[5]+"</h1><h1>"+array1[6]+"</h1><h1>"+array1[7]+"</h1>";
       }

       function switch2(){
         array.push(array1[0]);
         array1.shift(0);

           result.innerHTML = "<h1>"+array[0]+"</h1><h1>"+array[1]+"</h1><h1>"+array[2]+"</h1><h1>"
           +array[3]+"</h1><h1>"+array[4]+"</h1><h1>"+array[5]+"</h1><h1>"+array[6]+"</h1><h1>"+array[7]+"</h1>";
           result1.innerHTML = "<h1>"+array1[0]+"</h1><h1>"+array1[1]+"</h1><h1>"+array1[2]+"</h1><h1>"
           +array1[3]+"</h1><h1>"+array1[4]+"</h1><h1>"+array1[5]+"</h1><h1>"+array1[6]+"</h1><h1>"+array1[7]+"</h1>";
       }
