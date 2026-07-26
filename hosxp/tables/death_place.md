# `death_place`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| death_place_id | int(11) | NO | PRI | 0 |  |  |
| death_place_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_death_place_name | death_place_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | death_place_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "death_place_id": 0,
    "death_place_name": "ไม่ระบุ",
    "hos_guid": null
  },
  {
    "death_place_id": 1,
    "death_place_name": "ในสถานพยาบาล",
    "hos_guid": null
  },
  {
    "death_place_id": 2,
    "death_place_name": "นอกสถานพยาบาล",
    "hos_guid": null
  }
]
```
