# `ipt_blood_glu_test_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_blood_glu_test_list_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| ipt_blood_glu_test_date | date | YES | MUL | NULL |  |  |
| ipt_blood_glu_test_time | time | YES |  | NULL |  |  |
| ipt_blood_glu_test_dtx | float | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| ipt_blood_glu_test_unit | int(11) | YES |  | NULL |  |  |
| ipt_blood_glu_test_text | text | YES |  | NULL |  |  |
| doctor_check | varchar(7) | YES |  | NULL |  |  |
| doctor_injector | varchar(7) | YES |  | NULL |  |  |
| doctor_auditor | varchar(7) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| staff | varchar(7) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| hos_guid_dtx | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_ipt_blood_glu_test_list_an | an | no | 1 |
| ix_idx_ipt_blood_glu_test_list_date | ipt_blood_glu_test_date | no | 1 |
| ix_idx_ipt_blood_glu_test_list_hn | hn | no | 1 |
| PRIMARY | ipt_blood_glu_test_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
