# `lab_lis_company`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_lis_company_id | int(11) | NO | PRI | 0 |  |  |
| lab_lis_company_name | varchar(100) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lab_lis_company_name | lab_lis_company_name | yes | 1 |
| PRIMARY | lab_lis_company_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "lab_lis_company_id": 9,
    "lab_lis_company_name": "Meditop"
  }
]
```
