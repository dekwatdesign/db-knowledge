# `psy_register_accept_form`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_register_accept_form_id | int(11) | NO | PRI | 0 |  |  |
| psy_register_id | int(11) | YES |  | NULL |  |  |
| psy_register_accept_form_person | varchar(150) | YES |  | NULL |  |  |
| psy_register_accept_form_parent_type | int(11) | YES |  | NULL |  |  |
| psy_register_accept_form_address | text | YES |  | NULL |  |  |
| psy_register_accept_form_tel | varchar(50) | YES |  | NULL |  |  |
| psy_register_accept_form_witness | varchar(150) | YES |  | NULL |  |  |
| psy_register_accept_form_begindate | date | YES |  | NULL |  |  |
| psy_register_accept_form_enddate | date | YES |  | NULL |  |  |
| psy_register_accept_form_refer_data | char(1) | YES |  | NULL |  |  |
| psy_register_accept_form_hhc | char(1) | YES |  | NULL |  |  |
| psy_register_accept_form_lastupdate | datetime | YES |  | NULL |  |  |
| psy_register_accept_form_staff | varchar(50) | YES |  | NULL |  |  |
| psy_register_accept_form_file | longblob | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_register_accept_form_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
