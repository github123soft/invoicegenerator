function noTranslation(lang, what) {
    return internalProgramError("string '" + what + "' has no translation to language '" + lang + "'.");
}

function unexpectedLanguageCode(lang) {
    return internalProgramError("Unexpected language code: '" + lang + "'.");
}

function lang2base64xml(lang) {
    if(lang.localeCompare("English") == 0)
        return EN_xml;
    if(lang.localeCompare("Russian") == 0)
        return RU_xml;
    if(lang.localeCompare("Ukrainian") == 0)
        return UA_xml;
    if(lang.localeCompare("Bulgarian") == 0)
        return BG_xml;
    if(lang.localeCompare("Czech") == 0)
        return CZ_xml;
    if(lang.localeCompare("Lithuanian") == 0)
        return LT_xml;
    if(lang.localeCompare("Polish") == 0)
        return PL_xml;
    if(lang.localeCompare("Kazakh") == 0)
        return KZ_xml;
    if(lang.localeCompare("Azerbaijan") == 0)
        return AZ_xml;
    
    throw unexpectedLanguageCode(lang);
}

function lang2base64html(lang) {
    if(lang.localeCompare("English") == 0)
        return EN_html;
    if(lang.localeCompare("Russian") == 0)
        return RU_html;
    if(lang.localeCompare("Ukrainian") == 0)
        return UA_html;
    if(lang.localeCompare("Bulgarian") == 0)
        return BG_html;
    if(lang.localeCompare("Czech") == 0)
        return CZ_html;
    if(lang.localeCompare("Lithuanian") == 0)
        return LT_html;
    if(lang.localeCompare("Polish") == 0)
        return PL_html;
    if(lang.localeCompare("Kazakh") == 0)
        return KZ_html;
    if(lang.localeCompare("Azerbaijan") == 0)
        return AZ_html;
    
    throw unexpectedLanguageCode(lang);
}

function dateToLocal(parsedDate, lang) {
    if(lang.localeCompare("English") == 0)
        return parsedDate.mm + '/' + parsedDate.dd + '/' + parsedDate.yyyy;
    if(lang.localeCompare("Russian") == 0)
        return parsedDate.dd + '/' + parsedDate.mm + '/' + parsedDate.yyyy;
    if(lang.localeCompare("Ukrainian") == 0)
        return parsedDate.dd + '/' + parsedDate.mm + '/' + parsedDate.yyyy;
    if(lang.localeCompare("Bulgarian") == 0)
        return parsedDate.yyyy + '-' + parsedDate.mm + '-' + parsedDate.dd;
    if(lang.localeCompare("Czech") == 0)
        return parsedDate.dd + '/' + parsedDate.mm + '/' + parsedDate.yyyy;
    if(lang.localeCompare("Lithuanian") == 0)
        return parsedDate.yyyy + '-' + parsedDate.mm + '-' + parsedDate.dd;
    if(lang.localeCompare("Polish") == 0)
        return parsedDate.yyyy + '-' + parsedDate.mm + '-' + parsedDate.dd;
    if(lang.localeCompare("Kazakh") == 0)
        return parsedDate.dd + '/' + parsedDate.mm + '/' + parsedDate.yyyy;
    if(lang.localeCompare("Azerbaijan") == 0)
        return parsedDate.mm + '/' + parsedDate.dd + '/' + parsedDate.yyyy;
    
    throw unexpectedLanguageCode(lang);
}

function amountToLocal(amount, lang) {
    if(lang.localeCompare("English") == 0)
        return formatAmount(amount, '.');
    if(lang.localeCompare("Russian") == 0)
        return formatAmount(amount, ',');
    if(lang.localeCompare("Ukrainian") == 0)
        return formatAmount(amount, ',');
    if(lang.localeCompare("Bulgarian") == 0)
        return formatAmount(amount, ',');
    if(lang.localeCompare("Czech") == 0)
        return formatAmount(amount, '.');
    if(lang.localeCompare("Lithuanian") == 0)
        return formatAmount(amount, ',');
    if(lang.localeCompare("Polish") == 0)
        return formatAmount(amount, ',');
    if(lang.localeCompare("Kazakh") == 0)
        return formatAmount(amount, ',');
    if(lang.localeCompare("Azerbaijan") == 0)
        return formatAmount(amount, '.');
    
    throw unexpectedLanguageCode(lang);
}

function isCustomInvoiceNo(lang) {
    if(lang.localeCompare("English") == 0)
        return false;
    if(lang.localeCompare("Russian") == 0)
        return false;
    if(lang.localeCompare("Ukrainian") == 0)
        return false;
    if(lang.localeCompare("Bulgarian") == 0)
        return true;
    if(lang.localeCompare("Czech") == 0)
        return false;
    if(lang.localeCompare("Lithuanian") == 0)
        return false;
    if(lang.localeCompare("Polish") == 0)
        return true;
    if(lang.localeCompare("Kazakh") == 0)
        return false;
    if(lang.localeCompare("Azerbaijan") == 0)
        return false;
    
    throw unexpectedLanguageCode(lang);
}

function isEU(lang) {
    return ["Bulgarian", "Czech", "English", "Lithuanian", "Polish"].includes(lang);
}

function isBilingual(lang) {
    return (lang.localeCompare("Polish") != 0);
}

function evalTaxNumberPol(taxNumber, notVatPayer, lang) {
    if(notVatPayer && isEU(lang)){
        return "Nie jest podatnikiem VAT";
    }else{
        return taxNumber;
    }
}

function currencyToLocal(currency, lang) {
    if((lang.localeCompare("Azerbaijan") == 0) && (currency.localeCompare("USD") == 0))
        return "ABŞ dolları";
    else
        return currency;
}

function requiresRegistrationNumber(lang) {
    return ! ["Azerbaijan", "English", "Kazakh"].includes(lang);
}

function noRegistrationNumberPol() {
    return "Brak";
}
        
function noRegistrationNumberLocal(lang) {
    if(lang.localeCompare("Azerbaijan") == 0)
        return "Qeydiyyat nömrəsi yoxdur";
    if(lang.localeCompare("English") == 0)
        return "No Registration Number";
    if(lang.localeCompare("Kazakh") == 0)
        return "Нет регистрационного номера";
    
    throw noTranslation(lang, "No Registration Number");
}

function reverseChargeLocal(lang) {
    if(lang.localeCompare("Czech") == 0)
        return "Režim přenesené daňové povinnosti";
    if(lang.localeCompare("English") == 0)
        return "Reverse charge";
    
    return "Reverse charge";
}
