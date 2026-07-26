# `referout_sp_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| referout_sp_type_id | int(11) | NO | PRI | 0 |  |  |
| referout_sp_type_name | varchar(200) | YES | UNI | NULL |  |  |
| export_code | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_referout_sp_type_name | referout_sp_type_name | yes | 1 |
| PRIMARY | referout_sp_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "referout_sp_type_id": 1,
    "referout_sp_type_name": "STEMI",
    "export_code": "01"
  },
  {
    "referout_sp_type_id": 2,
    "referout_sp_type_name": "Stroke",
    "export_code": "02"
  },
  {
    "referout_sp_type_id": 3,
    "referout_sp_type_name": "Trauma",
    "export_code": "03"
  },
  {
    "referout_sp_type_id": 4,
    "referout_sp_type_name": "Cancer",
    "export_code": "04"
  },
  {
    "referout_sp_type_id": 5,
    "referout_sp_type_name": "Sepsis",
    "export_code": "05"
  },
  {
    "referout_sp_type_id": 6,
    "referout_sp_type_name": "Pregnancy,Labor,Postpartum",
    "export_code": "06"
  },
  {
    "referout_sp_type_id": 7,
    "referout_sp_type_name": "New born",
    "export_code": "07"
  },
  {
    "referout_sp_type_id": 99,
    "referout_sp_type_name": "อื่นๆ",
    "export_code": "99"
  }
]
```
