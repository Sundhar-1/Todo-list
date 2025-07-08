 
        function saveStudent(){
            const name=document.getElementById("name").value;
            const age=document.getElementById("age").value;
            const gender=document.querySelector('input[name="gender"]:checked').value;
            const course=document.getElementById("course").value;
            const email=document.getElementById("email").value;
            if(!name||!age||!email){
                alert("please fill out the all deatails.");
                return;
            }
            
            const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
            var newRow=table.insertRow()   
            newRow.innerHTML=`
            <td>${name}</td>
            <td>${age}</td>
            <td>${gender}</td>
            <td>${course}</td>
            <td>${email}</td>
            <td><button onClick="deleteRow(this)" class="delete">Delete</button></td>
            `;
            document.getElementById("name").value='';
            document.getElementById("age").value='';
            document.getElementById("email").value='';
        }
        function deleteRow(btn)
        {
            const row=btn.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }