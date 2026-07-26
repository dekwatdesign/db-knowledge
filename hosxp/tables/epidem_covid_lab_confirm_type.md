# `epidem_covid_lab_confirm_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| epidem_covid_lab_confirm_type_id | int(11) | NO | PRI | 0 |  |  |
| epidem_covid_lab_confirm_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_epidem_covid_lab_confirm_type_name | epidem_covid_lab_confirm_type_name | yes | 1 |
| PRIMARY | epidem_covid_lab_confirm_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "epidem_covid_lab_confirm_type_id": 1,
    "epidem_covid_lab_confirm_type_name": "RT-PCR"
  },
  {
    "epidem_covid_lab_confirm_type_id": 2,
    "epidem_covid_lab_confirm_type_name": "Antigen"
  },
  {
    "epidem_covid_lab_confirm_type_id": 3,
    "epidem_covid_lab_confirm_type_name": "Antibody"
  }
]
```
