# `acupunture_part`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| acupunture_part_id | int(11) | NO | PRI | 0 |  |  |
| acupunture_part_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_acupunture_part_name | acupunture_part_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | acupunture_part_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "acupunture_part_id": 1,
    "acupunture_part_name": "Head, Neck",
    "hos_guid": null
  },
  {
    "acupunture_part_id": 2,
    "acupunture_part_name": "Body",
    "hos_guid": null
  },
  {
    "acupunture_part_id": 3,
    "acupunture_part_name": "Arm, Hand",
    "hos_guid": null
  },
  {
    "acupunture_part_id": 4,
    "acupunture_part_name": "Leg",
    "hos_guid": null
  }
]
```
