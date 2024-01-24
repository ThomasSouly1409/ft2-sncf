'use client'
import styles from '../ui/header/styles.module.scss'
import treemap from '../../img/GraphOD.png'
import { ResponsiveTreeMap } from '@nivo/treemap'
import { useEffect, useState } from 'react';
import { red } from '@mui/material/colors';
import _, { filter } from 'lodash'
import Image from 'next/image'
import Fav from '../../img/ajtFav.png'
import accroche from '../../img/Acroche 1.png'
import flecheGauche from '../../img/flecheGauche.png'
import flecheDroite from '../../img/flecheDroite.png'
import Graph from '../../img/Graph1.png'

const dataNivo = {
    "name": "nivo",
    "color": "hsl(267, 70%, 50%)",
    "children": [
        {
            "name": "viz",
            "color": "hsl(46, 70%, 50%)",
            "children": [
                {
                    "name": "stack",
                    "color": "hsl(11, 70%, 50%)",
                    "children": [
                        {
                            "name": "cchart",
                            "color": "hsl(203, 70%, 50%)",
                            "loc": 150515
                        },
                        {
                            "name": "xAxis",
                            "color": "hsl(124, 70%, 50%)",
                            "loc": 131310
                        },
                        {
                            "name": "yAxis",
                            "color": "hsl(140, 70%, 50%)",
                            "loc": 128933
                        },
                        {
                            "name": "layers",
                            "color": "hsl(33, 70%, 50%)",
                            "loc": 10439
                        }
                    ]
                },
                {
                    "name": "ppie",
                    "color": "hsl(151, 70%, 50%)",
                    "children": [
                        {
                            "name": "chart",
                            "color": "hsl(250, 70%, 50%)",
                            "children": [
                                {
                                    "name": "pie",
                                    "color": "hsl(34, 70%, 50%)",
                                    "children": [
                                        {
                                            "name": "outline",
                                            "color": "hsl(225, 70%, 50%)",
                                            "loc": 30752
                                        },
                                        {
                                            "name": "slices",
                                            "color": "hsl(180, 70%, 50%)",
                                            "loc": 34428
                                        },
                                        {
                                            "name": "bbox",
                                            "color": "hsl(66, 70%, 50%)",
                                            "loc": 154629
                                        }
                                    ]
                                },
                                {
                                    "name": "donut",
                                    "color": "hsl(195, 70%, 50%)",
                                    "loc": 35396
                                },
                                {
                                    "name": "gauge",
                                    "color": "hsl(339, 70%, 50%)",
                                    "loc": 135014
                                }
                            ]
                        },
                        {
                            "name": "legends",
                            "color": "hsl(8, 70%, 50%)",
                            "loc": 156960
                        }
                    ]
                }
            ]
        },
        {
            "name": "colors",
            "color": "hsl(48, 70%, 50%)",
            "children": [
                {
                    "name": "rgb",
                    "color": "hsl(280, 70%, 50%)",
                    "loc": 82360
                },
                {
                    "name": "hsl",
                    "color": "hsl(284, 70%, 50%)",
                    "loc": 106377
                }
            ]
        },
        {
            "name": "utils",
            "color": "hsl(240, 70%, 50%)",
            "children": [
                {
                    "name": "randomize",
                    "color": "hsl(167, 70%, 50%)",
                    "loc": 63265
                },
                {
                    "name": "resetClock",
                    "color": "hsl(88, 70%, 50%)",
                    "loc": 81492
                },
                {
                    "name": "noop",
                    "color": "hsl(121, 70%, 50%)",
                    "loc": 105070
                },
                {
                    "name": "tick",
                    "color": "hsl(37, 70%, 50%)",
                    "loc": 71835
                },
                {
                    "name": "forceGC",
                    "color": "hsl(6, 70%, 50%)",
                    "loc": 108909
                },
                {
                    "name": "stackTrace",
                    "color": "hsl(59, 70%, 50%)",
                    "loc": 152256
                },
                {
                    "name": "dbg",
                    "color": "hsl(88, 70%, 50%)",
                    "loc": 155087
                }
            ]
        },
        {
            "name": "generators",
            "color": "hsl(214, 70%, 50%)",
            "children": [
                {
                    "name": "address",
                    "color": "hsl(241, 70%, 50%)",
                    "loc": 27533
                },
                {
                    "name": "city",
                    "color": "hsl(216, 70%, 50%)",
                    "loc": 129717
                },
                {
                    "name": "animal",
                    "color": "hsl(59, 70%, 50%)",
                    "loc": 169840
                },
                {
                    "name": "movie",
                    "color": "hsl(42, 70%, 50%)",
                    "loc": 8862
                },
                {
                    "name": "user",
                    "color": "hsl(282, 70%, 50%)",
                    "loc": 190825
                }
            ]
        },
        {
            "name": "set",
            "color": "hsl(232, 70%, 50%)",
            "children": [
                {
                    "name": "clone",
                    "color": "hsl(7, 70%, 50%)",
                    "loc": 152203
                },
                {
                    "name": "intersect",
                    "color": "hsl(44, 70%, 50%)",
                    "loc": 180701
                },
                {
                    "name": "merge",
                    "color": "hsl(177, 70%, 50%)",
                    "loc": 44098
                },
                {
                    "name": "reverse",
                    "color": "hsl(77, 70%, 50%)",
                    "loc": 94034
                },
                {
                    "name": "toArray",
                    "color": "hsl(331, 70%, 50%)",
                    "loc": 167438
                },
                {
                    "name": "toObject",
                    "color": "hsl(144, 70%, 50%)",
                    "loc": 12279
                },
                {
                    "name": "fromCSV",
                    "color": "hsl(59, 70%, 50%)",
                    "loc": 59329
                },
                {
                    "name": "slice",
                    "color": "hsl(33, 70%, 50%)",
                    "loc": 87916
                },
                {
                    "name": "append",
                    "color": "hsl(128, 70%, 50%)",
                    "loc": 64308
                },
                {
                    "name": "prepend",
                    "color": "hsl(160, 70%, 50%)",
                    "loc": 102367
                },
                {
                    "name": "shuffle",
                    "color": "hsl(175, 70%, 50%)",
                    "loc": 112803
                },
                {
                    "name": "pick",
                    "color": "hsl(325, 70%, 50%)",
                    "loc": 17389
                },
                {
                    "name": "plouc",
                    "color": "hsl(19, 70%, 50%)",
                    "loc": 119616
                }
            ]
        },
        {
            "name": "text",
            "color": "hsl(207, 70%, 50%)",
            "children": [
                {
                    "name": "trim",
                    "color": "hsl(354, 70%, 50%)",
                    "loc": 13167
                },
                {
                    "name": "slugify",
                    "color": "hsl(162, 70%, 50%)",
                    "loc": 113951
                },
                {
                    "name": "snakeCase",
                    "color": "hsl(322, 70%, 50%)",
                    "loc": 168804
                },
                {
                    "name": "camelCase",
                    "color": "hsl(333, 70%, 50%)",
                    "loc": 160818
                },
                {
                    "name": "repeat",
                    "color": "hsl(109, 70%, 50%)",
                    "loc": 18563
                },
                {
                    "name": "padLeft",
                    "color": "hsl(206, 70%, 50%)",
                    "loc": 46508
                },
                {
                    "name": "padRight",
                    "color": "hsl(9, 70%, 50%)",
                    "loc": 72234
                },
                {
                    "name": "sanitize",
                    "color": "hsl(137, 70%, 50%)",
                    "loc": 189870
                },
                {
                    "name": "ploucify",
                    "color": "hsl(343, 70%, 50%)",
                    "loc": 102755
                }
            ]
        },
        {
            "name": "misc",
            "color": "hsl(35, 70%, 50%)",
            "children": [
                {
                    "name": "greetings",
                    "color": "hsl(251, 70%, 50%)",
                    "children": [
                        {
                            "name": "hey",
                            "color": "hsl(101, 70%, 50%)",
                            "loc": 173316
                        },
                        {
                            "name": "HOWDY",
                            "color": "hsl(149, 70%, 50%)",
                            "loc": 8482
                        },
                        {
                            "name": "aloha",
                            "color": "hsl(233, 70%, 50%)",
                            "loc": 95910
                        },
                        {
                            "name": "AHOY",
                            "color": "hsl(129, 70%, 50%)",
                            "loc": 123223
                        }
                    ]
                },
                {
                    "name": "other",
                    "color": "hsl(137, 70%, 50%)",
                    "loc": 183084
                },
                {
                    "name": "path",
                    "color": "hsl(81, 70%, 50%)",
                    "children": [
                        {
                            "name": "pathA",
                            "color": "hsl(139, 70%, 50%)",
                            "loc": 36923
                        },
                        {
                            "name": "pathB",
                            "color": "hsl(58, 70%, 50%)",
                            "children": [
                                {
                                    "name": "pathB1",
                                    "color": "hsl(3, 70%, 50%)",
                                    "loc": 87085
                                },
                                {
                                    "name": "pathB2",
                                    "color": "hsl(93, 70%, 50%)",
                                    "loc": 89778
                                },
                                {
                                    "name": "pathB3",
                                    "color": "hsl(305, 70%, 50%)",
                                    "loc": 112679
                                },
                                {
                                    "name": "pathB4",
                                    "color": "hsl(318, 70%, 50%)",
                                    "loc": 2599
                                }
                            ]
                        },
                        {
                            "name": "pathC",
                            "color": "hsl(174, 70%, 50%)",
                            "children": [
                                {
                                    "name": "pathC1",
                                    "color": "hsl(213, 70%, 50%)",
                                    "loc": 7691
                                },
                                {
                                    "name": "pathC2",
                                    "color": "hsl(216, 70%, 50%)",
                                    "loc": 85059
                                },
                                {
                                    "name": "pathC3",
                                    "color": "hsl(250, 70%, 50%)",
                                    "loc": 179813
                                },
                                {
                                    "name": "pathC4",
                                    "color": "hsl(228, 70%, 50%)",
                                    "loc": 165010
                                },
                                {
                                    "name": "pathC5",
                                    "color": "hsl(270, 70%, 50%)",
                                    "loc": 116099
                                },
                                {
                                    "name": "pathC6",
                                    "color": "hsl(146, 70%, 50%)",
                                    "loc": 69591
                                },
                                {
                                    "name": "pathC7",
                                    "color": "hsl(161, 70%, 50%)",
                                    "loc": 158507
                                },
                                {
                                    "name": "pathC8",
                                    "color": "hsl(154, 70%, 50%)",
                                    "loc": 4914
                                },
                                {
                                    "name": "pathC9",
                                    "color": "hsl(78, 70%, 50%)",
                                    "loc": 138126
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

const months = ["Jan", "Fev", "Mars", "Avr", "Mai", "Juin", "Juil", "Aout", "Sept", "Oct", "Nov", "Dec"];
const Calendrier = ({ data, searchParams }) => {


    const Montant_compensableAcceptable = 100000;
    const Montant_compensableTolerable = 500000;
    const Montant_compensableInquietant = 1500000;
    const currentRegion = searchParams.axe ?? "France";

    const dataMouth = data.filter((e) => {
        if (currentRegion !== 'France') {
            return !!e && e.Axe === currentRegion
        } else {
            return e
        }
    })

    const groupedData = dataMouth.reduce((acc, item) => {
        if (!acc[item.Mois_circulation]) {
            acc[item.Mois_circulation] = 0;
        }
        acc[item.Mois_circulation] += !item.Montant_compensable ? 0 : Number(item.Montant_compensable.replace(",", ".").replace(' €', '').replace(' ', ''));
        return acc;
    }, {
        //1: 0,
        //2: 0,
        //3: 0,
        //4: 0,
        //5: 0,
        //6: 0,
        //7: 0,
        //8: 0,
        //9: 0,
        //10: 0,
        //11: 0,
        //12: 0
    })
    console.log("groupedData", groupedData);

    return (
        <div>
            <div id='parMois'>
                <div id='hautCalendrier'>
                    <div className='Accroche'>
                        <Image src={accroche} />
                    </div>
                    <div className='fleche'>
                        <Image src={flecheGauche} />
                    </div>
                    <div>
                        <span id='date'>2023</span>
                    </div>
                    <div className='fleche'>
                        <Image src={flecheDroite} />
                    </div>
                    <div className='Accroche'>
                        <Image src={accroche} />
                    </div>
                </div>
                <div className='calendrier'>

                    {months.map((month, index) => {
                        const value = groupedData[index + 1] ?? 0;
                        return <div className={`caseMois ${(value <= 0) ? 'grey' : (value < Montant_compensableAcceptable) ? 'green' : value < Montant_compensableTolerable ? 'yellow' : value < Montant_compensableInquietant ? 'red' : 'darkRed'}`}>
                            <div className='mois'>{month}</div>
                            <div className='dataMois'>{!!value && value.toFixed(0)}</div>
                        </div>
                    })}
                </div>
            </div>
            <div className='TreeMap-wrapper'>
                <Image id='imgTreeMap' src={Graph} />
            </div>
        </div>
    )
}
export default Calendrier;