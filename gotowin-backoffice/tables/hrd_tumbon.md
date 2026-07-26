# `hrd_tumbon`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | 0 |  |  |
| AMPHUR_ID | int | YES | MUL | NULL |  | รหัสอำเภอ |
| PROVINCE_ID | int | YES | MUL | NULL |  | รหัสจังหวัด |
| TUMBON_NAME | varchar(60) | YES |  |  |  | ชื่อตำบล |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| fk_base_tambons_base_amphurs1_idx | AMPHUR_ID | no | 1 |
| fk_base_tambons_base_provinces1_idx | PROVINCE_ID | no | 1 |
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ID": 100101,
    "AMPHUR_ID": 1001,
    "PROVINCE_ID": 10,
    "TUMBON_NAME": "พระบรมมหาราชวัง"
  },
  {
    "ID": 100102,
    "AMPHUR_ID": 1001,
    "PROVINCE_ID": 10,
    "TUMBON_NAME": "วังบูรพาภิรมย์"
  },
  {
    "ID": 100103,
    "AMPHUR_ID": 1001,
    "PROVINCE_ID": 10,
    "TUMBON_NAME": "วัดราชบพิธ"
  },
  {
    "ID": 100104,
    "AMPHUR_ID": 1001,
    "PROVINCE_ID": 10,
    "TUMBON_NAME": "สำราญราษฎร์"
  },
  {
    "ID": 100105,
    "AMPHUR_ID": 1001,
    "PROVINCE_ID": 10,
    "TUMBON_NAME": "ศาลเจ้าพ่อเสือ"
  },
  {
    "ID": 100106,
    "AMPHUR_ID": 1001,
    "PROVINCE_ID": 10,
    "TUMBON_NAME": "เสาชิงช้า"
  },
  {
    "ID": 100107,
    "AMPHUR_ID": 1001,
    "PROVINCE_ID": 10,
    "TUMBON_NAME": "บวรนิเวศ"
  },
  {
    "ID": 100108,
    "AMPHUR_ID": 1001,
    "PROVINCE_ID": 10,
    "TUMBON_NAME": "ตลาดยอด"
  }
]
```
