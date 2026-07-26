# `drugitems_icd10_restrict_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_icd10_restrict_type_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | drugitems_icd10_restrict_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "drugitems_icd10_restrict_type_id": 1,
    "name": "ต้องมีรหัสนี้"
  },
  {
    "drugitems_icd10_restrict_type_id": 2,
    "name": "ห้ามสั่งใช้หากมีการให้รหัสนี้"
  }
]
```
