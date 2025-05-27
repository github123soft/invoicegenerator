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
function internalProgramError(what) {
    return "Internal program error: " + what;
}

function downloadBlob(blob, name = 'file.txt') {
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = name;
  
    document.body.appendChild(link);
  
    link.dispatchEvent(
        new MouseEvent('click', { 
            bubbles: true, 
            cancelable: true, 
            view: window 
        })
    );
    
    document.body.removeChild(link);
}

function navigateBlob(blob) {
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.target = "_blank";
  
    document.body.appendChild(link);
  
    link.dispatchEvent(
        new MouseEvent('click', { 
            bubbles: true, 
            cancelable: true, 
            view: window 
        })
    );
  
    document.body.removeChild(link);
}

function checkInput(ok, input, what) {
    if(!ok){
        input.focus();
        throw what;
    }
}

function parseDate(date) {
    let result = {
        yyyy: date.getFullYear(),
        mm: date.getMonth() + 1,
        dd: date.getDate()
    };
    if(result.mm < 10)
        result.mm = '0' + result.mm;
    if(result.dd < 10)
        result.dd = '0' + result.dd;
    return result;
}

function normalizeDate(date) {
    let x = new Date(date);
    return new Date(x.getFullYear(), x.getMonth(), x.getDate(), 1, 0, 0, 0);
}

function evalMinTermOfPayment(invoiceDate) {
    let minTermOfPayment = new Date(invoiceDate);
    if (minTermOfPayment.getMonth() == 11) {
        minTermOfPayment = new Date(minTermOfPayment.getFullYear() + 1, 0, 10);
    } else {
        minTermOfPayment = new Date(minTermOfPayment.getFullYear(), minTermOfPayment.getMonth() + 1, 10);
    }
    return minTermOfPayment;
}

function setDateInputValue(inputId, date) {
    let input = document.getElementById(inputId);
    if(date){
        let parsed = parseDate(new Date(date));
        input.value = parsed.yyyy + '-' + parsed.mm + '-' + parsed.dd;
    }else{
        input.value = '';
    }
}

function b64EncodeUnicode(str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
    }));
}

function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

function formatAmount(amount, dot) {
    let num = (Math.round(amount * 100) / 100).toFixed(2);
    if(dot.localeCompare(".") == 0)
        return num;
    return num.replace('.', dot);
}

function amountToPolish(amount) {
    return formatAmount(amount, ',');
}

function loadDataFromLocalStorage() {
    let dataString = localStorage.getItem("last-valid-data");
    if(!dataString)
        throw "There is no validated data to load from the browser's local storage.";
    let result = JSON.parse(dataString);
    if(undefined === result.hasRegistrationNumber)
        result.hasRegistrationNumber = true;
    return result;
}

function saveDataToLocalStorage(data) {
    let dataString = JSON.stringify(data);
    localStorage.setItem("last-valid-data", dataString);
}
