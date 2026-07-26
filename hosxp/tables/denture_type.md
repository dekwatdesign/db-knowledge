# `denture_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| denture_type_id | int(11) | NO | PRI | 0 |  |  |
| denture_type_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | denture_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "denture_type_id": 1,
    "denture_type_name": "ฟันเทียมทั้งปาก"
  },
  {
    "denture_type_id": 2,
    "denture_type_name": "ฟันเทียมทั้งปากเฉพาะขากรรไกรบน"
  },
  {
    "denture_type_id": 3,
    "denture_type_name": "ฟันเทียมทั้งปากเฉพาะขากรรไกรล่าง"
  },
  {
    "denture_type_id": 4,
    "denture_type_name": "ฟันปลอมบางส่วน"
  },
  {
    "denture_type_id": 5,
    "denture_type_name": "ฟันปลอมบางส่วนขากรรไกรบน"
  },
  {
    "denture_type_id": 6,
    "denture_type_name": "ฟันปลอมบางส่วนขากรรไกรล่าง"
  },
  {
    "denture_type_id": 7,
    "denture_type_name": "ฟันปลอมทั้งปากแบบทับราก"
  },
  {
    "denture_type_id": 8,
    "denture_type_name": "ฟันปลอมบางส่วนแบบทับราก"
  }
]
```
