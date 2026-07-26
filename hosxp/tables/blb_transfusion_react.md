# `blb_transfusion_react`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_transfusion_react_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(13) | YES |  | NULL |  |  |
| blb_request_id | int(11) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| blb_blood_items_id | int(11) | YES |  | NULL |  |  |
| blb_bag_cc | int(11) | YES |  | NULL |  |  |
| blb_trans_react_bag_number | varchar(50) | YES |  | NULL |  |  |
| blb_transfusion_react_doctor | varchar(6) | YES |  | NULL |  |  |
| blb_transfusion_react_date | date | YES |  | NULL |  |  |
| blb_trans_react_rec_date | date | YES |  | NULL |  |  |
| blb_trans_react_rec_time | time | YES |  | NULL |  |  |
| blb_reaction_symptom_list | varchar(100) | YES |  | NULL |  |  |
| blb_reaction_symp_list_name | varchar(255) | YES |  | NULL |  |  |
| blb_reaction_symp_list_date | date | YES |  | NULL |  |  |
| blb_reaction_symp_list_time | time | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | blb_transfusion_react_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
