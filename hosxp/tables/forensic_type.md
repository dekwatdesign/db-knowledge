# `forensic_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| forensic_type_id | int(11) | NO | PRI | 0 |  |  |
| forensic_type_name | varchar(50) | YES |  | NULL |  |  |
| lawsuit | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | forensic_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "forensic_type_id": 1,
    "forensic_type_name": "ชันสูตรทั่วไป",
    "lawsuit": "N"
  },
  {
    "forensic_type_id": 2,
    "forensic_type_name": "ชันสูตรคดีความ",
    "lawsuit": "Y"
  }
]
```
