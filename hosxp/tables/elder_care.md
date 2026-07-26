# `elder_care`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| elder_care_id | int(11) | NO | PRI | 0 |  |  |
| elder_care_fname | varchar(50) | YES |  | NULL |  |  |
| elder_care_lname | varchar(50) | YES |  | NULL |  |  |
| elder_care_address | varchar(255) | YES |  | NULL |  |  |
| elder_care_phone | varchar(10) | YES |  | NULL |  |  |
| pname_code | varchar(25) | YES |  | NULL |  |  |
| elder_relation_id | int(11) | YES |  | NULL |  |  |
| elder_home_visit_id | int(11) | YES |  | NULL |  |  |
| elder_patient_register_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | elder_care_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
