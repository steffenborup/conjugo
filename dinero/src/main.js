//import Papa from 'papaparse'
//import numeral from 'numeral'

const Papa = require('papaparse')
const numeral = require('numeral')
require('numeral/locales/da-dk');

(function(){

    class AccountMap {

        data = [];

        add(text, amount, account)
        {

            if (!text || !account) {
                return;
            }

            amount = typeof(amount) === 'undefined' ? null : amount;

            this.data.push({
                text: text.toString().toLowerCase(),
                amount: amount,
                account: account
            });

        }

        get(text, amount)
        {

            if (!text) {
                return;
            }

            text = text.toString().toLowerCase();

            amount = typeof(amount) === 'undefined' ? null : amount;

            for (var i = 0; i < this.data.length; i++) {

                var item = this.data[i];

                if (item.text === text) {

                    if (item.amount != null && item.amount !== amount) {
                        continue;
                    }

                    return item.account;
                    
                }    

            }

            return null;

        }

    }

    var accountMap = new AccountMap();

    accountMap.add('Telia', -170, 62031);
    accountMap.add('Telenor', -195, 62046);
    accountMap.add('Adobe', null, 7610);
    accountMap.add('CLICKUP', null, 7620);
    accountMap.add('SKAT', null, 60180);
    accountMap.add('BS BETALINGSORDNINGER SKATTEKON', null, 62900);
    accountMap.add('Lunar Business - Solo', null, 2450);
    accountMap.add('Hævet privat', null, 60140);

    window.ledger = {
        import: (type, contents) => {
            //console.log('ledger.import()', type);
            
            contents.sort(function compare(a, b){
                var _a = a.Date.replace(/\./g, '/').replace(/-/g, '/').split('/');
                var aDate = new Date(parseInt(_a[2]), parseInt(_a[1]-1), parseInt(_a[0]));

                var _b = b.Date.replace(/\./g, '/').replace(/-/g, '/').split('/');
                var bDate = new Date(parseInt(_b[2]), parseInt(_b[1]-1), parseInt(_b[0]));
                
                if (aDate < bDate) {
                    return -1;
                }
                if (aDate > bDate) {
                    return 1;
                }
                return 0;
            });

            //console.log(contents);

            numeral.locale('da-dk');

            // set fields on a line and then trigger change on description field

            var descriptionSelector = '.ledger-table-item-line--cell__description--field';

            var placeholderRow = document.querySelector('ledger-table ledger-table-item .ledger-table-item-row.placeholder');
            var placeholderItem = placeholderRow ? placeholderRow.parentElement : null;

            if (!placeholderItem)
            {
                return;
            }
            
            var item = placeholderItem.previousElementSibling;

            if (item.querySelector(descriptionSelector).value.trim() !== "")
            {
                placeholderItem.querySelector(descriptionSelector).dispatchEvent(new Event('focus'));
                item = document.querySelector('ledger-table ledger-table-item .ledger-table-item-row.placeholder').parentElement.previousElementSibling;
            }

            if (!item)
            {
                return;
            }

            var insertLine = function(i)
            {
                var line = contents[i];

                var amount = numeral(line.Amount);
                var account = null;
                var offsetAccount = null;

                if (type === 'csv')
                {
                    account = line.Account;
                    offsetAccount = line.OffsetAccount;
                }

                if (type === 'bank')
                {
                    // account = accountMap.get(Line.Text, amount);
                    console.log(amount);
                    offsetAccount = '55020';
                }

                var dateField = item.querySelector('.ledger-table-item-row--cell__date--field');
                var descriptionField = item.querySelector('.ledger-table-item-line--cell__description--field');
                var amountField = item.querySelector('.ledger-table-item-line--cell__amount--field');

                var timeout = 0;
                
                // Date
                setTimeout(function(){
                    // dateField.dispatchEvent(new Event('focus'));
                    dateField.value = line.Date.replace(/\./g, '/').replace(/-/g, '/');
                    dateField.dispatchEvent(new Event('dateChange'));
                    // dateField.dispatchEvent(new Event('change'));
                }, timeout);
                timeout += 1000;

                // Description
                setTimeout(function(){
                    descriptionField.dispatchEvent(new Event('focus'));
                    descriptionField.value = line.Text;
                    descriptionField.dispatchEvent(new Event('change'));
                }, timeout);
                timeout += 1000;

                // Amount
                setTimeout(function(){
                    amountField.dispatchEvent(new Event('focus'));
                    amountField.value = numeral(amount.value() * -1).format('0,0.00');
                    amountField.dispatchEvent(new Event('blur'));
                }, timeout);
                timeout += 1000;

                if (account !== null)
                {
                    // Account
                    setTimeout(() => item.querySelector('.ledger-table-item-line--cell__account .ledger-select').dispatchEvent(new Event('click')), timeout);
                    timeout += 100;
        
                    setTimeout(() => document.querySelector('ledger-account-select .search-field').value = account, timeout);
                    timeout += 100;
        
                    setTimeout(() => document.querySelector('ledger-account-select .search-field').dispatchEvent(new Event('input')), timeout);
                    timeout += 100;
        
                    setTimeout(() => document.querySelector('ledger-account-select ledger-account-select-item .ledger-account-select-sub-item.selected').dispatchEvent(new Event('click')), timeout);
                    timeout += 1000;
                }    

                if (offsetAccount !== null)
                {
                    // Offset account
                    setTimeout(() => item.querySelector('.ledger-table-item-line--cell__offset-account .ledger-select').dispatchEvent(new Event('click')), timeout);
                    timeout += 100;

                    setTimeout(() => document.querySelector('ledger-offset-account-select .search-field').value = offsetAccount, timeout);
                    timeout += 100;

                    setTimeout(() => document.querySelector('ledger-offset-account-select .search-field').dispatchEvent(new Event('input')), timeout);
                    timeout += 100;

                    setTimeout(() => document.querySelector('ledger-offset-account-select ledger-offset-account-select-item .ledger-offset-account-select-sub-item.selected').dispatchEvent(new Event('click')), timeout);
                    timeout += 1000;
                }

                i++;

                if (i < contents.length)
                {
                    setTimeout(function(){
                        item = item.nextElementSibling;
                        insertLine(i);
                    }, timeout);
                }
                else
                {
                    setTimeout(function(){
                        alert('Import er gennemført');
                    }, 2000);
                    
                }
            }

            insertLine(0);
        }
    };
})();

(function(){
    if (window.location.pathname.substring(window.location.pathname.length - 9) === '/ledgerv2') {
        var btnBank = document.createElement('label');
        btnBank.style.position = "fixed";
        btnBank.style.bottom = "90px";
        btnBank.style.right = "15px";
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
        btnCsv.style.right = "105px";

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
            Papa.parse(e.target.files[0], {
                header: true,
                skipEmptyLines: true,
                complete: function(res, file){
                    if (res.errors.length > 0){
                        return;
                    }
                    ledger.import('bank', res.data);
                }
            });
        });

        inputCsv.addEventListener('change', function(e){
            Papa.parse(e.target.files[0], {
                header: true,
                skipEmptyLines: true,
                complete: function(res, file){
                    if (res.errors.length > 0){
                        return;
                    }
                    ledger.import('csv', res.data);
                }
            });
        });

        btnBank.append(iconBank);
        btnBank.append(labelBank);
        btnBank.append(inputBank);

        btnCsv.append(iconCsv);
        btnCsv.append(labelCsv);
        btnCsv.append(inputCsv);

        document.querySelector('body').append(btnBank);
        document.querySelector('body').append(btnCsv);
    }
})();