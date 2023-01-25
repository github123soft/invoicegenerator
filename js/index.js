var insideGUI = false;

function handleException(err) {
    var errorDisplayer = document.getElementById("error-displayer");
    errorDisplayer.innerHTML = err;
    errorDisplayer.style.display = 'block';    
}

function dateToPolish(parsedDate) {
    return parsedDate.yyyy + '-' + parsedDate.mm + '-' + parsedDate.dd;
}

function displayNoError() {
    var errorDisplayer = document.getElementById("error-displayer");
    errorDisplayer.style.display = 'none';
}

function OnFormPageGoBack() {
    document.getElementById("form-page").style.display = "none";
    document.getElementById("root-page").style.display = "block";
}

function makeInvoiceFileName(data) {
    var parsedDate = parseDate(data.invoiceDate);
    var name = data.peNamePolish.replaceAll(/\ssyn\s.*/g, '').replaceAll(/\scórka\s.*/g, '').replaceAll(/\s+/g, '-');
    return 'invoice-' + name + '-' + parsedDate.yyyy + '-' + parsedDate.mm + '.xml';
}

function OnFormPageGenerateInvoice() {
    try{
        var data = validateForm();
        saveDataToLocalStorage(data);

        var xmlString = b64DecodeUnicode(lang2base64xml(data.language));
        xmlString = fillTemplate(xmlString, data);
        var invoiceName = makeInvoiceFileName(data);
        var blob = new Blob([xmlString], {type : 'text/xml'});
        downloadBlob(blob, invoiceName);
        displayNoError();
    }catch(err){
        handleException(err);
    }
}

function OnCreateFromScratch() {
    insideGUI = true;
    try{
        clearForm();
        OnLanguageSelectChange();
        document.getElementById("form-title").innerHTML = "Creating invoice from scratch";
        document.getElementById("root-page").style.display = "none";
        document.getElementById("form-page").style.display = "block";
        document.getElementById("contract-no-input").focus();
        displayNoError();
    }catch(err){
        handleException(err);
    }
    insideGUI = false;
}

function onLoadData(formCaption, dataLoader) {
    insideGUI = true;
    try{
        var data = dataLoader();
        fillForm(data);
        OnLanguageSelectChange();
        OnMedBankCheckboxChange();
        document.getElementById("form-title").innerHTML = formCaption;
        document.getElementById("root-page").style.display = "none";
        document.getElementById("form-page").style.display = "block";
        document.getElementById("contract-no-input").focus();
        displayNoError();
    }catch(err){
        handleException(err);
    }
    insideGUI = false;
}

function OnLoadLastValidatedData() {
    onLoadData("Viewing/editing last validated data", loadDataFromLocalStorage);
}

function OnServicesPeriodBeginDateInputChange() {
    insideGUI = true;
    try{
        var beginDate = normalizeDate(document.getElementById("services-period-begin-date-input").valueAsDate);
        var endDate = normalizeDate(document.getElementById("services-period-end-date-input").valueAsDate);
        if(!endDate){
            var mm = beginDate.getMonth();
            var maxDD = 31;
            var dd = beginDate.getDate();
            switch(mm){
            case 0: // jan, 31 days
                maxDD = 28;
                break;
            case 2: // mar, 31 days
                maxDD = 30;
                break;
            case 4: // may, 31 days
                maxDD = 30;
                break;
            case 7: // aug, 31 days
                maxDD = 30;
                break;
            case 9: // oct, 31 days
                maxDD = 30;
                break;
            }
            
            endDate = beginDate;
            if(dd > maxDD)
                endDate.setDate(maxDD);
            
            endDate.setMonth((mm + 1) % 12);

            if(dd <= maxDD)
                endDate.setDate(dd - 1);

            setDateInputValue("services-period-end-date-input", endDate);
        }
        displayNoError();
    }catch(err){
        handleException(err);
    }
    insideGUI = false;
}

function OnGeneratePrintableView() {
    var str = '<!DOCTYPE html>\
    <html>\
    <head>\
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>\
        <title>123Soft invoice generator</title>\
    </head>\
    <body>\
        <h1>This is printable page.</h1>\
    </body>\
    <script>\
        window.print();\
    </script>\
    </html>';
    var blob = new Blob([str], {type : 'text/html'});
    navigateBlob(blob);
}

function OnFormPageGenerateHtml() {
    try{
        var data = validateForm();
        var invoiceName = makeInvoiceFileName(data);

        var htmlString = b64DecodeUnicode(lang2base64html(data.language));
        htmlString = fillTemplate(htmlString, data);
        htmlString = htmlString.replaceAll(/\{title\}/g, invoiceName);
        
        var blob = new Blob([htmlString], {type : 'text/html'});
        navigateBlob(blob);

        displayNoError();
    }catch(err){
        handleException(err);
    }
}

function OnBase64FileInputChange() {
    var input = document.getElementById('base64-file-input');
    var file = input.files[0];
    if (!file)
        return;

    var reader = new FileReader();
    reader.onload = function(e) {
        var str = reader.result;
        var b64 = b64EncodeUnicode(str);
        var decoded = b64DecodeUnicode(b64)
        document.getElementById('base64-file-input-textarea').value = decoded;

        var name = file.name.replaceAll(/[\s-.]+/g, '_');
        var source = 'const ' + name + ' = "' + b64 + '";\n';
        var blob = new Blob([source], {type : 'application/javascript'});
        downloadBlob(blob, file.name + ".js");
    };
    reader.readAsText(file);
}

function OnCreateFromPrevious() {
    onLoadData("Creating new invoice based on previously saved invoice", () => {
        var data = loadDataFromLocalStorage();
        
        data.invoiceShortNo++;
        
        var serviceBeginDate = normalizeDate(data.serviceEndDate);
        serviceBeginDate.setDate(serviceBeginDate.getDate() + 1);
        
        var serviceEndDate = normalizeDate(serviceBeginDate);
        serviceEndDate.setDate(32); // go next month
        if(serviceBeginDate.getDate() == 1){
            serviceEndDate.setDate(0); // go last day of prev month
        }else{
            var mm = serviceEndDate.getMonth();
            serviceEndDate.setDate(serviceBeginDate.getDate() - 1);
            if(serviceEndDate.getMonth() != mm){ // mm is too short month
                serviceEndDate = normalizeDate(serviceBeginDate);
                serviceEndDate.setDate(32); // go next month
                serviceEndDate.setDate(32); // go next month again
                serviceEndDate.setDate(0); // go last day of prev month
            }
        }
        data.serviceBeginDate = serviceBeginDate;
        data.serviceEndDate = serviceEndDate;

        var invoiceDate = normalizeDate(serviceEndDate);
        if(invoiceDate.getMonth() < 10){
            invoiceDate.setDate(23);
        }else{
            invoiceDate.setDate(16);
        }
        data.invoiceDate = invoiceDate;
        
        data.termOfPayment = evalMinTermOfPayment(invoiceDate);

        return data;
    });
}

function OnLanguageSelectChange() {
    
    var label = document.getElementById("invoice-no-label");
    var shortInput = document.getElementById("invoice-short-no-input");
    var fullInput = document.getElementById("invoice-full-no-input");

    var language = document.getElementById("language-select").value;
    if(!language) {
        label.innerHTML = "";
        shortInput.style.display = "none";
        fullInput.style.display = "none";
    }else if(isCustomInvoiceNo(language)){
        label.innerHTML = "Invoice No.:";
        shortInput.style.display = "none";
        fullInput.style.display = "block";
    }else{
        label.innerHTML = "Invoice ordinal number:";
        shortInput.style.display = "block";
        fullInput.style.display = "none";
    }

    document.getElementById("not-vat-payer-para").style.display = isEU(language) ? "block" : "none";
    document.getElementById("information-in-local-language").style.display = isBilingual(language) ? "block" : "none";
}

function OnMedBankCheckboxChange() {
    var checkbox = document.getElementById("med-bank-ckeckbox");
    document.getElementById("med-bank-table").style.display = checkbox.checked ? "block" : "none";
}

function OnFormPageSaveJSON() {
    try{
        var data = {
            storage: loadDataFromLocalStorage(),
            form: validateForm()
        };
        var json = JSON.stringify(data);
        var blob = new Blob([json], {type : 'application/json'});
        downloadBlob(blob, "123soft-invoice-data.json");
        displayNoError();
    }catch(err){
        handleException(err);
    }
}

function OnFormPageLoadFromJSON() {
    try{
        var input = document.getElementById('load-json-input');
        var file = input.files[0];
        if (!file)
            return;

        var reader = new FileReader();
        reader.onload = function(e) {
            var data = JSON.parse(reader.result);
            saveDataToLocalStorage(data.form);
            onLoadData(document.getElementById("form-title").innerHTML, loadDataFromLocalStorage);
            saveDataToLocalStorage(data.storage);
        };
        reader.readAsText(file);
        displayNoError();
    }catch(err){
        handleException(err);
    }
}