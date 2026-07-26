# `cancer_register_drug_profile`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_register_drug_profile_id | int(11) | NO | PRI | 0 |  |  |
| cancer_register_drug_profile_icode | char(7) | YES |  | NULL |  |  |
| cancer_register_drug_profile_qty | double(13,3) | YES |  | NULL |  |  |
| cancer_register_drug_profile_drugusage | varchar(7) | YES |  | NULL |  |  |
| append_datetime | datetime | YES |  | NULL |  |  |
| edit_datetime | datetime | YES |  | NULL |  |  |
| entry_user | varchar(255) | YES |  | NULL |  |  |
| patient_cancer_registeration_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_register_drug_profile_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
