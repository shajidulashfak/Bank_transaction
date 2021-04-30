      //submit button Event Handler ;

      var loginBtn = document.getElementById("login");
      loginBtn.addEventListener("click", function(){
          var loginArea = document.getElementById("login-area");
          loginArea.style.display = "none";
          var transactionArea = document.getElementById("transaction-area");
          transactionArea.style.display = "block";
      });
      
      // Deposit Button Event Handler
      const depositBtn = document.getElementById("deposit");
      depositBtn.addEventListener ("click", function() {
        // const depositAmount = document.getElementById("depositAmount").value;
        // const depositNumber = parseFloat(depositAmount);

        const depositNumber = getInputNumber("depositAmount");
        console.log(depositNumber);

        // General Way Total Deposit & Total Balance Count. 
        // const currentDeposit = document.getElementById("currentDeposit").innerText;
        // const currentDepositNumber = parseFloat(currentDeposit);
        // const totalDeposit = depositNumber + currentDepositNumber;

        // document.getElementById("currentDeposit").innerText = totalDeposit;

        // const currentBalance = document.getElementById("currentBalance").innerText;
        // const currentBalanceNumber = parseFloat(currentBalance);
        // const totalBalance = depositNumber + currentBalanceNumber;
        // document.getElementById("currentBalance").innerText = totalBalance;

        // Function Call.
        updateSpanText("currentDeposit", depositNumber);
        updateSpanText("currentBalance", depositNumber);

        document.getElementById("depositAmount").value = "";
      });

       // Withdraw Button Event Handler.
       const WithdrawBtn = document.getElementById("withdraw");
       WithdrawBtn.addEventListener("click", function () {

        //  const withdrawAmount = document.getElementById("withdrawAmount");
        //  const withdrawNumber = parseFloat(withdrawAmount);

        const withdrawNumber = getInputNumber("withdrawAmount");

        updateSpanText("currentWithdraw", withdrawNumber);
        updateSpanText("currentBalance", -1 * withdrawNumber);

        // const withdrawNumber = getInputNumber("withdrawAmount");
        // console.log(withdrawNumber);

         document.getElementById("withdrawAmount").value = "";
       });

       function getInputNumber(id) {
        const Amount = document.getElementById(id).value;
        const amountNumber = parseFloat(Amount);
        return amountNumber;
       }

      // Short Cut Way to Count current Amount & Total Balance with Function.
      function updateSpanText (id, depositNumber) {
        const currentAmount = document.getElementById(id).innerText;
        const currentAmountNumber = parseFloat(currentAmount);
        const totalBalance = depositNumber + currentAmountNumber;
        document.getElementById(id).innerText = totalBalance;
      }