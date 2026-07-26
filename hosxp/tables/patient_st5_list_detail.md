# `patient_st5_list_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_st5_list_detail_id | int(11) | NO | PRI | 0 |  |  |
| note | varchar(250) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| patient_st5_list_id | int(11) | YES | MUL | NULL |  |  |
| patient_st5_activity_id | int(11) | YES | MUL | NULL |  |  |
| patient_st5_score | int(11) | YES |  | NULL |  |  |
| patient_st5_question_act_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_patient_st5_list_detail_activity_id | patient_st5_activity_id | no | 1 |
| ix_idx_patient_st5_list_detail_activity_id_index | patient_st5_question_act_id | no | 1 |
| ix_idx_patient_st5_list_detail_list_id | patient_st5_list_id | no | 1 |
| PRIMARY | patient_st5_list_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
