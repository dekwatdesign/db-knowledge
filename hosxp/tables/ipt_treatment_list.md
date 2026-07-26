# `ipt_treatment_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_treatment_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| treatment_date | date | YES | MUL | NULL |  |  |
| treatment_doctor | varchar(7) | YES | MUL | NULL |  |  |
| treatment_time | time | YES |  | NULL |  |  |
| treatment_note | text | YES |  | NULL |  |  |
| treatmen_picture1 | longblob | YES |  | NULL |  |  |
| treatment_picture2 | longblob | YES |  | NULL |  |  |
| treatment_picture3 | longblob | YES |  | NULL |  |  |
| treatment_picture4 | longblob | YES |  | NULL |  |  |
| treatment_picture5 | longblob | YES |  | NULL |  |  |
| treatment_end_time | time | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ipt_treatment_id | yes | 1 |
| treatment_date | treatment_date | no | 1 |
| treatment_doctor | treatment_doctor | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "ipt_treatment_id": 2,
    "an": "540001134",
    "treatment_date": "2012-01-12",
    "treatment_doctor": null,
    "treatment_time": "14:14:41",
    "treatment_note": "ทดสอบ",
    "treatmen_picture1": null,
    "treatment_picture2": null,
    "treatment_picture3": null,
    "treatment_picture4": null,
    "treatment_picture5": null,
    "treatment_end_time": "14:14:41",
    "hos_guid": null
  },
  {
    "ipt_treatment_id": 3,
    "an": "540001134",
    "treatment_date": "2012-01-12",
    "treatment_doctor": null,
    "treatment_time": "14:14:52",
    "treatment_note": "235",
    "treatmen_picture1": null,
    "treatment_picture2": null,
    "treatment_picture3": null,
    "treatment_picture4": null,
    "treatment_picture5": null,
    "treatment_end_time": "14:14:52",
    "hos_guid": null
  },
  {
    "ipt_treatment_id": 4,
    "an": "550000082",
    "treatment_date": "2012-01-25",
    "treatment_doctor": null,
    "treatment_time": "10:41:30",
    "treatment_note": "วันที่ 24 มกราคม 2555 แพทย์เยี่ยมอาการ  ผู้ป่วยรับประทานอาหารได้  ทำกิจกรรมระบายสีได้ช่วงสั้นๆ ไม่มีทุบตัวเอง  มีล้วงคอตอน  15.00 น. 1  ครั้ง   ล้วงนานประมาณ  5 นาที",
    "treatmen_picture1": null,
    "treatment_picture2": null,
    "treatment_picture3": null,
    "treatment_picture4": null,
    "treatment_picture5": null,
    "treatment_end_time": "10:41:30",
    "hos_guid": null
  },
  {
    "ipt_treatment_id": 6,
    "an": "570001765",
    "treatment_date": "2014-12-01",
    "treatment_doctor": null,
    "treatment_time": "10:23:23",
    "treatment_note": null,
    "treatmen_picture1": null,
    "treatment_picture2": null,
    "treatment_picture3": null,
    "treatment_picture4": null,
    "treatment_picture5": null,
    "treatment_end_time": "10:23:23",
    "hos_guid": null
  }
]
```
