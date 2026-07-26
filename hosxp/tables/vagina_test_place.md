# `vagina_test_place`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vagina_test_place_id | int(11) | NO | PRI | 0 |  |  |
| vagina_test_place_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vagina_test_place_name | vagina_test_place_name | yes | 1 |
| PRIMARY | vagina_test_place_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "vagina_test_place_id": 1,
    "vagina_test_place_name": "โรงพยาบาล",
    "hos_guid": null
  },
  {
    "vagina_test_place_id": 2,
    "vagina_test_place_name": "สถานีอนามัย",
    "hos_guid": null
  },
  {
    "vagina_test_place_id": 3,
    "vagina_test_place_name": "คลินิก",
    "hos_guid": null
  },
  {
    "vagina_test_place_id": 4,
    "vagina_test_place_name": "ชุมชน/หมู่บ้าน",
    "hos_guid": null
  }
]
```
