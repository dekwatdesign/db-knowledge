# `epidem_covid_isolate_place`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| epidem_covid_isolate_place_id | int(11) | NO | PRI | 0 |  |  |
| epidem_covid_isolate_place_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | epidem_covid_isolate_place_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "epidem_covid_isolate_place_id": 1,
    "epidem_covid_isolate_place_name": "โรงพยาบาล"
  },
  {
    "epidem_covid_isolate_place_id": 2,
    "epidem_covid_isolate_place_name": "โรงพยาบาลสนาม"
  },
  {
    "epidem_covid_isolate_place_id": 3,
    "epidem_covid_isolate_place_name": "Hospitel"
  },
  {
    "epidem_covid_isolate_place_id": 4,
    "epidem_covid_isolate_place_name": "แยกกักในชุมชน (CI)"
  },
  {
    "epidem_covid_isolate_place_id": 5,
    "epidem_covid_isolate_place_name": "ที่พักอาศัย (HI)"
  },
  {
    "epidem_covid_isolate_place_id": 6,
    "epidem_covid_isolate_place_name": "อื่นๆ"
  }
]
```
