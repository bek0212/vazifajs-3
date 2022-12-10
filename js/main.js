 function hafta(){
    var son = prompt('1dan 7gacha bolgan raqam kiriting: ')
    switch (Number(son)){
        case 1: alert('dushanba');
        break
        case 2: alert('Seshanba');
        break
        case 3: alert('chorshanba')
        break
        case 4:alert('payshanba')
        break
        case 5: alert('juma')
        break
        case 6: alert('shanba')
        break
        case 7: alert('yakshanba')
        break
    }
 }


 function oyraqamlar(){
    var kiritish = prompt('1dan 12gacha bolgan sonni kiriting: ')
    switch (Number(kiritish)){
        case 1: alert('Qish fasli Yanvar oyi')
        break
        case 2: alert('Qish fasli Fevral oyi')
        break
        case 3: alert('Bahor fasli Mart oyi')
        break
        case 4: alert('Bahor fasli Aprel oyi')
        break
        case 5: alert('bahor fasli May oyi')
        break
        case 6: alert('Yoz fasli Iyun oyi')
        break
        case 7: alert('Yoz fasli Iyul oyi')
        break
        case 8: alert('yoz fasli august oyi')
        break
        case 9: alert('kuz fasli sentyabr oyi')
        break
        case 10: alert('kuz fasli oktyabr oyi')
        break
        case 11: alert('kuz fasli noyabr oyi')
        break
        case 12: alert('qish fasli dekabr oyi')
        break
    }
}

function operator(){
    var raqamcha = prompt('Nomerzi bosh raqamini kiriting: ')
    if (raqamcha==90){
        alert('Belline')
    }
    if (raqamcha==91){
        alert('Belline')
    }
    if (raqamcha==94){
        alert('Usell')
    }
    if (raqamcha==95){
        alert('Uzmobile')
    }
    if (raqamcha==99){
        alert('Uzmobile')
    }
    if (raqamcha==88){
        alert('Humans')
    }
}