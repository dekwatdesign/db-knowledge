# `house_animal_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_animal_type_id | int(11) | NO | PRI | 0 |  |  |
| house_animal_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_house_animal_type_name | house_animal_type_name | yes | 1 |
| PRIMARY | house_animal_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "house_animal_type_id": 1,
    "house_animal_type_name": "เป็ด",
    "hos_guid": "{91D1AFC0-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_animal_type_id": 2,
    "house_animal_type_name": "ไก่",
    "hos_guid": "{91D1B1E6-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_animal_type_id": 3,
    "house_animal_type_name": "นก",
    "hos_guid": "{91D1B2F4-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_animal_type_id": 4,
    "house_animal_type_name": "หมู",
    "hos_guid": "{91D1B3EE-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_animal_type_id": 5,
    "house_animal_type_name": "แมว",
    "hos_guid": "{91D1B4E8-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_animal_type_id": 6,
    "house_animal_type_name": "สุนัข",
    "hos_guid": "{91D1B5D8-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_animal_type_id": 7,
    "house_animal_type_name": "ห่าน",
    "hos_guid": "{91D1B6C8-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_animal_type_id": 8,
    "house_animal_type_name": "กระรอก",
    "hos_guid": "{91D1B7B8-F542-11DE-BFF4-00215E472B30}"
  }
]
```
