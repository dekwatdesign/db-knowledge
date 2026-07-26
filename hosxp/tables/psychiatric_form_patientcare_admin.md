# `psychiatric_form_patientcare_admin`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_form_patientcare_admin_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_form_patientcare_id | int(11) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_admin_name | varchar(50) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_admin_occupation | char(4) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_admin_relation | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_admin_phone | varchar(15) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_form_patientcare_admin_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
