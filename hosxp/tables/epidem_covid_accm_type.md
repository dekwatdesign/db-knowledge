# `epidem_covid_accm_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| epidem_covid_accm_type_id | int(11) | NO | PRI | 0 |  |  |
| epidem_covid_accm_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_epidem_covid_accm_type_name | epidem_covid_accm_type_name | yes | 1 |
| PRIMARY | epidem_covid_accm_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "epidem_covid_accm_type_id": 1,
    "epidem_covid_accm_type_name": "บ้านเดี่ยว"
  },
  {
    "epidem_covid_accm_type_id": 2,
    "epidem_covid_accm_type_name": "ตึกแถว/ทาวน์เฮ้าส์"
  },
  {
    "epidem_covid_accm_type_id": 3,
    "epidem_covid_accm_type_name": "หอพัก/คอนโด/ห้องเช่า"
  },
  {
    "epidem_covid_accm_type_id": 4,
    "epidem_covid_accm_type_name": "พักห้องรวมกันคนจำนวนมาก"
  },
  {
    "epidem_covid_accm_type_id": 5,
    "epidem_covid_accm_type_name": "อื่นๆ"
  }
]
```
