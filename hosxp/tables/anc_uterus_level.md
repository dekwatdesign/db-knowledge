# `anc_uterus_level`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| anc_uterus_level_id | int(11) | NO | PRI | 0 |  |  |
| anc_uterus_level_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_anc_uterus_level_name | anc_uterus_level_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | anc_uterus_level_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "anc_uterus_level_id": 1,
    "anc_uterus_level_name": "SP",
    "hos_guid": null
  },
  {
    "anc_uterus_level_id": 2,
    "anc_uterus_level_name": "1/3 มากกว่า SP",
    "hos_guid": null
  },
  {
    "anc_uterus_level_id": 3,
    "anc_uterus_level_name": "2/3 มากกว่า SP",
    "hos_guid": null
  },
  {
    "anc_uterus_level_id": 4,
    "anc_uterus_level_name": "ระดับสะดือ",
    "hos_guid": null
  },
  {
    "anc_uterus_level_id": 5,
    "anc_uterus_level_name": "1/4 มากกว่าสะดือ",
    "hos_guid": null
  },
  {
    "anc_uterus_level_id": 6,
    "anc_uterus_level_name": "2/4 มากกว่าสะดือ",
    "hos_guid": null
  },
  {
    "anc_uterus_level_id": 7,
    "anc_uterus_level_name": "3/4 มากกว่าสะดือ",
    "hos_guid": null
  }
]
```
