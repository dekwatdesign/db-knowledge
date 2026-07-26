# `anc_preg_care_location`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| anc_preg_care_location_id | int(11) | NO | PRI | 0 |  |  |
| anc_preg_care_location_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_anc_preg_care_location_name | anc_preg_care_location_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | anc_preg_care_location_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "anc_preg_care_location_id": 1,
    "anc_preg_care_location_name": "สถานีอนามัย",
    "hos_guid": null
  },
  {
    "anc_preg_care_location_id": 2,
    "anc_preg_care_location_name": "บ้าน",
    "hos_guid": null
  }
]
```
