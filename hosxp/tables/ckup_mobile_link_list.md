# `ckup_mobile_link_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_mobile_link_list_id | int(11) | NO | PRI | 0 |  |  |
| ckup_mobile_link_id | int(11) | YES |  | NULL |  |  |
| ckup_patient_comp_id | int(11) | YES |  | NULL |  |  |
| link_success | char(1) | YES |  | NULL |  |  |
| pre_visit_success | char(1) | YES |  | NULL |  |  |
| ckup_pre_visit_id | int(11) | YES |  | NULL |  |  |
| ckup_prog_id | int(11) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| send_hl7_file | longblob | YES |  | NULL |  |  |
| receive_hl7_file | longblob | YES |  | NULL |  |  |
| transfer_track | char(3) | YES |  | NULL |  |  |
| transfer_action | varchar(250) | YES |  | NULL |  |  |
| patient_img | longblob | YES |  | NULL |  |  |
| flg_register | int(11) | YES |  | NULL |  |  |
| read_file | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ckup_mobile_link_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
