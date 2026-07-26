# `physic_main_dch_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_main_dch_status_id | int(11) | NO | PRI | 0 |  |  |
| physic_main_dch_status_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_main_dch_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "physic_main_dch_status_id": 1,
    "physic_main_dch_status_name": "ติดตามการรักษา"
  },
  {
    "physic_main_dch_status_id": 2,
    "physic_main_dch_status_name": "เสียชีวิต"
  }
]
```
