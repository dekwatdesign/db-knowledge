# `psych_agent_drug_receive`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_agent_drug_receive_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| psych_agent_drug_receive_name | varchar(255) | YES |  | NULL |  |  |
| patient_relation_type_id | int(11) | YES | MUL | NULL |  |  |
| psych_agent_drug_receive | char(1) | YES |  | NULL |  |  |
| psych_agent_drug_receive_new | char(1) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| psych_agent_drug_receive_old | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_patient_relation_type_id | patient_relation_type_id | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | psych_agent_drug_receive_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
