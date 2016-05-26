/*
 * This file has been compiled from: /modules/system/lang/hu/client.php
 */
if ($.oc === undefined) $.oc = {}
if ($.oc.langMessages === undefined) $.oc.langMessages = {}
$.oc.langMessages['hu'] = $.extend(
    $.oc.langMessages['hu'] || {},
    {"markdowneditor":{"formatting":"Forr\u00e1sk\u00f3d","quote":"Id\u00e9zet","code":"K\u00f3d","header1":"C\u00edmsor 1","header2":"C\u00edmsor 2","header3":"C\u00edmsor 3","header4":"C\u00edmsor 4","header5":"C\u00edmsor 5","header6":"C\u00edmsor 6","bold":"F\u00e9lk\u00f6v\u00e9r","italic":"D\u00f6lt","unorderedlist":"Rendezett lista","orderedlist":"Sz\u00e1mozott lista","video":"Vide\u00f3","image":"K\u00e9p","link":"Hivatkoz\u00e1s","horizontalrule":"Vonal besz\u00far\u00e1sa","fullscreen":"Teljes k\u00e9perny\u0151","preview":"El\u0151n\u00e9zet"},"mediamanager":{"insert_link":"Hivatkoz\u00e1s besz\u00far\u00e1sa","insert_image":"K\u00e9p besz\u00far\u00e1sa","insert_video":"Vide\u00f3 besz\u00far\u00e1sa","insert_audio":"Audi\u00f3 besz\u00far\u00e1sa","invalid_file_empty_insert":"Hivatkoz\u00e1s k\u00e9sz\u00edt\u00e9s\u00e9hez jel\u00f6lj\u00f6n ki egy sz\u00f6vegr\u00e9szt.","invalid_file_single_insert":"K\u00e9rj\u00fck jel\u00f6lj\u00f6n ki egy f\u00e1jlt.","invalid_image_empty_insert":"V\u00e1lasszon ki legal\u00e1bb egy k\u00e9pet a besz\u00far\u00e1shoz.","invalid_video_empty_insert":"V\u00e1lasszon ki legal\u00e1bb egy vide\u00f3t a besz\u00far\u00e1shoz.","invalid_audio_empty_insert":"V\u00e1lasszon ki legal\u00e1bb egy audi\u00f3t a besz\u00far\u00e1shoz."},"alert":{"confirm_button_text":"OK","cancel_button_text":"M\u00e9gsem"},"datepicker":{"previousMonth":"El\u0151z\u0151 h\u00f3nap","nextMonth":"K\u00f6vetkez\u0151 h\u00f3nap","months":["janu\u00e1r","febru\u00e1r","m\u00e1rcius","\u00e1prilis","m\u00e1jus","j\u00fanius","j\u00falius","augusztus","szeptember","okt\u00f3ber","november","december"],"weekdays":["vas\u00e1rnap","h\u00e9tf\u0151","kedd","szerda","cs\u00fct\u00f6rt\u00f6k","p\u00e9ntek","szombat"],"weekdaysShort":["va","h\u00e9","ke","sze","cs","p\u00e9","szo"]},"filter":{"group":{"all":"\u00f6sszes"},"dates":{"all":"\u00f6sszes","filter_button_text":"Sz\u0171r\u00e9s","reset_button_text":"Alaphelyzet","date_placeholder":"D\u00e1tum","after_placeholder":"Ut\u00e1na","before_placeholder":"El\u0151tte"}},"eventlog":{"show_stacktrace":"Show the stacktrace","hide_stacktrace":"Hide the stacktrace","tabs":{"formatted":"Formatted","raw":"Raw"},"editor":{"title":"V\u00e1lassza ki melyik szerkeszt\u0151t szeretn\u00e9 haszn\u00e1lni","description":"Your environnement must be configured to listen to one of these URL schemes.","openWith":"Megnyit\u00e1s mint","remember_choice":"Megnyit\u00e1s \u00e9s munkamenet megjegyz\u00e9se","open":"Megnyit\u00e1s","cancel":"M\u00e9gsem"}}}
);

//! moment.js locale configuration
//! locale : hungarian (hu)
//! author : Adam Brunner : https://github.com/adambrunner

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
    function translate(number, withoutSuffix, key, isFuture) {
        var num = number,
            suffix;
        switch (key) {
        case 's':
            return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
        case 'm':
            return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'mm':
            return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'h':
            return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'hh':
            return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'd':
            return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'dd':
            return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'M':
            return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'MM':
            return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'y':
            return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
        case 'yy':
            return num + (isFuture || withoutSuffix ? ' év' : ' éve');
        }
        return '';
    }
    function week(isFuture) {
        return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
    }

    var hu = moment.defineLocale('hu', {
        months : 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
        monthsShort : 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
        weekdays : 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
        weekdaysShort : 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
        weekdaysMin : 'v_h_k_sze_cs_p_szo'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'YYYY.MM.DD.',
            LL : 'YYYY. MMMM D.',
            LLL : 'YYYY. MMMM D. H:mm',
            LLLL : 'YYYY. MMMM D., dddd H:mm'
        },
        meridiemParse: /de|du/i,
        isPM: function (input) {
            return input.charAt(1).toLowerCase() === 'u';
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 12) {
                return isLower === true ? 'de' : 'DE';
            } else {
                return isLower === true ? 'du' : 'DU';
            }
        },
        calendar : {
            sameDay : '[ma] LT[-kor]',
            nextDay : '[holnap] LT[-kor]',
            nextWeek : function () {
                return week.call(this, true);
            },
            lastDay : '[tegnap] LT[-kor]',
            lastWeek : function () {
                return week.call(this, false);
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s múlva',
            past : '%s',
            s : translate,
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return hu;

}));
