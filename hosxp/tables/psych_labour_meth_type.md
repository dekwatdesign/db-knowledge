# `psych_labour_meth_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_labour_meth_type_id | int(11) | NO | PRI | 0 |  |  |
| psych_labour_meth_type_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | psych_labour_meth_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "psych_labour_meth_type_id": 1,
    "psych_labour_meth_type_name": "ปกติ, ธรรมชาติ",
    "active": null
  },
  {
    "psych_labour_meth_type_id": 2,
    "psych_labour_meth_type_name": "ผ่าตัด",
    "active": null
  },
  {
    "psych_labour_meth_type_id": 3,
    "psych_labour_meth_type_name": "ใช้เครื่องช่วยหายใจ",
    "active": null
  }
]
```
