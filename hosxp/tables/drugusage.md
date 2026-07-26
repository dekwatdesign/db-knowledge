# `drugusage`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugusage | varchar(7) | NO | PRI |  |  |  |
| code | varchar(200) | YES | MUL | NULL |  |  |
| name1 | varchar(150) | YES |  | NULL |  |  |
| name2 | varchar(150) | YES |  | NULL |  |  |
| name3 | varchar(150) | YES |  | NULL |  |  |
| shortlist | varchar(250) | YES | MUL | NULL |  |  |
| idrlink | varchar(100) | YES | MUL | NULL |  |  |
| status | char(1) | YES | MUL | NULL |  |  |
| interval1 | char(1) | YES |  | NULL |  |  |
| interval2 | char(1) | YES |  | NULL |  |  |
| interval3 | char(1) | YES |  | NULL |  |  |
| interval4 | char(1) | YES |  | NULL |  |  |
| interval5 | char(1) | YES |  | NULL |  |  |
| interval6 | char(1) | YES |  | NULL |  |  |
| iperday | int(11) | YES |  | NULL |  |  |
| dosageform | varchar(250) | YES |  | NULL |  |  |
| ename1 | varchar(150) | YES |  | NULL |  |  |
| ename2 | varchar(150) | YES |  | NULL |  |  |
| ename3 | varchar(150) | YES |  | NULL |  |  |
| iperdose | double(15,3) | YES |  | NULL |  |  |
| drugusage_guid | varchar(38) | YES | MUL | NULL |  |  |
| divide_amount | int(11) | YES |  | NULL |  |  |
| common_name | varchar(250) | YES |  | NULL |  |  |
| drugusage_active | char(1) | YES |  | NULL |  |  |
| opi_acpc_id | int(11) | YES |  | NULL |  |  |
| opi_usage_code | varchar(10) | YES |  | NULL |  |  |
| opi_dose | double(15,3) | YES |  | NULL |  |  |
| opi_unit_name | varchar(25) | YES |  | NULL |  |  |
| opi_frequency_code | varchar(10) | YES |  | NULL |  |  |
| opi_usage_unit_code | varchar(10) | YES |  | NULL |  |  |
| opi_time_code | varchar(10) | YES |  | NULL |  |  |
| ipt_injection_sticker_count | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| no_disp_machine | char(1) | YES |  | NULL |  |  |
| use_opi_mode2 | char(1) | YES |  | NULL |  |  |
| display_order | int(11) | YES |  | NULL |  |  |
| doctor_use | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| code | code | no | 1 |
| ix_drugusage_guid | drugusage_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_idrlink | idrlink | no | 1 |
| ix_search1 | code | no | 1 |
| ix_search1 | name1 | no | 2 |
| ix_search1 | name2 | no | 3 |
| ix_search1 | name3 | no | 4 |
| ix_shortlist | shortlist | no | 1 |
| PRIMARY | drugusage | yes | 1 |
| status | status | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "drugusage": "0000",
    "code": ".63pz(0.6cc*3pc)",
    "name1": "รับประทานครั้งละ 0.6 ซีซี",
    "name2": "วันละ 3 ครั้ง หลังอาหาร",
    "name3": "เช้า - กลางวัน - เย็น",
    "shortlist": ".63pz(0.6cc*3pc) รับประทานครั้งละ 0.6 ซีซี",
    "idrlink": "",
    "status": "N",
    "interval1": "N",
    "interval2": "N",
    "interval3": "N",
    "interval4": "N",
    "interval5": null,
    "interval6": null,
    "iperday": null,
    "dosageform": "",
    "ename1": "รับประทานครั้งละ 0.6 ซีซี",
    "ename2": "วันละ 3 ครั้ง หลังอาหาร",
    "ename3": "เช้า - กลางวัน - เย็น",
    "iperdose": null,
    "drugusage_guid": null,
    "divide_amount": null,
    "common_name": null,
    "drugusage_active": null,
    "opi_acpc_id": null,
    "opi_usage_code": null,
    "opi_dose": null,
    "opi_unit_name": null,
    "opi_frequency_code": null,
    "opi_usage_unit_code": null,
    "opi_time_code": null,
    "ipt_injection_sticker_count": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "no_disp_machine": null,
    "use_opi_mode2": null,
    "display_order": null,
    "doctor_use": null
  },
  {
    "drugusage": "0000011",
    "code": "0    รับประทาน 2 เม็ด หลังอาหารเช้า รับประทานครั้งละ 1 เม็ด หลังอาหารเที่ยง และ 16.00น.",
    "name1": "รับประทาน 2 เม็ด หลังอาหารเช้า",
    "name2": "รับประทานครั้งละ 1 เม็ด",
    "name3": "หลังอาหารเที่ยง และ 16.00น.",
    "shortlist": "0    รับประทาน 2 เม็ด หลังอาหารเช้า รับประทานครั้งละ 1 เม็ด หลังอาหารเที่ยง และ 16.00น.",
    "idrlink": null,
    "status": "N",
    "interval1": null,
    "interval2": null,
    "interval3": null,
    "interval4": null,
    "interval5": null,
    "interval6": null,
    "iperday": null,
    "dosageform": "",
    "ename1": "รับประทาน 2 เม็ด หลังอาหารเช้า",
    "ename2": "รับประทานครั้งละ 1 เม็ด",
    "ename3": "หลังอาหารเที่ยง และ 16.00น.",
    "iperdose": null,
    "drugusage_guid": null,
    "divide_amount": null,
    "common_name": null,
    "drugusage_active": null,
    "opi_acpc_id": null,
    "opi_usage_code": null,
    "opi_dose": null,
    "opi_unit_name": null,
    "opi_frequency_code": null,
    "opi_usage_unit_code": null,
    "opi_time_code": null,
    "ipt_injection_sticker_count": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "no_disp_machine": null,
    "use_opi_mode2": null,
    "display_order": null,
    "doctor_use": null
  },
  {
    "drugusage": "0000012",
    "code": "0    รับประทานครั้งละ 1 เม็ด  วันละ 1 ครั้ง หลังอาหาร เย็น",
    "name1": "รับประทานครั้งละ 1 เม็ด",
    "name2": "วันละ 1 ครั้ง หลังอาหาร",
    "name3": "เย็น",
    "shortlist": "0    รับประทานครั้งละ 1 เม็ด  วันละ 1 ครั้ง หลังอาหาร เย็น",
    "idrlink": null,
    "status": "N",
    "interval1": null,
    "interval2": null,
    "interval3": null,
    "interval4": null,
    "interval5": null,
    "interval6": null,
    "iperday": null,
    "dosageform": "",
    "ename1": "รับประทานครั้งละ 1 เม็ด",
    "ename2": "วันละ 1 ครั้ง หลังอาหาร",
    "ename3": "เย็น",
    "iperdose": null,
    "drugusage_guid": null,
    "divide_amount": null,
    "common_name": null,
    "drugusage_active": null,
    "opi_acpc_id": null,
    "opi_usage_code": null,
    "opi_dose": null,
    "opi_unit_name": null,
    "opi_frequency_code": null,
    "opi_usage_unit_code": null,
    "opi_time_code": null,
    "ipt_injection_sticker_count": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "no_disp_machine": null,
    "use_opi_mode2": null,
    "display_order": null,
    "doctor_use": null
  },
  {
    "drugusage": "0000013",
    "code": "0    รับประทาน ครั้งละ    1     เม็ด วันละ 1 ครั้ง หลังอาหารเช้า",
    "name1": "รับประทาน ครั้งละ    1     เม็ด",
    "name2": "วันละ 1 ครั้ง",
    "name3": "หลังอาหารเช้า",
    "shortlist": "0    รับประทาน ครั้งละ    1     เม็ด วันละ 1 ครั้ง หลังอาหารเช้า",
    "idrlink": null,
    "status": "N",
    "interval1": null,
    "interval2": null,
    "interval3": null,
    "interval4": null,
    "interval5": null,
    "interval6": null,
    "iperday": null,
    "dosageform": "",
    "ename1": "รับประทาน ครั้งละ    1     เม็ด",
    "ename2": "วันละ 1 ครั้ง",
    "ename3": "หลังอาหารเช้า",
    "iperdose": null,
    "drugusage_guid": null,
    "divide_amount": null,
    "common_name": null,
    "drugusage_active": null,
    "opi_acpc_id": null,
    "opi_usage_code": null,
    "opi_dose": null,
    "opi_unit_name": null,
    "opi_frequency_code": null,
    "opi_usage_unit_code": null,
    "opi_time_code": null,
    "ipt_injection_sticker_count": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "no_disp_machine": null,
    "use_opi_mode2": null,
    "display_order": null,
    "doctor_use": null
  },
  {
    "drugusage": "0000014",
    "code": "0 500   50 MG.(2) IN NSS 100 CC.",
    "name1": "50 MG.(2) IN NSS 100 CC.",
    "name2": "",
    "name3": "",
    "shortlist": "0 500   50 MG.(2) IN NSS 100 CC.",
    "idrlink": null,
    "status": "N",
    "interval1": null,
    "interval2": null,
    "interval3": null,
    "interval4": null,
    "interval5": null,
    "interval6": null,
    "iperday": null,
    "dosageform": "",
    "ename1": "50 MG.(2) IN NSS 100 CC.",
    "ename2": "",
    "ename3": "",
    "iperdose": null,
    "drugusage_guid": null,
    "divide_amount": null,
    "common_name": null,
    "drugusage_active": null,
    "opi_acpc_id": null,
    "opi_usage_code": null,
    "opi_dose": null,
    "opi_unit_name": null,
    "opi_frequency_code": null,
    "opi_usage_unit_code": null,
    "opi_time_code": null,
    "ipt_injection_sticker_count": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "no_disp_machine": null,
    "use_opi_mode2": null,
    "display_order": null,
    "doctor_use": null
  },
  {
    "drugusage": "0000015",
    "code": "0    รับประทานยาวันละ 1 ครั้ง 0.25 มิลลิกรัม ก่อนนอน",
    "name1": "รับประทานยาวันละ 1 ครั้ง",
    "name2": "0.25 มิลลิกรัม ก่อนนอน",
    "name3": "",
    "shortlist": "0    รับประทานยาวันละ 1 ครั้ง 0.25 มิลลิกรัม ก่อนนอน",
    "idrlink": null,
    "status": "N",
    "interval1": null,
    "interval2": null,
    "interval3": null,
    "interval4": null,
    "interval5": null,
    "interval6": null,
    "iperday": null,
    "dosageform": "",
    "ename1": "รับประทานยาวันละ 1 ครั้ง",
    "ename2": "0.25 มิลลิกรัม ก่อนนอน",
    "ename3": "",
    "iperdose": null,
    "drugusage_guid": null,
    "divide_amount": null,
    "common_name": null,
    "drugusage_active": null,
    "opi_acpc_id": null,
    "opi_usage_code": null,
    "opi_dose": null,
    "opi_unit_name": null,
    "opi_frequency_code": null,
    "opi_usage_unit_code": null,
    "opi_time_code": null,
    "ipt_injection_sticker_count": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "no_disp_machine": null,
    "use_opi_mode2": null,
    "display_order": null,
    "doctor_use": null
  },
  {
    "drugusage": "0000016",
    "code": "0    1/2 เม็ด หลังอาหาร เช้า เที่ยง",
    "name1": "1/2 เม็ด หลังอาหาร เช้า เที่ยง",
    "name2": "",
    "name3": "",
    "shortlist": "0    1/2 เม็ด หลังอาหาร เช้า เที่ยง",
    "idrlink": null,
    "status": "N",
    "interval1": null,
    "interval2": null,
    "interval3": null,
    "interval4": null,
    "interval5": null,
    "interval6": null,
    "iperday": null,
    "dosageform": "",
    "ename1": "1/2 เม็ด หลังอาหาร เช้า เที่ยง",
    "ename2": "",
    "ename3": "",
    "iperdose": null,
    "drugusage_guid": null,
    "divide_amount": null,
    "common_name": null,
    "drugusage_active": null,
    "opi_acpc_id": null,
    "opi_usage_code": null,
    "opi_dose": null,
    "opi_unit_name": null,
    "opi_frequency_code": null,
    "opi_usage_unit_code": null,
    "opi_time_code": null,
    "ipt_injection_sticker_count": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "no_disp_machine": null,
    "use_opi_mode2": null,
    "display_order": null,
    "doctor_use": null
  },
  {
    "drugusage": "0000017",
    "code": "0    1 เม็ด หลังอาหารเย็น",
    "name1": "1 เม็ด หลังอาหารเย็น",
    "name2": "",
    "name3": "",
    "shortlist": "0    1 เม็ด หลังอาหารเย็น",
    "idrlink": null,
    "status": "N",
    "interval1": null,
    "interval2": null,
    "interval3": null,
    "interval4": null,
    "interval5": null,
    "interval6": null,
    "iperday": null,
    "dosageform": "",
    "ename1": "1 เม็ด หลังอาหารเย็น",
    "ename2": "",
    "ename3": "",
    "iperdose": null,
    "drugusage_guid": null,
    "divide_amount": null,
    "common_name": null,
    "drugusage_active": null,
    "opi_acpc_id": null,
    "opi_usage_code": null,
    "opi_dose": null,
    "opi_unit_name": null,
    "opi_frequency_code": null,
    "opi_usage_unit_code": null,
    "opi_time_code": null,
    "ipt_injection_sticker_count": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "no_disp_machine": null,
    "use_opi_mode2": null,
    "display_order": null,
    "doctor_use": null
  }
]
```
