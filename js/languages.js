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
    
    throw "Internal program error: unexpected language code.";
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
    
    throw "Internal program error: unexpected language code.";
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
    
    throw "Internal program error: unexpected language code.";
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
    
    throw "Internal program error: unexpected language code.";
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
    
    throw "Internal program error: unexpected language code.";
}

function isEU(lang) {
    return (
        (lang.localeCompare("Bulgarian") == 0)
        || (lang.localeCompare("Czech") == 0)
        || (lang.localeCompare("Lithuanian") == 0)
        || (lang.localeCompare("Polish") == 0)
    );
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
