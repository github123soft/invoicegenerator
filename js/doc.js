/*
  This file is part of Katmait Invoice Generator, which is based on
  invoicegenerator (https://github.com/github123soft/invoicegenerator),
  originally licensed under the GNU General Public License v2.0.

  Copyright (C) 2025 Katmait Solutions

  This program is free software; you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation; either version 2 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program; if not, see https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
*/
function fillTemplate(xml, data) {
    let invoiceNo;
    if(isCustomInvoiceNo(data.language)){
        invoiceNo = data.invoiceFullNo;
    }else{
        invoiceNo = data.contractNo + "/" + data.invoiceShortNo;
    }
    xml = xml.replaceAll(/\{invoiceNo\}/g, invoiceNo);

    let invoiceDate = parseDate(data.invoiceDate);
    xml = xml.replaceAll(/\{invoiceDateLocal\}/g, dateToLocal(invoiceDate, data.language));
    xml = xml.replaceAll(/\{invoiceDatePol\}/g, dateToPolish(invoiceDate));

    xml = xml.replaceAll(/\{contractNo\}/g, data.contractNo);

    let contractDate = parseDate(data.contractDate);
    xml = xml.replaceAll(/\{contractDateLocal\}/g, dateToLocal(contractDate, data.language));
    xml = xml.replaceAll(/\{contractDatePol\}/g, dateToPolish(contractDate));

    let companyTypePol;
    if(data.companyTypePol.localeCompare("PE") == 0){
        companyTypePol = "Przedsiębiorca indywidualny";
    }else if(data.companyTypePol.localeCompare("Firm") == 0){
        companyTypePol = "Firma";
    }else{
        throw "Invalid or unknown company type: " + "'" + data.companyTypePol + "'";
    }
    xml = xml.replaceAll(/\{companyTypePol\}/g, companyTypePol);
    
    xml = xml.replaceAll(/\{PENameLocal\}/g, data.peNameLocal);
    xml = xml.replaceAll(/\{PENamePol\}/g, data.peNamePolish);

    xml = xml.replaceAll(/\{countryLocal\}/g, data.countryLocal);
    xml = xml.replaceAll(/\{countryPol\}/g, data.countryPolish);

    let addressExtraLocal = data.addressExtraLocal ?? '';
    if(addressExtraLocal.length > 0){
        addressExtraLocal = addressExtraLocal + ", ";
    }
    xml = xml.replaceAll(/\{addressExtraLocal\}/g, addressExtraLocal);

    let addressExtraPol = data.addressExtraPol ?? '';
    if(addressExtraPol.length > 0){
        addressExtraPol = addressExtraPol + ", ";
    }
    xml = xml.replaceAll(/\{addressExtraPol\}/g, addressExtraPol);

    xml = xml.replaceAll(/\{cityLocal\}/g, data.cityLocal);
    xml = xml.replaceAll(/\{cityPol\}/g, data.cityPolish);

    xml = xml.replaceAll(/\{postalCode\}/g, data.postalCode);

    xml = xml.replaceAll(/\{streetLocal\}/g, data.streetLocal);
    xml = xml.replaceAll(/\{streetPol\}/g, data.streetPolish);

    let notVatPayer = data.notVatPayer ?? false;
    
    xml = xml.replaceAll(/\{taxNumber\}/g, data.taxNumber);
    let taxNumberPol = evalTaxNumberPol(data.taxNumber, notVatPayer, data.language);
    xml = xml.replaceAll(/\{taxNumberPol\}/g, taxNumberPol);

    
    document.getElementById("not-vat-payer-ckeckbox").checked = notVatPayer;
    
    xml = xml.replaceAll(
        /\{ReverseChargeLocal\}/g, 
        notVatPayer ? "" : reverseChargeLocal(data.language)
    );
    xml = xml.replaceAll(
        /\{ReverseChargePol\}/g, 
        notVatPayer ? "" : "Odwrotne obciążenie"
    );
    
    if(data.hasRegistrationNumber){
        xml = xml.replaceAll(/\{registrationNumber\}/g, data.registrationNumber);
        xml = xml.replaceAll(/\{registrationNumberLocal\}/g, data.registrationNumber);
    }else{
        xml = xml.replaceAll(/\{registrationNumber\}/g, noRegistrationNumberPol());
        xml = xml.replaceAll(/\{registrationNumberLocal\}/g, noRegistrationNumberLocal(data.language));
    }
    
    xml = xml.replaceAll(/\{bankAccountNo\}/g, data.bankAccountNumber);
    xml = xml.replaceAll(/\{beneficiaryName\}/g, data.beneficiaryName);
    xml = xml.replaceAll(/\{beneficiaryAddress\}/g, data.beneficiaryAddress);
    xml = xml.replaceAll(/\{bankName\}/g, data.bankName);
    xml = xml.replaceAll(/\{bankAddress\}/g, data.bankAddress);
    xml = xml.replaceAll(/\{swiftCode\}/g, data.swiftCode);
    
    xml = xml.replaceAll(/\{medBankDisplay\}/g, data.useMedBank ? 'table-row' : 'none');
    
    xml = xml.replaceAll(/\{medBankName\}/g, data.useMedBank ? data.medBankName : '');
    xml = xml.replaceAll(/\{medBankAddress\}/g, data.useMedBank ? data.medBankAddress : '');
    xml = xml.replaceAll(/\{medBankSwiftCode\}/g, data.useMedBank ? data.medBankSwiftCode : '');
    xml = xml.replaceAll(/\{medBankAccNo\}/g, data.useMedBank ? data.medBankAcc : '');

    let serviceBeginDate = parseDate(data.serviceBeginDate);
    xml = xml.replaceAll(/\{startDateLocal\}/g, dateToLocal(serviceBeginDate, data.language));
    xml = xml.replaceAll(/\{startDatePol\}/g, dateToPolish(serviceBeginDate));

    let serviceEndDate = parseDate(data.serviceEndDate);
    xml = xml.replaceAll(/\{endDateLocal\}/g, dateToLocal(serviceEndDate, data.language));
    xml = xml.replaceAll(/\{endDatePol\}/g, dateToPolish(serviceEndDate));

    xml = xml.replaceAll(/\{currency\}/g, data.currency);
    xml = xml.replaceAll(/\{currencyLocal\}/g, currencyToLocal(data.currency, data.language));
    
    xml = xml.replaceAll(/\{amountLocal\}/g, amountToLocal(data.amount, data.language));
    xml = xml.replaceAll(/\{amountPol\}/g, amountToPolish(data.amount));
    
    let termOfPayment = parseDate(data.termOfPayment);
    xml = xml.replaceAll(/\{termOfPaimentLocal\}/g, dateToLocal(termOfPayment, data.language));
    xml = xml.replaceAll(/\{termOfPaimentPol\}/g, dateToPolish(termOfPayment));

    xml = xml.replaceAll(/\{signerNameLocal\}/g, data.signerNameLocal);
    xml = xml.replaceAll(/\{signerNamePol\}/g, data.signerNamePolish);

    return xml;
}
