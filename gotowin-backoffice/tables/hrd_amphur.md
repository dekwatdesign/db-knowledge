# `hrd_amphur`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | 0 |  | เลขรัน |
| PROVINCE_ID | int | YES | MUL | NULL |  | รหัสจังหวัด |
| AMPHUR_NAME | varchar(60) | YES |  |  |  | ชื่ออำเภอ |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| fk_base_districts_base_provinces1_idx | PROVINCE_ID | no | 1 |
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ID": 1001,
    "PROVINCE_ID": 10,
    "AMPHUR_NAME": "พระนคร"
  },
  {
    "ID": 1002,
    "PROVINCE_ID": 10,
    "AMPHUR_NAME": "ดุสิต"
  },
  {
    "ID": 1003,
    "PROVINCE_ID": 10,
    "AMPHUR_NAME": "หนองจอก"
  },
  {
    "ID": 1004,
    "PROVINCE_ID": 10,
    "AMPHUR_NAME": "บางรัก"
  },
  {
    "ID": 1005,
    "PROVINCE_ID": 10,
    "AMPHUR_NAME": "บางเขน"
  },
  {
    "ID": 1006,
    "PROVINCE_ID": 10,
    "AMPHUR_NAME": "บางกะปิ"
  },
  {
    "ID": 1007,
    "PROVINCE_ID": 10,
    "AMPHUR_NAME": "ปทุมวัน"
  },
  {
    "ID": 1008,
    "PROVINCE_ID": 10,
    "AMPHUR_NAME": "ป้อมปราบศัตรูพ่าย"
  }
]
```
