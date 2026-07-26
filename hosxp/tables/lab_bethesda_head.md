# `lab_bethesda_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_order_number | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| cytologic_no | int(11) | YES | MUL | NULL |  |  |
| bethesda_specimen_id | int(11) | YES |  | NULL |  |  |
| previous_treatment | text | YES |  | NULL |  |  |
| clinical_findings | text | YES |  | NULL |  |  |
| clinical_dx | varchar(7) | YES |  | NULL |  |  |
| last_pap_smear | text | YES |  | NULL |  |  |
| screener_stf | varchar(25) | YES |  | NULL |  |  |
| cytotechnologist_stf | varchar(25) | YES |  | NULL |  |  |
| pathologist_stf | varchar(25) | YES |  | NULL |  |  |
| report_date | datetime | YES |  | NULL |  |  |
| request_date | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| cytologic_no | cytologic_no | no | 1 |
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | lab_order_number | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
