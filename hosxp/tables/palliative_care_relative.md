# `palliative_care_relative`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_relative_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_relative_fname | varchar(255) | YES |  | NULL |  |  |
| palliative_care_relative_relation | varchar(255) | YES |  | NULL |  |  |
| palliative_care_relative_phone | varchar(255) | YES |  | NULL |  |  |
| edit_datetime | datetime | YES |  | NULL |  |  |
| append_datetime | datetime | YES |  | NULL |  |  |
| entry_user | varchar(10) | YES |  | NULL |  |  |
| palliative_care_patient_register_id | int(11) | YES |  | NULL |  |  |
| palliative_care_relative_lname | varchar(255) | YES |  | NULL |  |  |
| palliative_care_relative_pname | varchar(255) | YES |  | NULL |  |  |
| parent_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_relative_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
