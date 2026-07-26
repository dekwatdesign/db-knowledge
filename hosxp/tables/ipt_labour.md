# `ipt_labour`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_labour_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | UNI | NULL |  |  |
| g | int(11) | YES |  | NULL |  |  |
| p | int(11) | YES |  | NULL |  |  |
| a | int(11) | YES |  | NULL |  |  |
| l | int(11) | YES |  | NULL |  |  |
| labour_place_id | int(11) | YES |  | NULL |  |  |
| lmp | date | YES |  | NULL |  |  |
| edc | date | YES |  | NULL |  |  |
| anc_count | int(11) | YES |  | NULL |  |  |
| ga | int(11) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| labour_type_id | int(11) | YES |  | NULL |  |  |
| anc_place_name | varchar(100) | YES |  | NULL |  |  |
| ipt_labour_guid | varchar(38) | YES | MUL | NULL |  |  |
| delivery_type_id | int(11) | YES |  | NULL |  |  |
| membrane_explode_type_id | int(11) | YES |  | NULL |  |  |
| membrane_type_id | int(11) | YES |  | NULL |  |  |
| labour_before_visit | char(1) | YES |  | NULL |  |  |
| t | int(11) | YES |  | NULL |  |  |
| entry_staff | varchar(50) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| ipt_labour_place_id | int(11) | YES |  | NULL |  |  |
| ipt_labour_anc_type_id | int(11) | YES |  | NULL |  |  |
| lmp_from_us | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| preg_no | int(11) | YES |  | NULL |  |  |
| ga_day | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an_unique | an | yes | 1 |
| ix_ipt_labour_guid | ipt_labour_guid | no | 1 |
| PRIMARY | ipt_labour_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
