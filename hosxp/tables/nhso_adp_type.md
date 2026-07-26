# `nhso_adp_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nhso_adp_type_id | int(11) | NO | PRI | 0 |  |  |
| nhso_adp_type_name | varchar(200) | YES | UNI | NULL |  |  |
| drg_chrgitem | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_nhso_adp_type_name | nhso_adp_type_name | yes | 1 |
| PRIMARY | nhso_adp_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "nhso_adp_type_id": 1,
    "nhso_adp_type_name": "1-HC (OPD)",
    "drg_chrgitem": null
  },
  {
    "nhso_adp_type_id": 9,
    "nhso_adp_type_name": "9-ตรวจวินิจฉียโดยวิธีพิเศษอื่นๆ",
    "drg_chrgitem": 9
  },
  {
    "nhso_adp_type_id": 5,
    "nhso_adp_type_name": "5-Project code",
    "drg_chrgitem": null
  },
  {
    "nhso_adp_type_id": 6,
    "nhso_adp_type_name": "6-การรักษามะเร็ง 10 ชนิดตามโปรโตคอล",
    "drg_chrgitem": null
  },
  {
    "nhso_adp_type_id": 7,
    "nhso_adp_type_name": "7-การรักษาโรคมะเร็งด้วยรังสีวิทยา",
    "drg_chrgitem": null
  },
  {
    "nhso_adp_type_id": 13,
    "nhso_adp_type_name": "13-ค่าบริการฝังเข็ม",
    "drg_chrgitem": 15
  },
  {
    "nhso_adp_type_id": 3,
    "nhso_adp_type_name": "3-ค่าบริการอื่นๆ ที่ยังไมไดจัดหมวด",
    "drg_chrgitem": 19
  },
  {
    "nhso_adp_type_id": 4,
    "nhso_adp_type_name": "4-ค่าส่งเสริมป้องกัน",
    "drg_chrgitem": 18
  }
]
```
