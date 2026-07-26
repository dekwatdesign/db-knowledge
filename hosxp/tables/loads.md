# `loads`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| loads_id | varchar(5) | NO | PRI |  |  |  |
| loads_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | loads_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "loads_id": "01",
    "loads_name": "รถ Refer"
  },
  {
    "loads_id": "02",
    "loads_name": "รถ Refer พร้อมพยาบาล"
  },
  {
    "loads_id": "03",
    "loads_name": "รถ Refer พร้อมแพทย์ + พยาบาล"
  },
  {
    "loads_id": "04",
    "loads_name": "ผู้ป่วยเดินทางเอง"
  }
]
```
