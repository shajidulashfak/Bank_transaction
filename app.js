      //submit button Handler ;

      var loginBtn = document.getElementById("login");
      loginBtn.addEventListener("click", function(){
          var loginArea = document.getElementById("login-area");
          loginArea.style.display = "none";
          var transactionArea = document.getElementById("transaction-area");
          transactionArea.style.display = "block";
      });

    //   function empty () {
    //       var emptyValue;
    //       emptyValue = document.getElementById('emptyValue').value;

    //       if (emptyValue =="") {
    //           alert ("There is no value. Please, enter your value.");
    //           return false;
    //       }
    //   }
      
      // Deposit Button Handler ;
      var depositBtn = document.getElementById("deposit");
      depositBtn.addEventListener("click", function(){
          var depositAmount = document.getElementById("depositAmount").value;
          var depositNumber = parseFloat(depositAmount);
        if (depositNumber < 0){
              alert("Deposit Number Can't be Negative.");
        }
        else{
          updateSpan("currentDeposit", depositNumber);
          updateSpan("currentBalance", depositNumber);

          document.getElementById("depositAmount").value = "";

        }
          // var currentDeposit = document.getElementById("currentDeposit").innerText;
          // var currentDepositNumber = parseFloat(currentDeposit);
          // var totalDeposit = depositNumber + currentDepositNumber;
          
          // document.getElementById("currentDeposit").innerText = totalDeposit;

          // var currentBalance = document.getElementById("currentBalance").innerText;
          // var currentBalanceNumber = parseFloat(currentBalance);
          // var totalBalance = depositNumber + currentBalanceNumber;
          // document.getElementById("currentBalance").innerText = totalBalance;
      })

      function updateSpan(id, depositNumber){
          var current = document.getElementById(id).innerText;
          var currentNumber = parseFloat(current);
          var totalAmount = depositNumber + currentNumber;
          document.getElementById(id).innerText = totalAmount;
      }

      // Withdraw Button Handler ;
      var withdrawBtn = document.getElementById("withdraw");
      withdrawBtn.addEventListener("click", function(){
          var withdrawAmount = document.getElementById("withdrawAmount").value;
          var withdrawNumber = parseFloat(withdrawAmount);
      })

      // var withdrawBtn = document.getElementById("withdraw");
      // withdrawBtn.addEventListener("click", function(){
      //     var withdrawAmount = document.getElementById("withdrawAmount").value;
      //     var withdrawNumber = parseFloat(withdrawAmount);
          
      //     var currentWithdraw = document.getElementById("currentWithdraw").innerText;
      //     var currentWithdrawNumber = parseFloat(currentWithdraw);
      //     var totalWithdraw = currentNumber + currentWithdrawNumber;

          document.getElementById("withdrawAmount").value = "";
      // })
   