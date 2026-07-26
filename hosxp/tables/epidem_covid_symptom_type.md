# `epidem_covid_symptom_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| epidem_covid_symptom_type_id | int(11) | NO | PRI | 0 |  |  |
| epidem_covid_symptom_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_epidem_covid_symptom_type_name | epidem_covid_symptom_type_name | yes | 1 |
| PRIMARY | epidem_covid_symptom_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "epidem_covid_symptom_type_id": 1,
    "epidem_covid_symptom_type_name": "ไม่มีอาการ"
  },
  {
    "epidem_covid_symptom_type_id": 2,
    "epidem_covid_symptom_type_name": "มีอาการแต่ไม่รุนแรง และไม่เกี่ยวกับระบบทางเดินหายใจ"
  },
  {
    "epidem_covid_symptom_type_id": 3,
    "epidem_covid_symptom_type_name": "มีอาการที่เกี่ยวกับระบบทางเดินหายใจ (ปอดบวม)"
  }
]
```
