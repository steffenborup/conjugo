(function(){
    var self = {
        import: (type, data) => {
            console.log('ledger.import()', type);
            console.log(data);
    
            var contents = Papa.parse(data, {
                header: true,
                skipEmptyLines: true
            });
    
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

            console.log(contents);

            return;
    
            var insertLine = function(i)
            {
                var line = contents.data[i];
    
                var amount = numeral(line.Beløb);
                var account = null;
                var offsetAccount = null;
    
                if (type === 'csv')
                {
                    account = line.Konto;
                    offsetAccount = line.Modkonto;
                }
    
                if (type === 'bank')
                {
                    offsetAccount = '55010';
                }
    
                var dateField = item.querySelector('.ledger-table-item-row--cell__date--field');
                var descriptionField = item.querySelector('.ledger-table-item-line--cell__description--field');
                var amountField = item.querySelector('.ledger-table-item-line--cell__amount--field');
    
                var timeout = 0;
                
                // Date
                setTimeout(function(){
                    dateField.dispatchEvent(new Event('focus'));
                    dateField.value = line.Dato.replace(/\./g, '/');
                    dateField.dispatchEvent(new Event('change'));
                }, timeout);
                timeout += 1000;
    
                // Description
                setTimeout(function(){
                    descriptionField.dispatchEvent(new Event('focus'));
                    descriptionField.value = line.Tekst;
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
    
                if (i < contents.data.length)
                {
                    setTimeout(function(){
                        item = item.nextElementSibling;
                        insertLine(i);
                    }, timeout);
                }
            }
    
            insertLine(0);
        }
    }

    window.ledger = self;
})();
