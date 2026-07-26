# `dw_surveil_hospital`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "id": 1,
    "name": "รพ.ศูนย์"
  },
  {
    "id": 2,
    "name": "รพ.ทั่วไป"
  },
  {
    "id": 3,
    "name": "รพ.ชุมชน"
  },
  {
    "id": 4,
    "name": "คลินิก"
  },
  {
    "id": 5,
    "name": "สถานีอนามัย"
  }
]
```
