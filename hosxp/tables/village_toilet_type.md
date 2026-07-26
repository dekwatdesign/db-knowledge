# `village_toilet_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_toilet_type_id | int(11) | NO | PRI | 0 |  |  |
| village_toilet_type_name | varchar(250) | YES | UNI | NULL |  |  |
| setting_target | int(11) | YES |  | NULL |  |  |
| setting_has_pass | int(11) | YES |  | NULL |  |  |
| pass_percent | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_toilet_type_name | village_toilet_type_name | yes | 1 |
| PRIMARY | village_toilet_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "village_toilet_type_id": 1,
    "village_toilet_type_name": "แหล่งท่องเที่ยวของกรมอุทยานแห่งชาติ",
    "setting_target": 0,
    "setting_has_pass": null,
    "pass_percent": null,
    "hos_guid": "{967B1EAB-E5DC-11DF-BBCF-F3CA1C2D0000}",
    "hospcode": null
  }
]
```
