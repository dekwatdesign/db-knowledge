# `person_dmht_cormobidity_screen_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_dmht_cormobidity_screen_detail_id | int(11) | NO | PRI | 0 |  |  |
| person_dmht_cormobidity_id | int(11) | YES |  | NULL |  |  |
| person_dmht_risk_screen_head_id | int(11) | YES | MUL | NULL |  |  |
| has_cormobidity | char(1) | YES |  | NULL |  |  |
| screen_note | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_dmht_risk_screen_head_id | person_dmht_risk_screen_head_id | no | 1 |
| PRIMARY | person_dmht_cormobidity_screen_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
