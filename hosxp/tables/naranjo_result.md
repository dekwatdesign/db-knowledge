# `naranjo_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| naranjo_result_id | int(11) | NO | PRI | 0 |  |  |
| naranjo_result_name | varchar(150) | YES | UNI | NULL |  |  |
| min_score | int(11) | YES |  | NULL |  |  |
| max_score | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_naranjo_result_name | naranjo_result_name | yes | 1 |
| PRIMARY | naranjo_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "naranjo_result_id": 1,
    "naranjo_result_name": "Definite - ใช่แน่",
    "min_score": 9,
    "max_score": 999,
    "hos_guid": null
  },
  {
    "naranjo_result_id": 2,
    "naranjo_result_name": "Probable - ใช่",
    "min_score": 5,
    "max_score": 8,
    "hos_guid": null
  },
  {
    "naranjo_result_id": 3,
    "naranjo_result_name": "Possible - อาจจะใช่",
    "min_score": 1,
    "max_score": 4,
    "hos_guid": null
  },
  {
    "naranjo_result_id": 4,
    "naranjo_result_name": "Doubtful - น่าสงสัย",
    "min_score": -999,
    "max_score": 0,
    "hos_guid": null
  }
]
```
