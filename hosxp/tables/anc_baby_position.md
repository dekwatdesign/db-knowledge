# `anc_baby_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| anc_baby_position_id | int(11) | NO | PRI | 0 |  |  |
| anc_baby_position_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_anc_baby_position_name | anc_baby_position_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | anc_baby_position_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "anc_baby_position_id": 1,
    "anc_baby_position_name": "LOA",
    "hos_guid": null
  },
  {
    "anc_baby_position_id": 2,
    "anc_baby_position_name": "ROA",
    "hos_guid": null
  },
  {
    "anc_baby_position_id": 3,
    "anc_baby_position_name": "OPP",
    "hos_guid": null
  },
  {
    "anc_baby_position_id": 4,
    "anc_baby_position_name": "TRANSVERSE",
    "hos_guid": null
  },
  {
    "anc_baby_position_id": 5,
    "anc_baby_position_name": "BREECH",
    "hos_guid": null
  },
  {
    "anc_baby_position_id": 6,
    "anc_baby_position_name": "FOOT",
    "hos_guid": null
  },
  {
    "anc_baby_position_id": 7,
    "anc_baby_position_name": "ไม่ทราบ",
    "hos_guid": null
  }
]
```
