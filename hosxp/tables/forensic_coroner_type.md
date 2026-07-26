# `forensic_coroner_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| forensic_coroner_type_id | int(11) | NO | PRI | 0 |  |  |
| forensic_coroner_type_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | forensic_coroner_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "forensic_coroner_type_id": 1,
    "forensic_coroner_type_name": "เจ้าหน้าที่ชันสูตร"
  },
  {
    "forensic_coroner_type_id": 2,
    "forensic_coroner_type_name": "ผู้ช่วยชันสูตร"
  }
]
```
