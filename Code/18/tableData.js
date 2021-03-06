/** 
 * @Author: YISHI 
 * @Date: 2019-03-09 14:12:31 
 * @Desc: 计算体率的条件表
 */

 

const tableData = {
    // 蛋白质表
    proteincontentTable: {
        '1': {
            '16': '偏低',
            '19': '标准',
            '100': '偏高'
        },
        '0': {
            '14': '偏低',
            '17': '标准',
            '100': '偏高'
        }
    },
    // 骨重表
    boneWeightTable: {
        '1': {
            '60': {
                '2.4': '偏低',
                '2.7': '标准',
                '100': '偏高'
            },
            '75': {
                '2.8': '偏低',
                '3.1': '标准',
                '100': '偏高'
            },
            '100': {
                '3.1': '偏低',
                '3.4': '标准',
                '100': '偏高'
            }
        },
        '0': {
            '45': {
                '1.7': '偏低',
                '2.0': '标准',
                '100': '偏高'
            },
            '60': {
                '2.1': '偏低',
                '2.4': '标准',
                '100': '偏高'
            },
            '100': {
                '2.4': '偏低',
                '2.7': '标准',
                '100': '偏高'
            }
        }
    },
    // 内脏脂肪表
    vaimTable: {
        '9': '标准',
        '14': '偏高',
        '100': '高'
    },
    // 水份表
    watercontentTable: {
        '0': {
            '45': '偏低',
            '60': '标准',
            '100': '偏高'
        },
        '1': {
            '55': '偏低',
            '65': '标准',
            '100': '偏高'
        }
    },
    // 肌肉率表
    meatrateBaseTable: {
        '0': {
            '30': '偏低',
            '50': '标准',
            '100': '偏高'
        },
        '1': {
            '40': '偏低',
            '60': '标准',
            '100': '偏高'
        }
    },
    // 基础代谢率
    baseTable: function(weight) {
        var table = {};
        var ageArray = [2, 9, 17, 29, 100];
        var kilocalorieArray = [
            [(61.0*weight-51), (22.5*weight+499), (12.2*weight+746), (14.7*weight+496), (8.7*weight+820)], 
            [(61.9*weight-54), (22.7*weight+495), (17.5*weight+651), (15.3*weight+679), (11.6*weight+879)]
        ];
        
        return function() {
            for (var i = 0; i < 2; i++) {
                table[i] = {};
                for (var j = 0; j < ageArray.length; j++) {
                    table[i][ageArray[j]] = kilocalorieArray[i];
                }
            }
            return table;
        }();
    },
    // 体脂率表
    bodyTable: {
        '1': {
            '30': {
                '10': '偏低',
                '21': '标准',
                '26': '偏高',
                '100': '高'
            },
            '100': {
                '11': '偏低',
                '22': '标准',
                '27': '偏高',
                '100': '高'
            }
        },
        '0': {
            '30': {
                '16': '偏低',
                '24': '标准',
                '30': '偏高',
                '100': '高'
            },
            '100': {
                '19': '偏低',
                '27': '标准',
                '30': '偏高',
                '100': '高',
            }
        }
    }
};