# `person_house_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_house_position_id | int(11) | NO | PRI | 0 |  |  |
| person_house_position_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_house_position_name | person_house_position_name | yes | 1 |
| PRIMARY | person_house_position_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "person_house_position_id": 1,
    "person_house_position_name": "เจ้าบ้าน",
    "hos_guid": "{807B4642-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "person_house_position_id": 2,
    "person_house_position_name": "ผู้อยู่อาศัย",
    "hos_guid": "{807B4890-F61D-11DE-BFF4-00215E472B30}"
  }
]
```
