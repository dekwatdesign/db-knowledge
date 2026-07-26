# `person_dm_fgc_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_dm_fgc_screen_id | int(11) | NO | PRI | 0 |  |  |
| person_dmht_risk_screen_head_id | int(11) | YES | MUL | NULL |  |  |
| screen_datetime | datetime | YES |  | NULL |  |  |
| fgc_result | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |
| food_limit | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_dmht_risk_screen_head_id | person_dmht_risk_screen_head_id | no | 1 |
| PRIMARY | person_dm_fgc_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
