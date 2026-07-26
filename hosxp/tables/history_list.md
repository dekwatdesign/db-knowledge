# `history_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| history_list_name | varchar(250) | NO | PRI |  |  |  |
| history_section | varchar(10) | NO | PRI |  |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_search_key | history_list_name | no | 1 |
| ix_search_key | history_section | no | 2 |
| ix_search_key | staff | no | 3 |
| PRIMARY | history_list_name | yes | 1 |
| PRIMARY | history_section | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "history_list_name": "",
    "history_section": "FH",
    "hos_guid": null,
    "hos_guid_ext": null,
    "staff": ""
  },
  {
    "history_list_name": "",
    "history_section": "PMH",
    "hos_guid": null,
    "hos_guid_ext": null,
    "staff": ""
  },
  {
    "history_list_name": "1  wk ตัวร้อน ไอมีเสมหะ เจ็บคอ   ปวดศีรษะ",
    "history_section": "HPI",
    "hos_guid": null,
    "hos_guid_ext": null,
    "staff": ""
  },
  {
    "history_list_name": "1 wk มีน้ำมูก  ปวดศีษะ  คลื่นใส้",
    "history_section": "HPI",
    "hos_guid": null,
    "hos_guid_ext": null,
    "staff": ""
  },
  {
    "history_list_name": "14.00 ซ พบว่ามีไข้",
    "history_section": "HPI",
    "hos_guid": null,
    "hos_guid_ext": null,
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "history_list_name": "1ปีพบก้อนที่เต้านม   ขนาดเส้นผ่าศูฯย์กลาง4  ซม.",
    "history_section": "HPI",
    "hos_guid": null,
    "hos_guid_ext": null,
    "staff": ""
  },
  {
    "history_list_name": "2  วันก่อนมา   ตัวร้อน ซึม  ถ่ายเป็นน้ำ  2  ครั้ง",
    "history_section": "HPI",
    "hos_guid": null,
    "hos_guid_ext": null,
    "staff": ""
  },
  {
    "history_list_name": "2 ปีก่อน แม่สังเกตว่า ผู้ป่วยชอบนั่งเหม่อ มองคนอื่นเวลาออกไปข้างนอก เวลากินข้าว (ไม่มีสมาธิจดจ่อกับการกินข้าว ไม่ตักข้าวกิน ไม่มองจานข้าวตัวเอง หันไปมองโต๊ะข้างๆ มองแบบเหม่อ) เล่นเสียงดัง หัวเราะเสียงดัง น้าๆ แนะนำให้พามาตรวจที่ยุวะฯ เพราะเห็นเด็กข้า",
    "history_section": "HPI",
    "hos_guid": null,
    "hos_guid_ext": null,
    "staff": ""
  }
]
```
