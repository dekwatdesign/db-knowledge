# `oapp_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_template_id | int(11) | NO | PRI | 0 |  |  |
| oapp_template_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| template_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_oapp_template_name | oapp_template_name | yes | 1 |
| PRIMARY | oapp_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "oapp_template_id": 22339,
    "oapp_template_name": "ผู้ป่วยไม่ได้รับการติดต่อ",
    "hos_guid": null,
    "template_note": "หากไม่ได้รับการติดต่อกลับภายในวันนัด  ให้โทรบอร์ 089-7877304"
  },
  {
    "oapp_template_id": 22375,
    "oapp_template_name": "ยาจ่ายทุกตัว Line OA",
    "hos_guid": null,
    "template_note": "จ่ายยาทุกตัว 30 วันค่ะ  แพทย์มีคำสั่งส่งยาทางป.ณ.ได้ 24/07/69 ที่อยู่ Line OA"
  },
  {
    "oapp_template_id": 22346,
    "oapp_template_name": "ยาไปรษณีย์จาก Form เก่า",
    "hos_guid": null,
    "template_note": "จ่ายยา MPH 45 วัน และจ่ายยาตัวอื่น 35 วัน (รอบพบแพทย์ได้ยาหมดไม่เท่ากัน)  มีคำสั่งให้รับยาทางไปรษณีย์วันที่ 29/7/2568 line OA register"
  },
  {
    "oapp_template_id": 22374,
    "oapp_template_name": "จ่ายเฉพาะ ritalin",
    "hos_guid": null,
    "template_note": "จ่ายเฉพาะ Ritalin 70 วัน ค่ะ  แพทย์มีคำสั่งให้รับยาทางไปรษณีย์วันที่  22/7/69 ที่อยู่ใน line OA"
  },
  {
    "oapp_template_id": 22370,
    "oapp_template_name": "Google form MPH",
    "hos_guid": null,
    "template_note": "จ่ายเฉพาะยา MPH 30 วัน ค่ะ แพทย์มีคำสั่งให้รับยาทางไปรษณีย์วันที่ 11/5/69 ที่อยู่ใน google form"
  },
  {
    "oapp_template_id": 22361,
    "oapp_template_name": "คนไข้เก่า add line OA ไม่ได้",
    "hos_guid": null,
    "template_note": "จ่ายยา rispel 60 วัน+  haloperiaol 85 วัน  แพทย์มีคำสั่งให้รับยาทางไปรษณีย์วันที่ 25/02/2569 **ไม่ได้ add line OA **ที่อยู่ OPD Scan"
  },
  {
    "oapp_template_id": 22368,
    "oapp_template_name": "TELE",
    "hos_guid": null,
    "template_note": "คนไข้ TELE จ่ายยาทุกตัว 65 วัน   มีคำสั่งส่งยาทางป.ณ.ได้ 19/05/69 ที่อยู่ Line TELE"
  },
  {
    "oapp_template_id": 22362,
    "oapp_template_name": "เคสแทรก จากรายงาน",
    "hos_guid": null,
    "template_note": "ผู้ป่วยขอรับยทางไปรษณีย์ ทั้งนี้ได้รายงานแพทย์อนุญาตให้รับยาทางไปรษณีย์ได้เมื่อวันที่ เรียนพิจารณาจ่ายยาจำนวน วัน"
  }
]
```
