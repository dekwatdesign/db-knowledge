# `station`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| station_id | varchar(5) | NO | PRI |  |  |  |
| station_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | station_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "station_id": "1",
    "station_name": "OPD"
  },
  {
    "station_id": "2",
    "station_name": "ER"
  },
  {
    "station_id": "3",
    "station_name": "Ward"
  },
  {
    "station_id": "4",
    "station_name": "LR"
  },
  {
    "station_id": "5",
    "station_name": "PCU"
  }
]
```
