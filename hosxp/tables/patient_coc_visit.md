# `patient_coc_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_coc_visit_id | int(11) | NO | PRI | 0 |  |  |
| cid | char(13) | YES | MUL | NULL |  |  |
| patient_coc_visit_type_id | int(11) | YES |  | NULL |  |  |
| vnan | varchar(12) | YES |  | NULL |  |  |
| visit_date | date | YES |  | NULL |  |  |
| visit_time | time | YES |  | NULL |  |  |
| dch_date | date | YES |  | NULL |  |  |
| dch_time | time | YES |  | NULL |  |  |
| inscl_code | varchar(3) | YES |  | NULL |  |  |
| dx1 | varchar(10) | YES |  | NULL |  |  |
| dx2 | varchar(10) | YES |  | NULL |  |  |
| dx3 | varchar(10) | YES |  | NULL |  |  |
| dx4 | varchar(10) | YES |  | NULL |  |  |
| dx5 | varchar(10) | YES |  | NULL |  |  |
| bw | double(15,3) | YES |  | NULL |  |  |
| height | double(15,3) | YES |  | NULL |  |  |
| temperature | double(15,3) | YES |  | NULL |  |  |
| bps | int(11) | YES |  | NULL |  |  |
| bpd | int(11) | YES |  | NULL |  |  |
| pulse | int(11) | YES |  | NULL |  |  |
| rr | int(11) | YES |  | NULL |  |  |
| hpi_text | text | YES |  | NULL |  |  |
| bmi | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | no | 1 |
| PRIMARY | patient_coc_visit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
