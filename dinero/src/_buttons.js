(function(){
    var btnBank = document.createElement('label');
    btnBank.style.position = "fixed";
    btnBank.style.bottom = "15px";
    btnBank.style.right = "110px";
    btnBank.style.display = "block";
    btnBank.style.width = "70px";
    btnBank.style.height = "70px";
    btnBank.style.padding = "10px 0 0";
    btnBank.style.borderRadius = "50px";
    btnBank.style.backgroundColor = "#21c18c";
    btnBank.style.boxSizing = "border-box";
    btnBank.style.color = "#fff";
    btnBank.style.boxShadow = "0 0 8px rgba(0,0,0,.2)";
    btnBank.style.cursor = "pointer";

    var btnCsv = btnBank.cloneNode();
    btnCsv.style.right = "200px";

    var iconBank = document.createElement('span');
    iconBank.style.display = "block";
    iconBank.style.textAlign = "center";
    iconBank.style.fontSize = "40px";
    iconBank.style.lineHeight = "30px";
    iconBank.innerHTML = "&plus;";

    var iconCsv = iconBank.cloneNode(true);

    var labelBank = document.createElement('span');
    labelBank.style.display = "block";
    labelBank.style.textAlign = "center";
    labelBank.style.fontSize = "12px";
    labelBank.style.lineHeight = "normal";
    labelBank.innerText = "Bank";

    var labelCsv = labelBank.cloneNode();
    labelCsv.innerText = "CSV";
    
    var inputBank = document.createElement('input');
    inputBank.type = "file";
    inputBank.accept = "csv";
    inputBank.style.opacity = 0;

    var inputCsv = inputBank.cloneNode();

    inputBank.addEventListener('change', function(e){
        e.target.files[0].text().then(
            function(res){

                var data = Papa.parse(res, {
                    header: true,
                    skipEmptyLines: true
                });

                ledger.import('bank', data);

            },
            function(err){
                console.log(err);
            }
        );
    });

    inputCsv.addEventListener('change', function(e){
        e.target.files[0].text().then(
            function(res){

                var data = Papa.parse(res, {
                    header: true,
                    skipEmptyLines: true
                });

                ledger.import('csv', data);

            },
            function(err){
                console.log(err);
            }
        );
    });

    btnBank.append(iconBank);
    btnBank.append(labelBank);
    btnBank.append(inputBank);

    btnCsv.append(iconCsv);
    btnCsv.append(labelCsv);
    btnCsv.append(inputCsv);

    document.querySelector('body').append(btnBank);
    document.querySelector('body').append(btnCsv);
})();