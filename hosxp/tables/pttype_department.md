# `pttype_department`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype_department_id | int(11) | NO | PRI | 0 |  |  |
| pttype_department_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pttype_department_name | pttype_department_name | yes | 1 |
| PRIMARY | pttype_department_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "pttype_department_id": 1,
    "pttype_department_name": "ผู้ป่วยนอก"
  },
  {
    "pttype_department_id": 2,
    "pttype_department_name": "ผู้ป่วยใน"
  }
]
```
