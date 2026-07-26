# `accident_immo_cs_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| accident_immo_cs_type_id | int(11) | NO | PRI | 0 |  |  |
| accident_immo_cs_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_accident_immo_cs_type_name | accident_immo_cs_type_name | yes | 1 |
| PRIMARY | accident_immo_cs_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "accident_immo_cs_type_id": 1,
    "accident_immo_cs_type_name": "มี - เหมาะสม"
  },
  {
    "accident_immo_cs_type_id": 2,
    "accident_immo_cs_type_name": "มี - ไม่เหมาะสม"
  },
  {
    "accident_immo_cs_type_id": 3,
    "accident_immo_cs_type_name": "ไม่จำเป็น"
  },
  {
    "accident_immo_cs_type_id": 9,
    "accident_immo_cs_type_name": "ไม่มี"
  }
]
```
