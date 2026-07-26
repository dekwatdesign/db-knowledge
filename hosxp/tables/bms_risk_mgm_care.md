# `bms_risk_mgm_care`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bms_risk_mgm_care_id | int(11) | NO | PRI | 0 |  |  |
| bms_risk_mgm_list_id | int(11) | YES | MUL | NULL |  |  |
| bms_risk_care_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | bms_risk_mgm_list_id | no | 1 |
| PRIMARY | bms_risk_mgm_care_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
