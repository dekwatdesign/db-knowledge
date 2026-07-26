# `opdscreen_fp_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opdscreen_fp_type_id | int(11) | NO | PRI | 0 |  |  |
| opdscreen_fp_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opdscreen_fp_type_name | opdscreen_fp_type_name | yes | 1 |
| PRIMARY | opdscreen_fp_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "opdscreen_fp_type_id": 1,
    "opdscreen_fp_type_name": "กินยาคุม"
  },
  {
    "opdscreen_fp_type_id": 2,
    "opdscreen_fp_type_name": "ฉีดยาคุม"
  },
  {
    "opdscreen_fp_type_id": 3,
    "opdscreen_fp_type_name": "ฝังยาคุม"
  },
  {
    "opdscreen_fp_type_id": 4,
    "opdscreen_fp_type_name": "ใส่ถุงยางอนามัย"
  },
  {
    "opdscreen_fp_type_id": 5,
    "opdscreen_fp_type_name": "ใส่ห่วงอนามัย"
  },
  {
    "opdscreen_fp_type_id": 6,
    "opdscreen_fp_type_name": "ทำหมัน"
  }
]
```
