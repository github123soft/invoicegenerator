function validateForm() {
    let result = {
        language: document.getElementById("language-select").value
    };

    let input = document.getElementById("contract-no-input");
    result.contractNo = input.value.trim();
    checkInput(result.contractNo, input, "Invalid contract number. Cannot be empty.");

    input = document.getElementById("contract-date-input");
    result.contractDate = normalizeDate(input.valueAsDate);
    checkInput(result.contractDate, input, "Invalid contract date. Cannot be empty.");

    if(isCustomInvoiceNo(result.language)){
        result.invoiceShortNo = null;
        input = document.getElementById("invoice-full-no-input");
        result.invoiceFullNo = input.value;
        checkInput(result.invoiceFullNo, input, "Invalid invoice number. Must be not empty string.");
    }else{
        result.invoiceFullNo = null;
        input = document.getElementById("invoice-short-no-input");
        result.invoiceShortNo = input.value;
        checkInput(result.invoiceShortNo, input, "Invalid invoice ordinal number. Must be a positive integer.");
    }
    
    input = document.getElementById("invoice-date-input");
    result.invoiceDate = normalizeDate(input.valueAsDate);
    checkInput(result.invoiceDate, input, "Invalid invoice date. Cannot be empty.");
    checkInput(result.contractDate <= result.invoiceDate, input, "Invoice date must be not less than contract date.");

    input = document.getElementById("services-period-begin-date-input");
    result.serviceBeginDate = normalizeDate(input.valueAsDate);
    checkInput(result.serviceBeginDate, input, "Invalid services period begin date. Cannot be empty.");
    checkInput(result.serviceBeginDate <= result.invoiceDate, input, "Invalid services period begin date. Cannot be greater than invoice date.");
    checkInput(result.serviceBeginDate >= result.contractDate, input, "Invalid services period begin date. Cannot be less than contract date.");

    input = document.getElementById("services-period-end-date-input");
    result.serviceEndDate = normalizeDate(input.valueAsDate);
    checkInput(result.serviceEndDate, input, "Invalid services period end date. Cannot be empty.");
    checkInput(result.serviceBeginDate <= result.serviceEndDate, input, "Invalid services period. End date should be same or greater than begin date.");

    input = document.getElementById("currency-select");
    result.currency = input.value;
    checkInput(result.currency, input, "Invalid currency. Cannot be empty.");
    
    input = document.getElementById("amount-input");
    result.amount = input.value;
    checkInput(result.amount, input, "Invalid amount. Cannot be empty.");

    input = document.getElementById("term-of-payment-input");
    result.termOfPayment = normalizeDate(input.valueAsDate);
    checkInput(result.termOfPayment, input, "Invalid term of payment. Cannot be empty.");
    let minTermOfPayment = evalMinTermOfPayment(result.invoiceDate);
    checkInput(minTermOfPayment <= result.termOfPayment, input, "Invalid term of payment. Should be not less than 10th of the next month relative to invoice date.");
    
    input = document.getElementById("tax-number-input");
    result.taxNumber = input.value.trim();
    checkInput(result.taxNumber, input, "Invalid tax number. Cannot be empty.");

    input = document.getElementById("registration-number-ckeckbox");
    result.hasRegistrationNumber = input.checked;
    
    input = document.getElementById("registration-number-input");
    result.registrationNumber = input.value.trim();
    if(result.hasRegistrationNumber)
        checkInput(result.registrationNumber, input, "Invalid registration number. Cannot be empty.");

    result.notVatPayer =  document.getElementById("not-vat-payer-ckeckbox").checked;

    input = document.getElementById("bank-account-number-input");
    result.bankAccountNumber = input.value.trim();
    checkInput(result.bankAccountNumber, input, "Invalid bank account number. Cannot be empty.");

    input = document.getElementById("beneficiary-name-input");
    result.beneficiaryName = input.value.trim();
    checkInput(result.beneficiaryName, input, "Invalid benefitiary name. Cannot be empty.");

    input = document.getElementById("beneficiary-address-input");
    result.beneficiaryAddress = input.value.trim();
    checkInput(result.beneficiaryAddress, input, "Invalid benefitiary address. Cannot be empty.");

    input = document.getElementById("bank-name-input");
    result.bankName = input.value.trim();
    checkInput(result.bankName, input, "Invalid bank name. Cannot be empty.");

    input = document.getElementById("bank-address-input");
    result.bankAddress = input.value.trim();
    checkInput(result.bankAddress, input, "Invalid bank address. Cannot be empty.");

    input = document.getElementById("swift-input");
    result.swiftCode = input.value.trim();
    checkInput(result.swiftCode, input, "Invalid bank swift/BIC code. Cannot be empty.");

    result.useMedBank =  document.getElementById("med-bank-ckeckbox").checked;
    
    result.medBankName = document.getElementById("med-bank-name-input").value.trim();
    result.medBankAddress = document.getElementById("med-bank-address-input").value.trim();
    result.medBankSwiftCode = document.getElementById("med-bank-swift-input").value.trim();
    result.medBankAcc = document.getElementById("med-bank-acc-input").value.trim();

    if(result.useMedBank){
        checkInput(result.medBankName, document.getElementById("med-bank-name-input"), "Invalid intermediary bank name.");
        checkInput(result.medBankAddress, document.getElementById("med-bank-address-input"), "Invalid intermediary bank address.");
        checkInput(result.medBankSwiftCode, document.getElementById("med-bank-swift-input"), "Invalid intermediary bank swift code.");
    }

    input = document.getElementById("pe-name-polish-input");
    result.peNamePolish = input.value.trim();
    checkInput(result.peNamePolish, input, "Invalid PE name in Polish (Wystawiający). Cannot be empty.");

    input = document.getElementById("signer-name-polish-input");
    result.signerNamePolish = input.value.trim();
    checkInput(result.signerNamePolish, input, "Invalid signer name in Polish (Podpisujący). Cannot be empty.");

    input = document.getElementById("country-polish-input");
    result.countryPolish = input.value.trim();
    checkInput(result.countryPolish, input, "Invalid country in Polish (Państwo). Cannot be empty.");

    result.addressExtraPol = document.getElementById("address-extra-polish-input").value.trim();
    
    input = document.getElementById("city-polish-input");
    result.cityPolish = input.value.trim();
    checkInput(result.cityPolish, input, "Invalid city in Polish (Miasto). Cannot be empty.");

    input = document.getElementById("postal-code-input");
    result.postalCode = input.value.trim();
    checkInput(result.postalCode, input, "Invalid postal code. Cannot be empty.");

    input = document.getElementById("street-polish-input");
    result.streetPolish = input.value.trim();
    checkInput(result.streetPolish, input, "Invalid street/building number in Polish (Ulica i numer domu). Cannot be empty.");

    input = document.getElementById("company-type-pol");
    result.companyTypePol = input.value;
    checkInput(result.companyTypePol, input, "Invalid company type. Cannot be empty.");
    
    if(isBilingual(result.language)){
        input = document.getElementById("pe-name-local-input");
        result.peNameLocal = input.value.trim();
        checkInput(result.peNameLocal, input, "Invalid PE name in local language. Cannot be empty.");

        input = document.getElementById("signer-name-local-input");
        result.signerNameLocal = input.value.trim();
        checkInput(result.signerNameLocal, input, "Invalid signer name in local language. Cannot be empty.");

        input = document.getElementById("country-local-input");
        result.countryLocal = input.value.trim();
        checkInput(result.countryLocal, input, "Invalid country in local language. Cannot be empty.");

        result.addressExtraLocal = document.getElementById("address-extra-local-input").value.trim();
        
        input = document.getElementById("city-local-input");
        result.cityLocal = input.value.trim();
        checkInput(result.cityLocal, input, "Invalid city in local language. Cannot be empty.");

        input = document.getElementById("street-local-input");
        result.streetLocal = input.value.trim();
        checkInput(result.streetLocal, input, "Invalid street/building number in local language. Cannot be empty.");
    }else{
        result.peNameLocal = result.peNamePolish;
        result.signerNameLocal = result.signerNamePolish;
        result.countryLocal = result.countryPolish;
        result.addressExtraLocal = result.addressExtraPol;
        result.cityLocal = result.cityPolish;
        result.streetLocal = result.streetPolish;
    }

    return result;
}

function fillForm(data) {
    document.getElementById("language-select").value = data.language;
    document.getElementById("contract-no-input").value = data.contractNo;
    setDateInputValue("contract-date-input", data.contractDate);
    document.getElementById("invoice-short-no-input").value = data.invoiceShortNo ?? '';
    document.getElementById("invoice-full-no-input").value = data.invoiceFullNo ?? '';
    setDateInputValue("invoice-date-input", data.invoiceDate);
    setDateInputValue("services-period-begin-date-input", data.serviceBeginDate);
    setDateInputValue("services-period-end-date-input", data.serviceEndDate);
    document.getElementById("currency-select").value = data.currency;
    document.getElementById("amount-input").value = data.amount;
    setDateInputValue("term-of-payment-input", data.termOfPayment);
    document.getElementById("tax-number-input").value = data.taxNumber;
    document.getElementById("registration-number-ckeckbox").checked = data.hasRegistrationNumber;
    document.getElementById("registration-number-input").value = data.registrationNumber;
    document.getElementById("not-vat-payer-ckeckbox").checked = data.notVatPayer ?? false;
    document.getElementById("bank-account-number-input").value = data.bankAccountNumber;
    document.getElementById("beneficiary-name-input").value = data.beneficiaryName;
    document.getElementById("beneficiary-address-input").value = data.beneficiaryAddress;
    document.getElementById("bank-name-input").value = data.bankName;
    document.getElementById("bank-address-input").value = data.bankAddress;
    document.getElementById("swift-input").value = data.swiftCode;
    document.getElementById("med-bank-ckeckbox").checked = data.useMedBank ?? false;
    document.getElementById("med-bank-name-input").value = data.medBankName ?? '';
    document.getElementById("med-bank-address-input").value = data.medBankAddress ?? '';
    document.getElementById("med-bank-swift-input").value = data.medBankSwiftCode ?? '';
    document.getElementById("med-bank-acc-input").value = data.medBankAcc ?? '';
    document.getElementById("pe-name-polish-input").value = data.peNamePolish;
    document.getElementById("signer-name-polish-input").value = data.signerNamePolish;
    document.getElementById("country-polish-input").value = data.countryPolish;
    document.getElementById("address-extra-polish-input").value = data.addressExtraPol ?? '';
    document.getElementById("city-polish-input").value = data.cityPolish;
    document.getElementById("postal-code-input").value = data.postalCode;
    document.getElementById("street-polish-input").value = data.streetPolish;
    document.getElementById("company-type-pol").value = data.companyTypePol ?? '';
    document.getElementById("pe-name-local-input").value = data.peNameLocal;
    document.getElementById("signer-name-local-input").value = data.signerNameLocal;
    document.getElementById("country-local-input").value = data.countryLocal;
    document.getElementById("address-extra-local-input").value = data.addressExtraLocal ?? '';
    document.getElementById("city-local-input").value = data.cityLocal;
    document.getElementById("street-local-input").value = data.streetLocal;
}

function clearForm(data) {
    document.getElementById("contract-no-input").value = '';
    document.getElementById("contract-date-input").value = '';
    document.getElementById("invoice-short-no-input").value = '';
    document.getElementById("invoice-full-no-input").value = '';
    document.getElementById("invoice-date-input").value = '';
    document.getElementById("services-period-begin-date-input").value = '';
    document.getElementById("services-period-end-date-input").value = '';
    document.getElementById("currency-select").value = '';
    document.getElementById("amount-input").value = '';
    document.getElementById("term-of-payment-input").value = '';
    document.getElementById("tax-number-input").value = '';
    document.getElementById("registration-number-input").value = '';
    document.getElementById("not-vat-payer-ckeckbox").checked = false;
    document.getElementById("bank-account-number-input").value = '';
    document.getElementById("beneficiary-name-input").value = '';
    document.getElementById("beneficiary-address-input").value = '';
    document.getElementById("bank-name-input").value = '';
    document.getElementById("bank-address-input").value = '';
    document.getElementById("swift-input").value = '';
    document.getElementById("med-bank-name-input").value = '';
    document.getElementById("med-bank-address-input").value = '';
    document.getElementById("med-bank-swift-input").value = '';
    document.getElementById("med-bank-acc-input").value = '';
    document.getElementById("pe-name-polish-input").value = '';
    document.getElementById("signer-name-polish-input").value = '';
    document.getElementById("country-polish-input").value = '';
    document.getElementById("address-extra-polish-input").value = '';
    document.getElementById("city-polish-input").value = '';
    document.getElementById("postal-code-input").value = '';
    document.getElementById("street-polish-input").value = '';
    document.getElementById("company-type-pol").value = '';
    document.getElementById("pe-name-local-input").value = '';
    document.getElementById("signer-name-local-input").value = '';
    document.getElementById("country-local-input").value = '';
    document.getElementById("address-extra-local-input").value = '';
    document.getElementById("city-local-input").value = '';
    document.getElementById("street-local-input").value = '';
}
