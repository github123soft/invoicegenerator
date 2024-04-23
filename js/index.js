let insideGUI = false;

function handleException(err) {
    let errorDisplayer = document.getElementById("error-displayer");
    errorDisplayer.innerHTML = err;
    errorDisplayer.style.display = 'block';    
}

function dateToPolish(parsedDate) {
    return parsedDate.yyyy + '-' + parsedDate.mm + '-' + parsedDate.dd;
}

function displayNoError() {
    let errorDisplayer = document.getElementById("error-displayer");
    errorDisplayer.style.display = 'none';
}

function OnFormPageGoBack() {
    document.getElementById("form-page").style.display = "none";
    document.getElementById("root-page").style.display = "block";
}

function makeInvoiceFileName(data) {
    let parsedDate = parseDate(data.invoiceDate);
    let name = data.peNamePolish.replaceAll(/\ssyn\s.*/g, '').replaceAll(/\scórka\s.*/g, '').replaceAll(/\s+/g, '-');
    return 'invoice-' + name + '-' + parsedDate.yyyy + '-' + parsedDate.mm + '.xml';
}

function OnFormPageGenerateInvoice() {
    try{
        let data = validateForm();
        saveDataToLocalStorage(data);

        let xmlString = b64DecodeUnicode(lang2base64xml(data.language));
        xmlString = fillTemplate(xmlString, data);
        let invoiceName = makeInvoiceFileName(data);
        let blob = new Blob([xmlString], {type : 'text/xml'});
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
        let data = dataLoader();
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
        let beginDate = normalizeDate(document.getElementById("services-period-begin-date-input").valueAsDate);
        let endDate = normalizeDate(document.getElementById("services-period-end-date-input").valueAsDate);
        if(!endDate){
            let mm = beginDate.getMonth();
            let maxDD = 31;
            let dd = beginDate.getDate();
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
    let str = '<!DOCTYPE html>\
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
    let blob = new Blob([str], {type : 'text/html'});
    navigateBlob(blob);
}

function OnFormPageGenerateHtml() {
    try{
        let data = validateForm();
        let invoiceName = makeInvoiceFileName(data);

        let htmlString = b64DecodeUnicode(lang2base64html(data.language));
        htmlString = fillTemplate(htmlString, data);
        htmlString = htmlString.replaceAll(/\{title\}/g, invoiceName);
        
        let blob = new Blob([htmlString], {type : 'text/html'});
        navigateBlob(blob);

        displayNoError();
    }catch(err){
        handleException(err);
    }
}

function OnBase64FileInputChange() {
    let input = document.getElementById('base64-file-input');
    let file = input.files[0];
    if (!file)
        return;

    let reader = new FileReader();
    reader.onload = function(e) {
        let str = reader.result;
        let b64 = b64EncodeUnicode(str);
        let decoded = b64DecodeUnicode(b64)
        document.getElementById('base64-file-input-textarea').value = decoded;

        let name = file.name.replaceAll(/[\s-.]+/g, '_');
        let source = 'const ' + name + ' = "' + b64 + '";\n';
        let blob = new Blob([source], {type : 'application/javascript'});
        downloadBlob(blob, file.name + ".js");
    };
    reader.readAsText(file);
}

function OnCreateFromPrevious() {
    onLoadData("Creating new invoice based on previously saved invoice", () => {
        let data = loadDataFromLocalStorage();
        
        data.invoiceShortNo++;
        
        let serviceBeginDate = normalizeDate(data.serviceEndDate);
        serviceBeginDate.setDate(serviceBeginDate.getDate() + 1);
        
        let serviceEndDate = normalizeDate(serviceBeginDate);
        serviceEndDate.setDate(32); // go next month
        if(serviceBeginDate.getDate() == 1){
            serviceEndDate.setDate(0); // go last day of prev month
        }else{
            let mm = serviceEndDate.getMonth();
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

        let invoiceDate = normalizeDate(serviceEndDate);
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
    
    let label = document.getElementById("invoice-no-label");
    let shortInput = document.getElementById("invoice-short-no-input");
    let fullInput = document.getElementById("invoice-full-no-input");

    let language = document.getElementById("language-select").value;
    if(!language) {
        label.innerHTML = "";
        shortInput.style.display = "none";
        fullInput.style.display = "none";
    }else{
        if(isCustomInvoiceNo(language)){
            label.innerHTML = "Invoice No.:";
            shortInput.style.display = "none";
            fullInput.style.display = "block";
        }else{
            label.innerHTML = "Invoice ordinal number:";
            shortInput.style.display = "block";
            fullInput.style.display = "none";
        }

        
        let registrationNumberInput = document.getElementById("registration-number-input");
        let registrationNumberCheckbox = document.getElementById("registration-number-ckeckbox");

        if(requiresRegistrationNumber(language)){
            registrationNumberInput.style.display = "block";
            registrationNumberCheckbox.checked = true;
            registrationNumberCheckbox.disabled = true;
        }else{
            registrationNumberInput.style.display = "none";
            registrationNumberCheckbox.disabled = false;
        }
    }

    document.getElementById("not-vat-payer-para").style.display = isEU(language) ? "block" : "none";
    document.getElementById("information-in-local-language").style.display = isBilingual(language) ? "block" : "none";

    OnRegistrationNumberCheckboxChange();
}

function OnRegistrationNumberCheckboxChange() {
    let registrationNumberInput = document.getElementById("registration-number-input");
    let registrationNumberCheckbox = document.getElementById("registration-number-ckeckbox");
    
    registrationNumberInput.style.display = registrationNumberCheckbox.checked ? "block" : "none";
}

function OnMedBankCheckboxChange() {
    let checkbox = document.getElementById("med-bank-ckeckbox");
    document.getElementById("med-bank-table").style.display = checkbox.checked ? "block" : "none";
}

function OnFormPageSaveJSON() {
    try{
        let data = {
            storage: loadDataFromLocalStorage(),
            form: validateForm()
        };
        let json = JSON.stringify(data);
        let blob = new Blob([json], {type : 'application/json'});
        downloadBlob(blob, "123soft-invoice-data.json");
        displayNoError();
    }catch(err){
        handleException(err);
    }
}

function OnFormPageLoadFromJSON() {
    try{
        let input = document.getElementById('load-json-input');
        let file = input.files[0];
        if (!file)
            return;

        let reader = new FileReader();
        reader.onload = function(e) {
            let data = JSON.parse(reader.result);
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