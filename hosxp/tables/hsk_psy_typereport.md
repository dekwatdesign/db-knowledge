# `hsk_psy_typereport`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| s_id | char(5) | NO | PRI |  |  |  |
| s_name | varchar(100) | YES |  | NULL |  |  |
| s_status | varchar(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | s_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "s_id": "R01",
    "s_name": "ตรวจทางจิตวิทยา",
    "s_status": "Y"
  },
  {
    "s_id": "R02",
    "s_name": "บำบัดทางจิตวิทยา",
    "s_status": "Y"
  },
  {
    "s_id": "R03",
    "s_name": "บำบัดทางจิตวิทยาแบบย่อ",
    "s_status": "Y"
  }
]
```
