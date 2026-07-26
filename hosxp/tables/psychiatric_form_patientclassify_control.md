# `psychiatric_form_patientclassify_control`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_form_patientclassify_control_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_form_patientclassify_control_name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_form_patientclassify_control_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
