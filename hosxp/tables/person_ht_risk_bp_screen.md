# `person_ht_risk_bp_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_ht_risk_bp_screen_id | int(11) | NO | PRI | 0 |  |  |
| person_dmht_risk_screen_head_id | int(11) | YES | MUL | NULL |  |  |
| screen_no | int(11) | YES |  | NULL |  |  |
| bps | int(11) | YES |  | NULL |  |  |
| bpd | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_dmht_risk_screen_head_id | person_dmht_risk_screen_head_id | no | 1 |
| PRIMARY | person_ht_risk_bp_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
