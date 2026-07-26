# `psychiatric_form_patientcare_drug`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_form_patientcare_drug_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_form_patientcare_id | int(11) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_drug_icode | varchar(10) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_drug_usage | varchar(250) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_drug_qty | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_form_patientcare_drug_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
