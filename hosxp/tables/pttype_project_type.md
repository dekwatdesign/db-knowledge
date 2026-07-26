# `pttype_project_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype_project_type_code | varchar(10) | NO | PRI |  |  |  |
| pttype_project_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pttype_project_type_name | pttype_project_type_name | yes | 1 |
| PRIMARY | pttype_project_type_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "pttype_project_type_code": "COV-19",
    "pttype_project_type_name": "ผู้ป่วยโรค Covid-19"
  }
]
```
